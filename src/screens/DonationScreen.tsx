import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { FocusAwareStatusBar } from '../components/FocusAwareStatusBar';

interface DonationScreenProps {
    navigation: any;
}

export const DonationScreen: React.FC<DonationScreenProps> = ({ navigation }) => {
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePay = () => {
        const numAmount = parseFloat(amount.replace(',', '.'));

        if (isNaN(numAmount) || numAmount < 1) {
            Alert.alert('Attenzione', 'Inserisci un importo di almeno 1,00 € per procedere.');
            return;
        }

        setLoading(true);
        // Simulate payment process
        setTimeout(() => {
            setLoading(false);
            Alert.alert(
                'Grazie di cuore!',
                'La tua donazione è preziosa per il futuro di UniStudy Italia.',
                [{ text: 'Torna alle Impostazioni', onPress: () => navigation.goBack() }]
            );
        }, 2000);
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <FocusAwareStatusBar barStyle="light-content" backgroundColor="#10b981" />

            <LinearGradient colors={['#10b981', '#059669']} style={styles.headerGradient}>
                <SafeAreaView edges={['top']}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={24} color="#ffffff" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Supporta il Progetto</Text>
                        <View style={{ width: 40 }} />
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <View style={styles.content}>
                        <View style={styles.iconContainer}>
                            <LinearGradient colors={['#fef3c7', '#fde68a']} style={styles.iconBg}>
                                <Ionicons name="heart" size={40} color="#f59e0b" />
                            </LinearGradient>
                        </View>

                        <Text style={styles.title}>Perché donare?</Text>
                        <Text style={styles.description}>
                            UniStudy Italia è un progetto indipendente nato per facilitare la vita universitaria di migliaia di studenti.
                        </Text>

                        <View style={styles.reasonsContainer}>
                            <View style={styles.reasonItem}>
                                <Ionicons name="server-outline" size={20} color="#10b981" />
                                <Text style={styles.reasonText}>Sostieni i costi dei server e della manutenzione.</Text>
                            </View>
                            <View style={styles.reasonItem}>
                                <Ionicons name="add-circle-outline" size={20} color="#10b981" />
                                <Text style={styles.reasonText}>Aiutaci ad aggiungere sempre più università e aule.</Text>
                            </View>
                            <View style={styles.reasonItem}>
                                <Ionicons name="color-wand-outline" size={20} color="#10b981" />
                                <Text style={styles.reasonText}>Permettici di sviluppare nuove funzionalità gratuite.</Text>
                            </View>
                            <View style={styles.reasonItem}>
                                <Ionicons name="cafe-outline" size={20} color="#10b981" />
                                <Text style={styles.reasonText}>Offri un caffè allo sviluppatore che lavora al progetto. ☕</Text>
                            </View>
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Quanto vuoi donare?</Text>
                            <View style={styles.amountInputWrapper}>
                                <Text style={styles.currencySymbol}>€</Text>
                                <TextInput
                                    style={styles.amountInput}
                                    placeholder="0,00"
                                    keyboardType="numeric"
                                    value={amount}
                                    onChangeText={setAmount}
                                    placeholderTextColor="#94a3b8"
                                />
                            </View>
                            <Text style={styles.amountShortcut}>L'importo minimo è 1,00 €</Text>
                        </View>

                        <TouchableOpacity
                            style={[styles.payButton, loading && styles.payButtonDisabled]}
                            onPress={handlePay}
                            disabled={loading}
                        >
                            <LinearGradient
                                colors={['#10b981', '#059669']}
                                style={styles.payButtonGradient}
                            >
                                {loading ? (
                                    <ActivityIndicator color="#ffffff" size="small" />
                                ) : (
                                    <>
                                        <Ionicons name="card-outline" size={22} color="#ffffff" />
                                        <Text style={styles.payButtonText}>Paga con Apple Pay / Google Pay</Text>
                                    </>
                                )}
                            </LinearGradient>
                        </TouchableOpacity>

                        <Text style={styles.secureText}>
                            <Ionicons name="shield-checkmark" size={12} color="#94a3b8" /> Pagamento sicuro e crittografato
                        </Text>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    headerGradient: {
        paddingBottom: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    backButton: {
        padding: 8,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#ffffff',
        letterSpacing: 0.3,
    },
    scrollContent: {
        flexGrow: 1,
    },
    content: {
        padding: 24,
        alignItems: 'center',
    },
    iconContainer: {
        marginBottom: 20,
    },
    iconBg: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#f59e0b',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: '#1e293b',
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        color: '#64748b',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 32,
    },
    reasonsContainer: {
        width: '100%',
        backgroundColor: '#f8fafc',
        borderRadius: 20,
        padding: 20,
        marginBottom: 32,
        borderWidth: 1,
        borderColor: '#f1f5f9',
    },
    reasonItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        gap: 12,
    },
    reasonText: {
        fontSize: 14,
        color: '#475569',
        fontWeight: '500',
        flex: 1,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 32,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#64748b',
        marginBottom: 12,
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    amountInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f5f9',
        borderRadius: 16,
        paddingHorizontal: 20,
        height: 64,
        borderWidth: 2,
        borderColor: '#e2e8f0',
    },
    currencySymbol: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1e293b',
        marginRight: 8,
    },
    amountInput: {
        flex: 1,
        fontSize: 24,
        fontWeight: '700',
        color: '#1e293b',
    },
    amountShortcut: {
        fontSize: 12,
        color: '#94a3b8',
        marginTop: 8,
        textAlign: 'center',
    },
    payButton: {
        width: '100%',
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#10b981',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
        marginBottom: 16,
    },
    payButtonDisabled: {
        opacity: 0.7,
    },
    payButtonGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        gap: 10,
    },
    payButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#ffffff',
    },
    secureText: {
        fontSize: 12,
        color: '#94a3b8',
        fontWeight: '500',
    },
});
