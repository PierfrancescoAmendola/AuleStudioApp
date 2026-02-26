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

// FLAG PER DISABILITARE IL BLE E FAR FUNZIONARE EXPO GO
// Quando farai la build nativa, potrai impostare questo a true e 
// scommentare/implementare la logica delle librerie BLE reali.
const IS_BLE_ENABLED = false;

interface StudentRadarProps {
    accentColor?: string;
}

export const StudentRadar: React.FC<StudentRadarProps> = ({ accentColor = '#6366f1' }) => {
    const [selectedExam, setSelectedExam] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const [matchFound, setMatchFound] = useState<{ exam: string } | null>(null);

    // Animations
    const pulseAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isScanning) {
            pulseAnim.setValue(0);
            Animated.loop(
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 2500,
                    useNativeDriver: true,
                })
            ).start();

            // MOCK LOGIC: Se BLE è disattivato, simuliamo un match dopo 4 secondi
            if (!IS_BLE_ENABLED) {
                const timer = setTimeout(() => {
                    handleMatchFound(selectedExam!);
                }, 4000);
                return () => clearTimeout(timer);
            } else {
                // QUI ANDREBBE LA LOGICA BLE REALE
                // startBLEScanAndAdvertise(selectedExam);
            }
        } else {
            pulseAnim.stopAnimation();
        }
    }, [isScanning]);

    const handleMatchFound = (exam: string) => {
        setIsScanning(false);
        setMatchFound({ exam });
        Vibration.vibrate([0, 500, 200, 500]); // Pattern vibrazione: pausa, vibra, pausa, vibra
    };

    const MOCK_BLUETOOTH_STATE = true; // Impostare a false per testare l'avviso di Bluetooth spento

    const checkBluetoothState = async (): Promise<boolean> => {
        if (!IS_BLE_ENABLED) {
            // Simuliamo il controllo dello stato Bluetooth in ambiente Expo Go
            return MOCK_BLUETOOTH_STATE;
        } else {
            // QUI ANDREBBE LA LOGICA REALE (es. con react-native-ble-plx o simile)
            /*
            const state = await bleManager.state();
            return state === 'PoweredOn';
            */
            return true;
        }
    }

    const toggleRadar = async () => {
        if (!selectedExam) {
            Alert.alert("Seleziona un esame", "Devi indicare quale esame stai preparando prima di attivare il radar.");
            return;
        }

        if (isScanning) {
            setIsScanning(false);
        } else {
            const isBluetoothOn = await checkBluetoothState();

            if (!isBluetoothOn) {
                Alert.alert(
                    "Bluetooth Spento",
                    "Devi accendere il Bluetooth per poter usare il Radar Studenti e trovare i tuoi compagni."
                );
                return;
            }

            if (IS_BLE_ENABLED) {
                // ESEMPIO DI RICHIESTA PERMESSI REALI (DA ATTIVARE IN BUILD)
                /*
                const requestPermissions = async () => {
                    if (Platform.OS === 'android') {
                        // Richiedi BLUETOOTH_SCAN, BLUETOOTH_ADVERTISE, ACCESS_FINE_LOCATION
                    }
                    setIsScanning(true);
                };
                requestPermissions();
                */
            } else {
                setIsScanning(true);
            }
        }
    };

    const baseColor = (accentColor.startsWith('#') && accentColor.length === 7)
        ? accentColor
        : '#6366f1';

    const gradientColors: [string, string] = isScanning
        ? [`${baseColor}1A`, `${baseColor}40`] // Active scanning state (10% to 25% opacity)
        : [`${baseColor}0D`, `${baseColor}1A`]; // Inactive state (5% to 10% opacity)

    const mainColor = baseColor;

    return (
        <View style={styles.cardWrapper}>
            <LinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.card, { borderColor: isScanning ? `${baseColor}66` : `${baseColor}33` }]}
            >
                {/* Header (Messo in riga come SmartWeatherCard) */}
                <View style={styles.headerRow}>
                    <View style={[styles.iconCircle, { backgroundColor: isScanning ? `${baseColor}33` : `${baseColor}1A` }]}>
                        <Ionicons name="radio-outline" size={24} color={mainColor} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.mainTitle, { color: mainColor }]}>Radar Studenti</Text>
                        <Text style={styles.subTitle}>Trova chi prepara il tuo stesso esame!</Text>
                    </View>
                </View>

                {/* Body Component */}
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
                        >
                            <Text style={styles.actionBtnText}>Attiva Radar</Text>
                            <Ionicons name="wifi" size={18} color="#ffffff" style={{ marginLeft: 6 }} />
                        </TouchableOpacity>
                    </View>
                )}

                {/* Scanning Animation State */}
                {isScanning && (
                    <View style={styles.scanningContainer}>
                        <View style={styles.radarWrapper}>
                            {/* Inner Circle */}
                            <Animated.View style={[
                                styles.radarCircle,
                                {
                                    backgroundColor: mainColor,
                                    transform: [{ scale: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 3] }) }],
                                    opacity: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [0.3, 0] })
                                }
                            ]} />
                            {/* Outer Circle (delayed) */}
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

                        <TouchableOpacity style={styles.cancelBtn} onPress={toggleRadar}>
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
            <Modal visible={!!matchFound} transparent animationType="fade">
                <View style={styles.modalBg}>
                    <View style={styles.matchCard}>
                        <View style={styles.successIconBg}>
                            <Ionicons name="people" size={40} color="#ffffff" />
                        </View>
                        <Text style={styles.matchTitle}>🎉 Match Trovato!</Text>
                        <Text style={styles.matchDesc}>
                            Uno studente a pochi metri da te sta preparando <Text style={[styles.matchExamHighlight, { color: mainColor }]}>{matchFound?.exam}</Text>.
                            Guardati intorno o alza lo sguardo!
                        </Text>
                        <TouchableOpacity
                            style={[styles.actionBtn, { backgroundColor: mainColor, width: '100%', marginTop: 16 }]}
                            onPress={() => setMatchFound(null)}
                        >
                            <Text style={styles.actionBtnText}>Ottimo, chiudi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        // Elevated shadow matching SmartWeatherCard
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
});
