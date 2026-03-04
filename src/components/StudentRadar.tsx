import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Modal,
    SectionList,
    Vibration,
    Platform,
    Alert,
    ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { EXAM_CATEGORIES } from '../data/exams';
import { BluetoothChatScreen } from './BluetoothChatScreen';
import { nearbyService } from '../services/nearbyService';

interface StudentRadarProps {
    accentColor?: string;
}

interface Peer {
    peerId: string;
    name: string;
}

// Match codes — defined outside the component so they are stable across renders.
const MATCH_CODES = [
    { emoji: '🍎', name: 'Mela Rossa', color: '#ef4444' },
    { emoji: '🍋', name: 'Limone Giallo', color: '#eab308' },
    { emoji: '🍀', name: 'Trifoglio Verde', color: '#22c55e' },
    { emoji: '💎', name: 'Diamante Blu', color: '#3b82f6' },
    { emoji: '🦊', name: 'Volpe Arancione', color: '#f97316' },
    { emoji: '🍇', name: 'Uva Viola', color: '#a855f7' },
    { emoji: '🍩', name: 'Ciambella Rosa', color: '#ec4899' },
    { emoji: '☕️', name: 'Caffè Marrone', color: '#84cc16' }
];

export const StudentRadar: React.FC<StudentRadarProps> = ({ accentColor = '#6366f1' }) => {

    // ---- UI State (drives renders) ----

    const [selectedExam, setSelectedExam] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScanning, setIsScanning] = useState(false);

    const [connectingPeer, setConnectingPeer] = useState<Peer | null>(null);
    const [matchFound, setMatchFound] = useState<{
        exam: string;
        peer: Peer;
        matchCode: { emoji: string; name: string; color: string };
    } | null>(null);
    const [pendingInvitation, setPendingInvitation] = useState<Peer | null>(null);

    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatStatus, setChatStatus] = useState<'IDLE' | 'WAITING' | 'RECEIVED'>('IDLE');
    const [timeLeft, setTimeLeft] = useState(0);

    const pulseAnim = useRef(new Animated.Value(0)).current;

    // ---- Refs (always-current values for native listeners) ----

    const isScanningRef = useRef(false);
    const selectedExamRef = useRef<string | null>(null);
    const matchFoundRef = useRef<typeof matchFound>(null);
    const isChatOpenRef = useRef(false);
    const chatStatusRef = useRef<'IDLE' | 'WAITING' | 'RECEIVED'>('IDLE');

    const isDisconnectingRef = useRef(false);
    const connectingPeerIdRef = useRef<string | null>(null);   // dedup guard
    const connectedPeerIdRef = useRef<string | null>(null);    // established connection
    const pendingMatchPeerRef = useRef<Peer | null>(null);     // non-initiator waiting for code
    const fallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null); // iOS asymmetric discovery fallback
    const connectTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // guard against stuck connecting

    // ---- Keep refs in sync with state ----

    useEffect(() => { isScanningRef.current = isScanning; }, [isScanning]);
    useEffect(() => { selectedExamRef.current = selectedExam; }, [selectedExam]);
    useEffect(() => { matchFoundRef.current = matchFound; }, [matchFound]);
    useEffect(() => { isChatOpenRef.current = isChatOpen; }, [isChatOpen]);
    useEffect(() => { chatStatusRef.current = chatStatus; }, [chatStatus]);

    // ---- Pulse animation ----

    useEffect(() => {
        if (!isScanning) {
            pulseAnim.stopAnimation();
            return;
        }
        pulseAnim.setValue(0);
        Animated.loop(
            Animated.timing(pulseAnim, {
                toValue: 1,
                duration: 2500,
                useNativeDriver: true,
            })
        ).start();
    }, [isScanning]);

    // Helper: finalize a match with synchronized code
    const finishMatch = useCallback((exam: string, peer: Peer, codeIndex: number) => {
        connectedPeerIdRef.current = peer.peerId;
        connectingPeerIdRef.current = null;
        pendingMatchPeerRef.current = null;

        setIsScanning(false);
        setConnectingPeer(null);
        setChatStatus('IDLE');
        setTimeLeft(0);
        setMatchFound({ exam, peer, matchCode: MATCH_CODES[codeIndex] || MATCH_CODES[0] });
        Vibration.vibrate([0, 500, 200, 500]);

        // NOTE: We intentionally do NOT call stopRadar() here.
        // On iOS, stopping advertise/discovery can tear down the underlying
        // Multipeer session and fire a spurious onDisconnected event, causing
        // an infinite connect-disconnect loop. Advertise/discovery will be
        // stopped lazily when the user disconnects or toggles the radar off.
    }, []);

    // ---- SINGLE listener registration on mount ----
    //
    // All 6 native event listeners are registered ONCE. They read mutable state
    // exclusively through refs, so there are no stale-closure issues and no need
    // to re-subscribe when React state changes.

    useEffect(() => {

        // -- onPeerFound --
        const unsubFound = nearbyService.onPeerFound((peer) => {
            if (!isScanningRef.current) return;
            // Already connecting/connected to someone? Skip.
            if (connectedPeerIdRef.current || connectingPeerIdRef.current) return;

            const parts = peer.name.split('|');
            if (parts.length < 3 || parts[0] !== 'UC') return;

            const peerSessionId = parts[1];
            const peerExam = parts.slice(2).join('|');
            const mySessionId = nearbyService.getMySessionId();

            if (peerSessionId === mySessionId) return;
            if (!selectedExamRef.current || !peerExam.startsWith(selectedExamRef.current)) return;

            setConnectingPeer(prev => prev || peer);

            // Helper: attempt connection with timeout guard
            const doConnect = (targetPeerId: string) => {
                connectingPeerIdRef.current = targetPeerId;
                // Start a 10s timeout: if onConnected hasn't fired by then, reset so we can retry
                if (connectTimeoutRef.current) clearTimeout(connectTimeoutRef.current);
                connectTimeoutRef.current = setTimeout(() => {
                    if (connectingPeerIdRef.current === targetPeerId && !connectedPeerIdRef.current) {
                        console.log('[Radar] Connect timeout, resetting...');
                        connectingPeerIdRef.current = null;
                        setConnectingPeer(null);
                    }
                }, 10000);
                nearbyService.connectToPeer(targetPeerId).catch(() => {
                    connectingPeerIdRef.current = null;
                    if (connectTimeoutRef.current) { clearTimeout(connectTimeoutRef.current); connectTimeoutRef.current = null; }
                });
            };

            // Tie-breaker: the peer with the higher sessionId initiates first
            if (mySessionId > peerSessionId) {
                doConnect(peer.peerId);
            } else {
                // iOS Multipeer discovery can be asymmetric: the other peer may
                // never discover us. Set a fallback timer: if after 5 seconds we
                // haven't received a connection, connect ourselves.
                if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
                fallbackTimerRef.current = setTimeout(() => {
                    fallbackTimerRef.current = null;
                    if (!connectedPeerIdRef.current && !connectingPeerIdRef.current && isScanningRef.current) {
                        console.log('[Radar] Fallback: peer never connected to us, trying ourselves...');
                        setConnectingPeer(prev => prev || peer);
                        doConnect(peer.peerId);
                    }
                }, 5000);
            }
        });

        // -- onPeerLost --
        const unsubLost = nearbyService.onPeerLost((peer) => {
            if (connectingPeerIdRef.current === peer.peerId) {
                connectingPeerIdRef.current = null;
            }
            setConnectingPeer(prev => prev?.peerId === peer.peerId ? null : prev);
        });

        // -- onInvitationReceived --
        const unsubInvite = nearbyService.onInvitationReceived((peer) => {
            if (connectedPeerIdRef.current) return; // already matched
            setConnectingPeer(peer);
            connectingPeerIdRef.current = peer.peerId;
            nearbyService.acceptConnection(peer.peerId).catch(() => {
                connectingPeerIdRef.current = null;
            });
        });

        // -- onConnected --
        const unsubConnected = nearbyService.onConnected((peer) => {
            // Guard: ignore if we already finalized a connection
            if (connectedPeerIdRef.current) return;

            // Cancel any pending timers
            if (fallbackTimerRef.current) { clearTimeout(fallbackTimerRef.current); fallbackTimerRef.current = null; }
            if (connectTimeoutRef.current) { clearTimeout(connectTimeoutRef.current); connectTimeoutRef.current = null; }

            connectedPeerIdRef.current = peer.peerId;
            connectingPeerIdRef.current = null;
            setConnectingPeer(null);
            setIsScanning(false);

            // -- Match-code synchronization --
            const parts = peer.name.split('|');
            const peerSessionId = parts.length >= 2 ? parts[1] : '';
            const mySessionId = nearbyService.getMySessionId();
            const exam = selectedExamRef.current!;

            if (mySessionId > peerSessionId) {
                // Initiator: pick a random code and send it to the peer.
                // Send multiple times with increasing delays to ensure delivery,
                // because the remote side may not have its onTextReceived
                // listener fully wired up yet.
                const codeIndex = Math.floor(Math.random() * MATCH_CODES.length);
                const msg = `__CTRL__:MATCH_CODE:${codeIndex}`;
                const delays = [400, 1200, 2500];
                delays.forEach(delay => {
                    setTimeout(() => {
                        if (connectedPeerIdRef.current === peer.peerId && !matchFoundRef.current) {
                            nearbyService.sendMessage(peer.peerId, msg).catch(() => {});
                        }
                    }, delay);
                });
                finishMatch(exam, peer, codeIndex);
            } else {
                // Non-initiator: wait for the match code via onTextReceived
                pendingMatchPeerRef.current = peer;
            }
        });

        // -- onDisconnected --
        const unsubDisconnected = nearbyService.onDisconnected((peer) => {
            const wasConnected  = connectedPeerIdRef.current === peer.peerId;
            const wasConnecting = connectingPeerIdRef.current === peer.peerId;
            const wasPending    = pendingMatchPeerRef.current?.peerId === peer.peerId;

            // Ignore disconnect events for peers we don't care about
            if (!wasConnected && !wasConnecting && !wasPending) return;

            // Clean up all internal refs
            connectedPeerIdRef.current = null;
            connectingPeerIdRef.current = null;
            pendingMatchPeerRef.current = null;
            if (fallbackTimerRef.current) { clearTimeout(fallbackTimerRef.current); fallbackTimerRef.current = null; }
            if (connectTimeoutRef.current) { clearTimeout(connectTimeoutRef.current); connectTimeoutRef.current = null; }

            // Clean up UI state
            setIsChatOpen(false);
            setMatchFound(null);
            setChatStatus('IDLE');
            setConnectingPeer(null);

            // Only show alert + auto-restart if we had a real connection
            // AND the user did not intentionally disconnect.
            if ((wasConnected || wasConnecting) && !isDisconnectingRef.current) {
                if (wasConnected) {
                    Alert.alert(
                        "Connessione persa",
                        "L'utente ha abbandonato la sessione o si è disconnesso."
                    );
                }
                const exam = selectedExamRef.current;
                if (exam) {
                    // Delay restart to prevent rapid connect-disconnect loops
                    setTimeout(() => {
                        if (!connectedPeerIdRef.current && !connectingPeerIdRef.current) {
                            setIsScanning(true);
                            nearbyService.startRadar(exam).catch(() => {
                                setIsScanning(false);
                            });
                        }
                    }, 2000);
                }
            }
            isDisconnectingRef.current = false;
        });

        // -- onTextReceived (handles both match-code sync AND chat control) --
        const unsubText = nearbyService.onTextReceived(({ peerId, text }) => {

            // 1) Match code for non-initiator
            if (text.startsWith('__CTRL__:MATCH_CODE:')) {
                // Already matched? Ignore duplicate deliveries.
                if (matchFoundRef.current) return;

                const pendingPeer = pendingMatchPeerRef.current;
                // Accept the code if it comes from the pending peer OR from our
                // connected peer (covers race where onConnected and onTextReceived
                // arrive with slightly different peerId hashes).
                const expectedPeerId = pendingPeer?.peerId || connectedPeerIdRef.current;
                if (!expectedPeerId || peerId !== expectedPeerId) return;

                const codeIndex = parseInt(text.split(':')[2], 10);
                const exam = selectedExamRef.current!;
                const peer = pendingPeer || { peerId, name: '' };
                pendingMatchPeerRef.current = null;
                finishMatch(
                    exam,
                    peer,
                    (!isNaN(codeIndex) && codeIndex >= 0 && codeIndex < MATCH_CODES.length) ? codeIndex : 0
                );
                return;
            }

            // 2) Chat control messages
            const match = matchFoundRef.current;
            if (!match || isChatOpenRef.current || peerId !== match.peer.peerId) return;

            if (text === '__CTRL__:CHAT_REQ') {
                setChatStatus('RECEIVED');
                Vibration.vibrate([0, 300, 100, 300]);
            } else if (text === '__CTRL__:CHAT_ACC') {
                setChatStatus('IDLE');
                setIsChatOpen(true);
            } else if (text === '__CTRL__:CHAT_REJ') {
                const st = chatStatusRef.current;
                if (st === 'WAITING') {
                    setChatStatus('IDLE');
                    Alert.alert("Richiesta rifiutata", "L'utente ha preferito non avviare la chat ora.");
                } else if (st === 'RECEIVED') {
                    setChatStatus('IDLE');
                }
            }
        });

        return () => {
            unsubFound();
            unsubLost();
            unsubInvite();
            unsubConnected();
            unsubDisconnected();
            unsubText();
            if (fallbackTimerRef.current) { clearTimeout(fallbackTimerRef.current); fallbackTimerRef.current = null; }
            if (connectTimeoutRef.current) { clearTimeout(connectTimeoutRef.current); connectTimeoutRef.current = null; }
        };
    }, [finishMatch]);

    // ---- Chat request timer ----

    useEffect(() => {
        if (chatStatus === 'WAITING' && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
            return () => clearTimeout(timer);
        } else if (chatStatus === 'WAITING' && timeLeft === 0) {
            setChatStatus('IDLE');
            // Notify the remote peer that the request has expired
            const m = matchFoundRef.current;
            if (m?.peer.peerId) {
                nearbyService.sendMessage(m.peer.peerId, '__CTRL__:CHAT_REJ').catch(() => {});
            }
        }
    }, [chatStatus, timeLeft]);

    // ---- Action handlers ----

    const handleManualDisconnect = useCallback(() => {
        isDisconnectingRef.current = true;
        if (fallbackTimerRef.current) { clearTimeout(fallbackTimerRef.current); fallbackTimerRef.current = null; }
        if (connectTimeoutRef.current) { clearTimeout(connectTimeoutRef.current); connectTimeoutRef.current = null; }
        const pid = connectedPeerIdRef.current || connectingPeerIdRef.current || pendingMatchPeerRef.current?.peerId;
        if (pid) {
            nearbyService.disconnectPeer(pid).catch(() => {});
        }
        connectedPeerIdRef.current = null;
        connectingPeerIdRef.current = null;
        pendingMatchPeerRef.current = null;
        setMatchFound(null);
        setChatStatus('IDLE');
        setConnectingPeer(null);
        setIsChatOpen(false);
        nearbyService.stopRadar().catch(() => {});
    }, []);

    const handleSendChatRequest = useCallback(() => {
        const m = matchFoundRef.current;
        if (!m) return;
        nearbyService.sendMessage(m.peer.peerId, '__CTRL__:CHAT_REQ').catch((err) => {
            console.error("Error sending chat request", err);
        });
        setChatStatus('WAITING');
        setTimeLeft(30);
    }, []);

    const handleAcceptChat = useCallback(() => {
        const m = matchFoundRef.current;
        if (!m) return;
        nearbyService.sendMessage(m.peer.peerId, '__CTRL__:CHAT_ACC').catch(() => {});
        setChatStatus('IDLE');
        setIsChatOpen(true);
    }, []);

    const handleRejectChat = useCallback(() => {
        const m = matchFoundRef.current;
        if (!m) return;
        nearbyService.sendMessage(m.peer.peerId, '__CTRL__:CHAT_REJ').catch(() => {});
        setChatStatus('IDLE');
    }, []);

    const toggleRadar = useCallback(async () => {
        if (!selectedExamRef.current) {
            Alert.alert("Seleziona un esame", "Devi indicare quale esame stai preparando prima di attivare il radar.");
            return;
        }

        if (isScanningRef.current) {
            setIsScanning(false);
            setConnectingPeer(null);
            connectingPeerIdRef.current = null;
            if (fallbackTimerRef.current) { clearTimeout(fallbackTimerRef.current); fallbackTimerRef.current = null; }
            if (connectTimeoutRef.current) { clearTimeout(connectTimeoutRef.current); connectTimeoutRef.current = null; }
            await nearbyService.stopRadar();
        } else {
            // Reset all connection refs before starting fresh
            connectingPeerIdRef.current = null;
            connectedPeerIdRef.current = null;
            pendingMatchPeerRef.current = null;
            setIsScanning(true);
            setConnectingPeer(null);
            const success = await nearbyService.startRadar(selectedExamRef.current);
            if (!success) {
                setIsScanning(false);
            }
        }
    }, []);

    const handleConnectToPeer = (peerId: string) => {
        nearbyService.connectToPeer(peerId).catch(() => {
            Alert.alert("Errore", "Impossibile connettersi a questo studente.");
        });
    };

    const baseColor = (accentColor.startsWith('#') && accentColor.length === 7)
        ? accentColor
        : '#6366f1';

    const gradientColors: [string, string] = isScanning
        ? [`${baseColor}1A`, `${baseColor}40`]
        : [`${baseColor}0D`, `${baseColor}1A`];

    const mainColor = baseColor;

    return (
        <View style={styles.cardWrapper}>
            <LinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.card, { borderColor: isScanning ? `${baseColor}66` : `${baseColor}33` }]}
            >
                <View style={styles.headerRow}>
                    <View style={[styles.iconCircle, { backgroundColor: isScanning ? `${baseColor}33` : `${baseColor}1A` }]}>
                        <Ionicons name="radio-outline" size={24} color={mainColor} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.mainTitle, { color: mainColor }]}>Radar Studenti</Text>
                        <Text style={styles.subTitle}>Trova chi prepara il tuo stesso esame!</Text>
                    </View>
                </View>

                {!isScanning && !matchFound && (
                    <View style={styles.controlsContainer}>
                        <TouchableOpacity
                            style={styles.dropdownBtn}
                            onPress={() => setIsMenuOpen(true)}
                        >
                            <Text style={[styles.dropdownText, !selectedExam && styles.dropdownTextPlaceholder]}>
                                {selectedExam || "Seleziona esame..."}
                            </Text>
                            <Ionicons name="chevron-down" size={18} color="#6b7280" />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.actionBtn, { backgroundColor: mainColor, opacity: selectedExam ? 1 : 0.6 }]}
                            onPress={toggleRadar}
                            disabled={!selectedExam}
                        >
                            <Text style={styles.actionBtnText}>Attiva Radar</Text>
                            <Ionicons name="wifi" size={18} color="#ffffff" style={{ marginLeft: 6 }} />
                        </TouchableOpacity>
                    </View>
                )}

                {isScanning && (
                    <View style={styles.scanningContainer}>
                        <View style={styles.radarWrapper}>
                            <Animated.View style={[
                                styles.radarCircle,
                                {
                                    backgroundColor: mainColor,
                                    transform: [{ scale: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 3] }) }],
                                    opacity: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [0.3, 0] })
                                }
                            ]} />
                            <Animated.View style={[
                                styles.radarCircle,
                                {
                                    backgroundColor: mainColor,
                                    transform: [{ scale: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 4] }) }],
                                    opacity: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [0.15, 0] })
                                }
                            ]} />

                            <Ionicons name="bluetooth" size={32} color={mainColor} style={{ zIndex: 10 }} />
                        </View>
                        <Text style={[styles.scanningText, { color: mainColor, textAlign: 'center', paddingHorizontal: 20 }]}>
                            {connectingPeer ? "Studente trovato! Connessione in corso..." : `Ricerca compagni per ${selectedExam}...`}
                        </Text>

                        <TouchableOpacity style={[styles.cancelBtn, { marginTop: 16 }]} onPress={toggleRadar}>
                            <Text style={styles.cancelBtnText}>Interrompi</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </LinearGradient>

            {/* Modal Selezione Esame */}
            <Modal visible={isMenuOpen} transparent animationType="slide">
                <View style={styles.modalBg}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Cosa stai studiando?</Text>
                            <TouchableOpacity onPress={() => setIsMenuOpen(false)}>
                                <Ionicons name="close" size={24} color="#1e293b" />
                            </TouchableOpacity>
                        </View>
                        <SectionList
                            sections={EXAM_CATEGORIES}
                            keyExtractor={(item) => item}
                            renderSectionHeader={({ section: { title } }) => (
                                <Text style={styles.sectionHeader}>{title}</Text>
                            )}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.examItem}
                                    onPress={() => {
                                        setSelectedExam(item);
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    <Text style={[styles.examText, selectedExam === item && styles.examTextSelected]}>
                                        {item}
                                    </Text>
                                    {selectedExam === item && <Ionicons name="checkmark" size={20} color={mainColor} />}
                                </TouchableOpacity>
                            )}
                            stickySectionHeadersEnabled={false}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </Modal>

            {/* Modal Match Success */}
            <Modal visible={!!matchFound && !isChatOpen} transparent animationType="fade">
                <View style={styles.modalBg}>
                    <View style={styles.matchCard}>
                        {matchFound && (
                            <>
                                <View style={[styles.successIconBg, { backgroundColor: matchFound.matchCode.color }]}>
                                    <Text style={{ fontSize: 32 }}>{matchFound.matchCode.emoji}</Text>
                                </View>
                                <Text style={styles.matchTitle}>🎉 Match Connesso!</Text>
                                <Text style={styles.matchDesc}>
                                    Sei collegato con uno studente che sta preparando <Text style={[styles.matchExamHighlight, { color: mainColor }]}>{matchFound.exam}</Text>.
                                </Text>

                                <View style={styles.identificationBox}>
                                    <Text style={styles.identificationLabel}>CERCA QUESTO SIMBOLO</Text>
                                    <View style={styles.identificationRow}>
                                        <Text style={styles.identificationEmoji}>{matchFound.matchCode.emoji}</Text>
                                        <Text style={[styles.identificationName, { color: matchFound.matchCode.color }]}>
                                            {matchFound.matchCode.name}
                                        </Text>
                                    </View>
                                    <Text style={styles.identificationHint}>Alza lo sguardo e tieni il telefono visibile, oppure cerca chi ha questo simbolo sullo schermo!</Text>
                                </View>

                                {chatStatus === 'IDLE' && (
                                    <TouchableOpacity
                                        style={[styles.actionBtn, { backgroundColor: mainColor, width: '100%', marginTop: 20 }]}
                                        onPress={handleSendChatRequest}
                                    >
                                        <Text style={styles.actionBtnText}>Richiedi Chat Offline</Text>
                                        <Ionicons name="chatbubbles" size={18} color="#ffffff" style={{ marginLeft: 8 }} />
                                    </TouchableOpacity>
                                )}

                                {chatStatus === 'WAITING' && (
                                    <TouchableOpacity
                                        style={[styles.actionBtn, { backgroundColor: '#94a3b8', width: '100%', marginTop: 20 }]}
                                        disabled
                                    >
                                        <Text style={styles.actionBtnText}>In attesa... ({timeLeft}s)</Text>
                                        <ActivityIndicator size="small" color="#ffffff" style={{ marginLeft: 8 }} />
                                    </TouchableOpacity>
                                )}

                                {chatStatus === 'RECEIVED' && (
                                    <View style={{ width: '100%', marginTop: 20 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '700', color: '#1e293b', textAlign: 'center', marginBottom: 12 }}>
                                            L'utente vuole avviare una chat con te!
                                        </Text>
                                        <View style={{ flexDirection: 'row', width: '100%', gap: 10 }}>
                                            <TouchableOpacity
                                                style={[styles.actionBtn, { backgroundColor: '#ef4444', flex: 1 }]}
                                                onPress={handleRejectChat}
                                            >
                                                <Text style={styles.actionBtnText}>Rifiuta</Text>
                                                <Ionicons name="close" size={18} color="#ffffff" style={{ marginLeft: 4 }} />
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={[styles.actionBtn, { backgroundColor: '#10b981', flex: 1 }]}
                                                onPress={handleAcceptChat}
                                            >
                                                <Text style={styles.actionBtnText}>Accetta</Text>
                                                <Ionicons name="checkmark" size={18} color="#ffffff" style={{ marginLeft: 4 }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}

                                <TouchableOpacity
                                    style={[styles.cancelBtn, { marginTop: 12 }]}
                                    onPress={handleManualDisconnect}
                                >
                                    <Text style={styles.cancelBtnText}>Disconnetti</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </View>
            </Modal>

            {/* Modal Chat Bluetooth */}
            <Modal visible={isChatOpen} animationType="slide" onRequestClose={() => setIsChatOpen(false)}>
                {matchFound ? (
                    <BluetoothChatScreen
                        connectedDevice={{ id: matchFound.peer.peerId, name: matchFound.matchCode.name }}
                        onDisconnect={handleManualDisconnect}
                        primaryColor={mainColor}
                    />
                ) : null}
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    cardWrapper: {
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 4,
    },
    card: {
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        shadowColor: '#64748b',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 3,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    iconCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    mainTitle: {
        fontSize: 15,
        fontWeight: '800',
        letterSpacing: -0.3,
        marginBottom: 2,
    },
    subTitle: {
        fontSize: 12,
        fontWeight: '500',
        color: '#475569',
        lineHeight: 16,
    },
    controlsContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginTop: 6,
    },
    dropdownBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.9)',
    },
    dropdownText: {
        fontSize: 13,
        color: '#1e293b',
        fontWeight: '600',
    },
    dropdownTextPlaceholder: {
        color: '#64748b',
        fontWeight: '500',
    },
    actionBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 2,
    },
    actionBtnText: {
        color: '#ffffff',
        fontSize: 13,
        fontWeight: '700',
        letterSpacing: 0.3,
    },
    scanningContainer: {
        alignItems: 'center',
        paddingVertical: 16,
    },
    radarWrapper: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    radarCircle: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    scanningText: {
        fontSize: 13,
        fontWeight: '600',
        marginBottom: 16,
    },
    cancelBtn: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.6)',
    },
    cancelBtnText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#64748b',
    },
    // Modal Styles
    modalBg: {
        flex: 1,
        backgroundColor: 'rgba(15, 23, 42, 0.4)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
        maxHeight: '80%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1e293b',
    },
    examItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9',
    },
    examText: {
        fontSize: 15,
        color: '#475569',
        fontWeight: '500',
    },
    examTextSelected: {
        color: '#1e293b',
        fontWeight: '700',
    },
    sectionHeader: {
        backgroundColor: '#f8fafc',
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: 14,
        fontWeight: '700',
        color: '#64748b',
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        marginTop: 8,
        borderRadius: 8,
    },
    // Match Modal
    matchCard: {
        backgroundColor: '#ffffff',
        marginHorizontal: 20,
        marginBottom: 'auto',
        marginTop: 'auto',
        borderRadius: 24,
        padding: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
        elevation: 10,
    },
    successIconBg: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: '#10b981',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    matchTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: '#1e293b',
        marginBottom: 12,
    },
    matchDesc: {
        fontSize: 14,
        color: '#475569',
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 10,
    },
    matchExamHighlight: {
        fontWeight: '800',
        color: '#9333ea',
    },
    identificationBox: {
        width: '100%',
        backgroundColor: '#f8fafc',
        borderRadius: 16,
        padding: 16,
        marginTop: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    identificationLabel: {
        fontSize: 10,
        fontWeight: '700',
        color: '#64748b',
        letterSpacing: 1,
        marginBottom: 8,
    },
    identificationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 12,
    },
    identificationEmoji: {
        fontSize: 24,
        marginRight: 10,
    },
    identificationName: {
        fontSize: 18,
        fontWeight: '800',
    },
    identificationHint: {
        fontSize: 12,
        color: '#64748b',
        textAlign: 'center',
        lineHeight: 18,
    },
});
