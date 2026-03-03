import React, { useState, useEffect, useRef } from 'react';
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
    Alert
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

export const StudentRadar: React.FC<StudentRadarProps> = ({ accentColor = '#6366f1' }) => {
    const [selectedExam, setSelectedExam] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScanning, setIsScanning] = useState(false);

    // Peer management
    const [discoveredPeers, setDiscoveredPeers] = useState<Peer[]>([]);
    const [matchFound, setMatchFound] = useState<{ exam: string, peer: Peer, matchCode: { emoji: string, name: string, color: string } } | null>(null);
    const [pendingInvitation, setPendingInvitation] = useState<Peer | null>(null);

    const [isChatOpen, setIsChatOpen] = useState(false);

    // Animations
    const pulseAnim = useRef(new Animated.Value(0)).current;

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

    // Setup Nearby Connections Listeners when scanning starts
    useEffect(() => {
        if (!isScanning) {
            pulseAnim.stopAnimation();
            return;
        }

        // Animated pulse
        pulseAnim.setValue(0);
        Animated.loop(
            Animated.timing(pulseAnim, {
                toValue: 1,
                duration: 2500,
                useNativeDriver: true,
            })
        ).start();

        // Register event listeners
        const unsubFound = nearbyService.onPeerFound((peer) => {
            // Check if the peer's name matches our exam
            if (peer.name === `UniChat_${selectedExam}`) {
                setDiscoveredPeers(prev => {
                    if (prev.find(p => p.peerId === peer.peerId)) return prev;
                    return [...prev, peer];
                });
            }
        });

        const unsubLost = nearbyService.onPeerLost((peer) => {
            setDiscoveredPeers(prev => prev.filter(p => p.peerId !== peer.peerId));
        });

        const unsubInvite = nearbyService.onInvitationReceived((peer) => {
            setPendingInvitation(peer);
        });

        const unsubConnected = nearbyService.onConnected((peer) => {
            setIsScanning(false);
            setPendingInvitation(null);
            handleMatchFound(selectedExam!, peer);
        });

        const unsubDisconnected = nearbyService.onDisconnected((peer) => {
            if (matchFound?.peer.peerId === peer.peerId) {
                setIsChatOpen(false);
                setMatchFound(null);
                Alert.alert("Disconnesso", "L'altro studente si è disconnesso.");
            }
        });

        return () => {
            unsubFound();
            unsubLost();
            unsubInvite();
            unsubConnected();
            unsubDisconnected();
        };
    }, [isScanning, selectedExam, matchFound]);

    // Handle incoming invitations
    useEffect(() => {
        if (pendingInvitation) {
            Alert.alert(
                "Richiesta di Chat",
                "Uno studente vicino vuole chattare con te per questo esame!",
                [
                    {
                        text: "Rifiuta",
                        style: "cancel",
                        onPress: () => {
                            nearbyService.rejectConnection(pendingInvitation.peerId);
                            setPendingInvitation(null);
                        }
                    },
                    {
                        text: "Accetta",
                        onPress: () => {
                            nearbyService.acceptConnection(pendingInvitation.peerId);
                        }
                    }
                ]
            );
        }
    }, [pendingInvitation]);

    const handleMatchFound = (exam: string, peer: Peer) => {
        setIsScanning(false);
        const randomCode = MATCH_CODES[Math.floor(Math.random() * MATCH_CODES.length)];
        setMatchFound({ exam, peer, matchCode: randomCode });
        Vibration.vibrate([0, 500, 200, 500]);
    };

    const toggleRadar = async () => {
        if (!selectedExam) {
            Alert.alert("Seleziona un esame", "Devi indicare quale esame stai preparando prima di attivare il radar.");
            return;
        }

        if (isScanning) {
            setIsScanning(false);
            setDiscoveredPeers([]);
            await nearbyService.stopRadar();
        } else {
            setIsScanning(true);
            const success = await nearbyService.startRadar(selectedExam);
            if (!success) {
                setIsScanning(false);
                // Alert already handled inside service if permissions miss
            }
        }
    };

    const handleConnectToPeer = (peerId: string) => {
        nearbyService.connectToPeer(peerId).catch(err => {
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
                        <Text style={[styles.scanningText, { color: mainColor }]}>Ricerca compagni per {selectedExam}...</Text>

                        {discoveredPeers.length > 0 && (
                            <View style={styles.peersList}>
                                {discoveredPeers.map(peer => (
                                    <TouchableOpacity
                                        key={peer.peerId}
                                        style={styles.peerItem}
                                        onPress={() => handleConnectToPeer(peer.peerId)}
                                    >
                                        <Ionicons name="person-circle" size={24} color={mainColor} />
                                        <Text style={styles.peerName}>Studente Trovato!</Text>
                                        <Text style={styles.peerConnectText}>Connetti</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}

                        <TouchableOpacity style={[styles.cancelBtn, { marginTop: discoveredPeers.length > 0 ? 16 : 0 }]} onPress={toggleRadar}>
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

                                <TouchableOpacity
                                    style={[styles.actionBtn, { backgroundColor: mainColor, width: '100%', marginTop: 20 }]}
                                    onPress={() => setIsChatOpen(true)}
                                >
                                    <Text style={styles.actionBtnText}>Avvia Chat Offline</Text>
                                    <Ionicons name="chatbubbles" size={18} color="#ffffff" style={{ marginLeft: 8 }} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.cancelBtn, { marginTop: 12 }]}
                                    onPress={() => {
                                        nearbyService.disconnectPeer(matchFound.peer.peerId);
                                        setMatchFound(null);
                                    }}
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
                        onDisconnect={() => {
                            nearbyService.disconnectPeer(matchFound.peer.peerId);
                            setIsChatOpen(false);
                            setMatchFound(null);
                        }}
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
    peersList: {
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 12,
        padding: 8,
        marginBottom: 16,
    },
    peerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    peerName: {
        flex: 1,
        fontSize: 14,
        fontWeight: '600',
        color: '#1e293b',
        marginLeft: 10,
    },
    peerConnectText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#3b82f6',
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
