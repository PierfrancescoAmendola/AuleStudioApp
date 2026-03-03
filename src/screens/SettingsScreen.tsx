import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Switch,
    Linking,
    Alert,
    Platform,
    Modal,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FocusAwareStatusBar } from '../components/FocusAwareStatusBar';
import { OnboardingCarousel } from '../components/OnboardingCarousel';
import Constants from 'expo-constants';
import { universities } from '../data/universities';
import { StudyRoom } from '../types';

interface SettingsScreenProps {
    navigation: any;
}

interface SettingItemProps {
    icon: any;
    iconColor: string;
    iconBg: string;
    title: string;
    subtitle?: string;
    onPress?: () => void;
    rightElement?: React.ReactNode;
}

type FeedbackCategory = 'Feedback' | 'Suggerimento' | 'Manca Aula' | 'Localizzazione Sbagliata' | 'Bug' | 'Altro';

const FEEDBACK_CATEGORIES: { type: FeedbackCategory; icon: any; color: string; bg: string }[] = [
    { type: 'Feedback', icon: 'chatbubble-outline', color: '#3b82f6', bg: '#eff6ff' },
    { type: 'Suggerimento', icon: 'bulb-outline', color: '#f59e0b', bg: '#fffbeb' },
    { type: 'Manca Aula', icon: 'add-circle-outline', color: '#10b981', bg: '#ecfdf5' },
    { type: 'Localizzazione Sbagliata', icon: 'location-outline', color: '#ef4444', bg: '#fef2f2' },
    { type: 'Bug', icon: 'bug-outline', color: '#8b5cf6', bg: '#f5f3ff' },
    { type: 'Altro', icon: 'ellipsis-horizontal-outline', color: '#6b7280', bg: '#f3f4f6' },
];

const SettingItem: React.FC<SettingItemProps> = ({ icon, iconColor, iconBg, title, subtitle, onPress, rightElement }) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress} activeOpacity={onPress ? 0.7 : 1}>
        <View style={[styles.settingIconContainer, { backgroundColor: iconBg }]}>
            <Ionicons name={icon} size={22} color={iconColor} />
        </View>
        <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>{title}</Text>
            {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
        </View>
        {rightElement || (onPress && <Ionicons name="chevron-forward" size={20} color="#9ca3af" />)}
    </TouchableOpacity>
);

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
    const [locationEnabled, setLocationEnabled] = useState(false);
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

    // Feedback flow state
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedbackStep, setFeedbackStep] = useState<'category' | 'message'>('category');
    const [selectedCategory, setSelectedCategory] = useState<FeedbackCategory | null>(null);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    // Loc selector state
    const [selectedFeedbackRegion, setSelectedFeedbackRegion] = useState<string | null>(null);
    const [selectedFeedbackUni, setSelectedFeedbackUni] = useState<string | null>(null);
    const [selectedFeedbackRoom, setSelectedFeedbackRoom] = useState<StudyRoom | null>(null);
    const [showSelector, setShowSelector] = useState<'none' | 'region' | 'uni' | 'room'>('none');

    const appVersion = Constants.expoConfig?.version || '1.0.0';

    useEffect(() => {
        checkLocationPermission();
    }, []);

    const checkLocationPermission = async () => {
        const { status } = await Location.getForegroundPermissionsAsync();
        setLocationEnabled(status === 'granted');
    };

    const handleLocationToggle = async (value: boolean) => {
        if (value) {
            // Show human-readable pre-permission dialog in Italian
            Alert.alert(
                '📍 Posizione',
                'UniStudy Italia vorrebbe accedere alla tua posizione per mostrarti le aule studio più vicine e ordinarle per distanza.\n\nPuoi sempre cambiare idea nelle Impostazioni del tuo dispositivo.',
                [
                    {
                        text: 'Non ora',
                        style: 'cancel',
                    },
                    {
                        text: 'Consenti',
                        onPress: async () => {
                            const { status } = await Location.requestForegroundPermissionsAsync();
                            if (status === 'granted') {
                                setLocationEnabled(true);
                            } else {
                                Alert.alert(
                                    'Permesso Negato',
                                    'Per abilitare la localizzazione, vai nelle Impostazioni del dispositivo.',
                                    [
                                        { text: 'Annulla', style: 'cancel' },
                                        { text: 'Impostazioni', onPress: () => Linking.openSettings() }
                                    ]
                                );
                            }
                        },
                    },
                ]
            );
        } else {
            Alert.alert(
                'Disabilita Localizzazione',
                'Per disabilitare la localizzazione, vai nelle Impostazioni del dispositivo.',
                [
                    { text: 'OK', style: 'cancel' },
                    { text: 'Impostazioni', onPress: () => Linking.openSettings() }
                ]
            );
        }
    };

    const handleReplayOnboarding = async () => {
        await AsyncStorage.removeItem('onboarding_completed');
        setShowOnboarding(true);
    };

    const handleOnboardingComplete = async () => {
        await AsyncStorage.setItem('onboarding_completed', 'true');
        setShowOnboarding(false);
    };

    const openFeedbackModal = () => {
        setShowFeedback(true);
        setFeedbackStep('category');
        setSelectedCategory(null);
        setFeedbackMessage('');
        setSelectedFeedbackRegion(null);
        setSelectedFeedbackUni(null);
        setSelectedFeedbackRoom(null);
        setShowSelector('none');
    };

    const closeFeedbackModal = () => {
        setShowFeedback(false);
        setFeedbackStep('category');
        setSelectedCategory(null);
        setFeedbackMessage('');
        setSelectedFeedbackRegion(null);
        setSelectedFeedbackUni(null);
        setSelectedFeedbackRoom(null);
        setShowSelector('none');
    };

    const handleCategorySelect = (category: FeedbackCategory) => {
        setSelectedCategory(category);
        setFeedbackStep('message');
    };

    const handleSendFeedback = () => {
        if (!selectedCategory || !feedbackMessage.trim()) {
            Alert.alert('Attenzione', 'Scrivi un messaggio prima di inviare.');
            return;
        }

        if (selectedCategory === 'Localizzazione Sbagliata' && (!selectedFeedbackRegion || !selectedFeedbackUni || !selectedFeedbackRoom)) {
            Alert.alert('Dati Mancanti', 'Per favore, seleziona la regione, l\'università e l\'aula studio con la localizzazione sbagliata.');
            return;
        }

        const now = new Date();
        const dateString = now.toLocaleDateString('it-IT', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        const deviceInfo = `${Device.brand || 'Unknown'} ${Device.modelName || 'Device'}`;
        const osInfo = `${Platform.OS === 'ios' ? 'iOS' : 'Android'} ${Platform.Version}`;

        const email = 'support@unistudyitalia.app';
        const subject = encodeURIComponent(`[${selectedCategory}] UniStudy Italia`);

        let locDetails = '';
        if (selectedCategory === 'Localizzazione Sbagliata' && selectedFeedbackRoom) {
            locDetails = `📍 AULA SEGNALATA:
Regione: ${selectedFeedbackRegion}
Università: ${universities.find(u => u.id === selectedFeedbackUni)?.name || selectedFeedbackUni}
Aula: ${selectedFeedbackRoom.nome} (${selectedFeedbackRoom.edificio})
ID Aula: ${selectedFeedbackRoom.id}
`;
        }

        const body = encodeURIComponent(`📋 TIPO DI SEGNALAZIONE
${selectedCategory}

${locDetails}📝 MESSAGGIO
${feedbackMessage}

━━━━━━━━━━━━━━━━━━━━
📱 Dispositivo: ${deviceInfo}
🖥️ Sistema: ${osInfo}
📦 App Version: ${appVersion}
📅 Data: ${dateString}
━━━━━━━━━━━━━━━━━━━━`);

        closeFeedbackModal();
        Linking.openURL(`mailto:${email}?subject=${subject}&body=${body}`);
    };

    const handleReview = () => {
        const storeUrl = Platform.select({
            ios: 'https://apps.apple.com/app/id000000000',
            android: 'https://play.google.com/store/apps/details?id=com.unistudyitalia',
        });
        if (storeUrl) {
            Linking.openURL(storeUrl);
        }
    };

    // Modal for Terms and Privacy
    const renderLegalModal = (visible: boolean, onClose: () => void, title: string, content: string) => (
        <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <TouchableOpacity onPress={onClose} style={styles.modalCloseButton}>
                        <Ionicons name="close" size={28} color="#1f2937" />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
                    <Text style={styles.legalText}>{content}</Text>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );

    const availableRegions = Array.from(new Set(universities.map(u => u.regionName))).sort();
    const availableUnis = universities.filter(u => u.regionName === selectedFeedbackRegion).sort((a, b) => a.name.localeCompare(b.name));
    const availableRooms = selectedFeedbackUni ? (universities.find(u => u.id === selectedFeedbackUni)?.studyRooms || []).sort((a, b) => a.nome.localeCompare(b.nome)) : [];

    const renderSelectorModal = () => {
        let title = '';
        let data: any[] = [];
        let onSelect = (item: any) => { };

        if (showSelector === 'region') {
            title = 'Seleziona Regione';
            data = availableRegions;
            onSelect = (item) => { setSelectedFeedbackRegion(item); setSelectedFeedbackUni(null); setSelectedFeedbackRoom(null); setShowSelector('none'); };
        } else if (showSelector === 'uni') {
            title = 'Seleziona Università';
            data = availableUnis;
            onSelect = (item) => { setSelectedFeedbackUni(item.id); setSelectedFeedbackRoom(null); setShowSelector('none'); };
        } else if (showSelector === 'room') {
            title = 'Seleziona Aula Studio';
            data = availableRooms;
            onSelect = (item) => { setSelectedFeedbackRoom(item); setShowSelector('none'); };
        }

        return (
            <Modal visible={showSelector !== 'none'} animationType="slide" presentationStyle="pageSheet" transparent={Platform.OS === 'android'}>
                <SafeAreaView style={styles.selectorModalContainer}>
                    <View style={styles.modalHeader}>
                        <TouchableOpacity onPress={() => setShowSelector('none')} style={styles.modalCloseButton}>
                            <Ionicons name="close" size={28} color="#1f2937" />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>{title}</Text>
                        <View style={{ width: 36 }} />
                    </View>
                    <ScrollView style={styles.selectorList} showsVerticalScrollIndicator={true}>
                        {data.map((item, index) => {
                            const label = showSelector === 'region' ? item : (showSelector === 'uni' ? item.name : item.nome);
                            return (
                                <TouchableOpacity key={index} style={styles.selectorItem} onPress={() => onSelect(item)}>
                                    <View style={styles.selectorItemContent}>
                                        <Text style={styles.selectorItemText}>{label}</Text>
                                        {showSelector === 'room' && <Text style={styles.selectorItemSubtext}>{item.edificio}</Text>}
                                    </View>
                                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                                </TouchableOpacity>
                            );
                        })}
                        <View style={{ height: 40 }} />
                    </ScrollView>
                </SafeAreaView>
            </Modal>
        );
    };

    // Feedback Modal
    const renderFeedbackModal = () => (
        <Modal visible={showFeedback} animationType="slide" presentationStyle="pageSheet">
            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                    <TouchableOpacity
                        onPress={feedbackStep === 'message' ? () => setFeedbackStep('category') : closeFeedbackModal}
                        style={styles.modalCloseButton}
                    >
                        <Ionicons name={feedbackStep === 'message' ? 'arrow-back' : 'close'} size={28} color="#1f2937" />
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>
                        {feedbackStep === 'category' ? 'Tipo di Segnalazione' : selectedCategory}
                    </Text>
                    <View style={{ width: 36 }} />
                </View>

                {feedbackStep === 'category' ? (
                    <ScrollView style={styles.feedbackContent} showsVerticalScrollIndicator={false}>
                        <Text style={styles.feedbackSubtitle}>Seleziona il tipo di segnalazione che vuoi inviare:</Text>
                        <View style={styles.categoryGrid}>
                            {FEEDBACK_CATEGORIES.map((cat) => (
                                <TouchableOpacity
                                    key={cat.type}
                                    style={styles.categoryCard}
                                    onPress={() => handleCategorySelect(cat.type)}
                                    activeOpacity={0.8}
                                >
                                    <View style={[styles.categoryIcon, { backgroundColor: cat.bg }]}>
                                        <Ionicons name={cat.icon} size={28} color={cat.color} />
                                    </View>
                                    <Text style={styles.categoryLabel}>{cat.type}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                ) : (
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <KeyboardAvoidingView
                            style={styles.messageContainer}
                            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
                        >
                            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                                {selectedCategory === 'Localizzazione Sbagliata' && (
                                    <View style={styles.locationSelectorContainer}>
                                        <Text style={styles.feedbackSubtitle}>Scegli l'aula con la posizione errata:</Text>

                                        <TouchableOpacity style={styles.inlineSelector} onPress={() => setShowSelector('region')}>
                                            <View>
                                                <Text style={styles.inlineSelectorLabel}>1. Regione</Text>
                                                <Text style={[styles.inlineSelectorValue, !selectedFeedbackRegion && { color: '#9ca3af' }]}>
                                                    {selectedFeedbackRegion || 'Tocca per selezionare'}
                                                </Text>
                                            </View>
                                            <Ionicons name="chevron-down" size={20} color="#6b7280" />
                                        </TouchableOpacity>

                                        {selectedFeedbackRegion && (
                                            <TouchableOpacity style={styles.inlineSelector} onPress={() => setShowSelector('uni')}>
                                                <View>
                                                    <Text style={styles.inlineSelectorLabel}>2. Università</Text>
                                                    <Text style={[styles.inlineSelectorValue, !selectedFeedbackUni && { color: '#9ca3af' }]}>
                                                        {selectedFeedbackUni ? universities.find(u => u.id === selectedFeedbackUni)?.name : 'Tocca per selezionare'}
                                                    </Text>
                                                </View>
                                                <Ionicons name="chevron-down" size={20} color="#6b7280" />
                                            </TouchableOpacity>
                                        )}

                                        {selectedFeedbackUni && (
                                            <TouchableOpacity style={styles.inlineSelector} onPress={() => setShowSelector('room')}>
                                                <View>
                                                    <Text style={styles.inlineSelectorLabel}>3. Aula Studio</Text>
                                                    <Text style={[styles.inlineSelectorValue, !selectedFeedbackRoom && { color: '#9ca3af' }]}>
                                                        {selectedFeedbackRoom ? selectedFeedbackRoom.nome : 'Tocca per selezionare'}
                                                    </Text>
                                                </View>
                                                <Ionicons name="chevron-down" size={20} color="#6b7280" />
                                            </TouchableOpacity>
                                        )}
                                        <View style={{ height: 20 }} />
                                    </View>
                                )}

                                <Text style={styles.feedbackSubtitle}>Descrivi nel dettaglio il tuo feedback:</Text>
                                <TextInput
                                    style={styles.messageInput}
                                    placeholder="Scrivi qui il tuo messaggio..."
                                    placeholderTextColor="#9ca3af"
                                    multiline
                                    textAlignVertical="top"
                                    value={feedbackMessage}
                                    onChangeText={setFeedbackMessage}
                                />
                                <TouchableOpacity
                                    style={[
                                        styles.sendButton,
                                        !feedbackMessage.trim() && styles.sendButtonDisabled
                                    ]}
                                    onPress={handleSendFeedback}
                                    disabled={!feedbackMessage.trim()}
                                >
                                    <LinearGradient
                                        colors={feedbackMessage.trim() ? ['#10b981', '#059669'] : ['#d1d5db', '#9ca3af']}
                                        style={styles.sendButtonGradient}
                                    >
                                        <Ionicons name="send" size={20} color="#ffffff" />
                                        <Text style={styles.sendButtonText}>Invia Feedback</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </ScrollView>
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>
                )}
            </SafeAreaView>
            {renderSelectorModal()}
        </Modal>
    );

    const termsContent = `TERMINI E CONDIZIONI D'USO

Ultimo aggiornamento: Gennaio 2026

1. ACCETTAZIONE DEI TERMINI
Utilizzando l'app UniStudy Italia, accetti i presenti Termini e Condizioni. Se non sei d'accordo, ti preghiamo di non utilizzare l'applicazione.

2. DESCRIZIONE DEL SERVIZIO
UniStudy Italia è un'applicazione gratuita che fornisce informazioni sulle aule studio universitarie in Italia. Le informazioni sono fornite a scopo indicativo e potrebbero non essere sempre aggiornate.

3. UTILIZZO DELL'APP
L'utente si impegna a:
• Utilizzare l'app solo per scopi leciti
• Non tentare di compromettere la sicurezza dell'app
• Non raccogliere dati di altri utenti

4. LIMITAZIONE DI RESPONSABILITÀ
Le informazioni sugli orari, disponibilità e servizi delle aule studio sono fornite "così come sono". Non garantiamo l'accuratezza o la completezza delle informazioni.

5. MODIFICHE AI TERMINI
Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Le modifiche saranno comunicate tramite l'app.

6. CONTATTI
Per domande sui Termini, contattaci a: legal@unistudyitalia.app`;

    const privacyContent = `INFORMATIVA SULLA PRIVACY

Ultimo aggiornamento: Gennaio 2026

1. DATI RACCOLTI
UniStudy Italia raccoglie:
• Posizione geografica (solo se autorizzata) per calcolare le distanze
• Preferenze locali (università preferita, filtri)

2. UTILIZZO DEI DATI
I dati di posizione vengono utilizzati esclusivamente per:
• Mostrare la distanza dalle aule studio
• Ordinare le aule per vicinanza

I dati NON vengono:
• Condivisi con terze parti
• Utilizzati per pubblicità
• Memorizzati su server esterni

3. CONSERVAZIONE
Tutti i dati sono memorizzati localmente sul tuo dispositivo e non vengono trasmessi.

4. I TUOI DIRITTI
Puoi:
• Disabilitare la localizzazione in qualsiasi momento
• Eliminare tutti i dati locali disinstallando l'app

5. CONTATTI
Per domande sulla Privacy, contattaci a: support@unistudyitalia.app`;

    return (
        <View style={styles.container}>
            <FocusAwareStatusBar barStyle="light-content" backgroundColor="#10b981" />

            <OnboardingCarousel isVisible={showOnboarding} onComplete={handleOnboardingComplete} />

            {renderLegalModal(showTerms, () => setShowTerms(false), 'Termini e Condizioni', termsContent)}
            {renderLegalModal(showPrivacy, () => setShowPrivacy(false), 'Privacy Policy', privacyContent)}
            {renderFeedbackModal()}

            <LinearGradient colors={['#10b981', '#059669']} style={styles.headerGradient}>
                <SafeAreaView edges={['top']}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={24} color="#ffffff" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Impostazioni</Text>
                        <View style={styles.headerSpacer} />
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Legal Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Legale</Text>
                    <View style={styles.sectionCard}>
                        <SettingItem
                            icon="document-text-outline"
                            iconColor="#6366f1"
                            iconBg="#eef2ff"
                            title="Termini e Condizioni"
                            subtitle="Condizioni d'uso dell'app"
                            onPress={() => setShowTerms(true)}
                        />
                        <View style={styles.divider} />
                        <SettingItem
                            icon="shield-checkmark-outline"
                            iconColor="#8b5cf6"
                            iconBg="#f5f3ff"
                            title="Privacy Policy"
                            subtitle="Come trattiamo i tuoi dati"
                            onPress={() => setShowPrivacy(true)}
                        />
                    </View>
                </View>

                {/* Location Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Posizione</Text>
                    <View style={styles.sectionCard}>
                        <SettingItem
                            icon="location-outline"
                            iconColor="#10b981"
                            iconBg="#ecfdf5"
                            title="Localizzazione"
                            subtitle={locationEnabled ? 'Attiva' : 'Disattivata'}
                            rightElement={
                                <Switch
                                    value={locationEnabled}
                                    onValueChange={handleLocationToggle}
                                    trackColor={{ false: '#e5e7eb', true: '#a7f3d0' }}
                                    thumbColor={locationEnabled ? '#10b981' : '#9ca3af'}
                                />
                            }
                        />
                    </View>
                </View>

                {/* App Info Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Informazioni</Text>
                    <View style={styles.sectionCard}>
                        <SettingItem
                            icon="information-circle-outline"
                            iconColor="#3b82f6"
                            iconBg="#eff6ff"
                            title="Versione App"
                            subtitle={`v${appVersion}`}
                        />
                        <View style={styles.divider} />
                        <SettingItem
                            icon="code-slash-outline"
                            iconColor="#0ea5e9"
                            iconBg="#f0f9ff"
                            title="Sviluppato da"
                            subtitle="Pierfrancesco Amendola"
                            onPress={() => Linking.openURL('https://pierfrancescoamendola.github.io/PierfrancescoAmendola/')}
                        />
                    </View>
                </View>

                {/* Guide Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Guida</Text>
                    <View style={styles.sectionCard}>
                        <SettingItem
                            icon="play-circle-outline"
                            iconColor="#f59e0b"
                            iconBg="#fffbeb"
                            title="Rivedi la Guida"
                            subtitle="Ripeti il tutorial introduttivo"
                            onPress={handleReplayOnboarding}
                        />
                    </View>
                </View>

                {/* Feedback Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Feedback</Text>
                    <View style={styles.sectionCard}>
                        <SettingItem
                            icon="mail-outline"
                            iconColor="#ec4899"
                            iconBg="#fdf2f8"
                            title="Invia Feedback"
                            subtitle="Segnalazioni, suggerimenti, bug"
                            onPress={openFeedbackModal}
                        />
                        <View style={styles.divider} />
                        <SettingItem
                            icon="star-outline"
                            iconColor="#eab308"
                            iconBg="#fefce8"
                            title="Lascia una Recensione"
                            subtitle="Valutaci sullo Store"
                            onPress={handleReview}
                        />
                        <View style={styles.divider} />
                        <SettingItem
                            icon="heart-outline"
                            iconColor="#ef4444"
                            iconBg="#fef2f2"
                            title="Sostieni il Progetto"
                            subtitle="Fai una piccola donazione"
                            onPress={() => navigation.navigate('Donation')}
                        />
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>UniStudy Italia © 2026</Text>
                    <Text style={styles.footerSubtext}>Fatto con ❤️ per gli studenti italiani</Text>
                </View>
            </ScrollView>
        </View>
    );
};

/* ────────────────────────────────────────────────────────
 *  SettingsScreen — Premium Design System
 *  Consistent tokens: #f8fafc, #1e293b, #64748b, #94a3b8
 * ──────────────────────────────────────────────────────── */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },

    /* ── Header ── */
    headerGradient: {
        paddingBottom: 18,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    backButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#ffffff',
        letterSpacing: 0.3,
    },
    headerSpacer: {
        width: 36,
    },

    /* ── Content ── */
    content: {
        flex: 1,
        paddingHorizontal: 16,
    },

    /* ── Sections ── */
    section: {
        marginTop: 28,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#94a3b8',
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        marginBottom: 10,
        marginLeft: 6,
    },
    sectionCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        shadowColor: '#64748b',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 3,
        overflow: 'hidden',
    },

    /* ── Setting Items ── */
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    settingIconContainer: {
        width: 42,
        height: 42,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    settingTextContainer: {
        flex: 1,
    },
    settingTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1e293b',
    },
    settingSubtitle: {
        fontSize: 13,
        color: '#94a3b8',
        marginTop: 2,
    },
    divider: {
        height: 1,
        backgroundColor: '#f1f5f9',
        marginLeft: 72,
    },

    /* ── Footer ── */
    footer: {
        alignItems: 'center',
        paddingVertical: 36,
    },
    footerText: {
        fontSize: 14,
        color: '#94a3b8',
        fontWeight: '600',
    },
    footerSubtext: {
        fontSize: 12,
        color: '#cbd5e1',
        marginTop: 4,
    },

    /* ── Legal Modal ── */
    modalContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#1e293b',
    },
    modalCloseButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#f1f5f9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    legalText: {
        fontSize: 15,
        lineHeight: 24,
        color: '#475569',
    },

    /* ── Feedback Modal ── */
    feedbackContent: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 16,
    },
    feedbackSubtitle: {
        fontSize: 15,
        color: '#64748b',
        marginBottom: 20,
        fontWeight: '500',
    },
    categoryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 12,
    },
    categoryCard: {
        width: '47%',
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#64748b',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#f1f5f9',
    },
    categoryIcon: {
        width: 52,
        height: 52,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    categoryLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1e293b',
        textAlign: 'center',
    },
    messageContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 16,
    },
    messageInput: {
        backgroundColor: '#f8fafc',
        borderRadius: 16,
        padding: 16,
        fontSize: 15,
        color: '#1e293b',
        borderWidth: 1.5,
        borderColor: '#e2e8f0',
        marginBottom: 16,
        minHeight: 120,
        maxHeight: 180,
    },
    sendButton: {
        marginBottom: 20,
        borderRadius: 14,
        overflow: 'hidden',
    },
    sendButtonDisabled: {
        opacity: 0.6,
    },
    sendButtonGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        gap: 8,
    },
    sendButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#ffffff',
        letterSpacing: 0.3,
    },
    selectorModalContainer: {
        flex: 1,
        backgroundColor: '#f3f4f6',
    },
    selectorList: {
        padding: 16,
    },
    selectorItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    selectorItemContent: {
        flex: 1,
        marginRight: 10,
    },
    selectorItemText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1f2937',
    },
    selectorItemSubtext: {
        fontSize: 13,
        color: '#6b7280',
        marginTop: 2,
    },
    locationSelectorContainer: {
        marginBottom: 10,
    },
    inlineSelector: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#e5e7eb',
    },
    inlineSelectorLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: '#6b7280',
        marginBottom: 4,
    },
    inlineSelectorValue: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1f2937',
    },
});
