import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { StudyRoom } from '../types';
import { FocusAwareStatusBar } from '../components/FocusAwareStatusBar';
import { parseMarkdownBold } from '../utils/textHelpers';
import { getDirectionsForRoom as getUniNaDirections } from '../data/Campania/federicoII';
import { getDirectionsForRoom as getUniVaDirections } from '../data/Campania/vanvitelli';
import { getDirectionsParthenope } from '../data/Campania/parthenope';
import { getDirectionsOrientale } from '../data/Campania/orientale';
import { getDirectionsUnisa } from '../data/Campania/unisa';
import { getDirectionsUnisannio } from '../data/Campania/unisannio';
import { getDirectionsBenincasa } from '../data/Campania/benincasa';
import { getDirectionsSapienza } from '../data/Lazio/sapienza';
import { getDirectionsTorVergata } from '../data/Lazio/torvergata';
import { getDirectionsRomaTre } from '../data/Lazio/romatre';
import { getDirectionsForoItalico } from '../data/Lazio/foroItalico';
import { getDirectionsUnitus } from '../data/Lazio/unitus';
import { getDirectionsUnicas } from '../data/Lazio/unicas';
import { getDirectionsUnimi } from '../data/Lombardia/unimi';
import { getDirectionsPolimi } from '../data/Lombardia/polimi';
import { getDirectionsUnimib } from '../data/Lombardia/unimib';
import { getDirectionsUnipv } from '../data/Lombardia/unipv';
import { getDirectionsUnibs } from '../data/Lombardia/unibs';
import { getDirectionsUnibg } from '../data/Lombardia/unibg';
import { getDirectionsUninsubria } from '../data/Lombardia/uninsubria';
import { getDirectionsIUSS } from '../data/Lombardia/iuss';
import { getDirectionsUnibo } from '../data/EmiliaRomagna/unibo';
import { getDirectionsUnife } from '../data/EmiliaRomagna/unife';
import { getDirectionsUnimore } from '../data/EmiliaRomagna/unimore';
import { getDirectionsUnipr } from '../data/EmiliaRomagna/unipr';
import { getDirectionsUniTS } from '../data/FriuliVeneziaGiulia/unitsRooms';
import { getDirectionsUniUd } from '../data/FriuliVeneziaGiulia/uniudRooms';
import { getDirectionsTriesteElite } from '../data/FriuliVeneziaGiulia/triesteEliteRooms';
import { getDirectionsAFAM_FVG } from '../data/FriuliVeneziaGiulia/afamFvgRooms';
import { getDirectionsUnivaq } from '../data/Abruzzo/univaq';
import { getDirectionsUdA } from '../data/Abruzzo/uda';
import { getDirectionsUniTe } from '../data/Abruzzo/unite';
import { getDirectionsGSSI } from '../data/Abruzzo/gssi';
import { getDirectionsAFAM } from '../data/Abruzzo/afam';
import { getDirectionsUnibas } from '../data/Basilicata/unibas';
import { getDirectionsAFAM_Basilicata } from '../data/Basilicata/afamBasilicata';
import { getDirectionsUniCal } from '../data/Calabria/unical';
import { getDirectionsUMG } from '../data/Calabria/umg';
import { getDirectionsUniRC } from '../data/Calabria/unirc';
import { getDirectionsAFAM_Calabria } from '../data/Calabria/afamCalabria';
import { getDirectionsUniGe } from '../data/Liguria/unigeRooms';
import { getDirectionsSavona } from '../data/Liguria/unigeSavonaRooms';
import { getDirectionsImperia } from '../data/Liguria/unigeImperiaRooms';
import { getDirectionsSpezia } from '../data/Liguria/unigeSpeziaRooms';
import { getDirectionsHealthDecentralized } from '../data/Liguria/unigeHealthRooms';
import { getDirectionsAFAM_Liguria } from '../data/Liguria/afamLiguriaRooms';

const DirectionPoint: React.FC<{ title: string; content: string; icon: keyof typeof Ionicons.glyphMap }> = ({ title, content, icon }) => (
    <View style={styles.directionPoint}>
        <View style={styles.directionIconContainer}>
            <Ionicons name={icon} size={24} color="#10b981" />
        </View>
        <View style={styles.directionTextContainer}>
            <View>
                {parseMarkdownBold(title, styles.directionTitle)}
            </View>
            <View>
                {parseMarkdownBold(content, styles.directionContent)}
            </View>
        </View>
    </View>
);

export const RoomDetailScreen = ({ route, navigation }: any) => {
    const { room, primaryColor = '#10b981', darkColor = '#059669' } = route.params;

    // Helper to lighten color for backgrounds (simple approach or fallback)
    const lightBackgroundColor = primaryColor === '#ffffff' ? '#f0fdf4' : `${primaryColor}15`; // 15 = ~8% opacity
    const borderColor = primaryColor === '#ffffff' ? '#bbf7d0' : `${primaryColor}40`; // 40 = ~25% opacity

    const directions = useMemo(() => {
        // Check ID to determine which helper to use
        if (room.id.startsWith('pa_')) {
            return getDirectionsParthenope(room);
        }
        if (room.id.startsWith('or_')) {
            return getDirectionsOrientale(room);
        }
        if (room.id.startsWith('unisa_')) {
            return getDirectionsUnisa(room);
        }
        if (room.id.startsWith('sannio_')) {
            return getDirectionsUnisannio(room);
        }
        if (room.id.startsWith('sob_')) {
            return getDirectionsBenincasa(room);
        }
        if (room.id.startsWith('sapienza_')) {
            return getDirectionsSapienza(room);
        }
        if (room.id.startsWith('tor_')) {
            return getDirectionsTorVergata(room);
        }
        if (room.id.startsWith('r3_')) {
            return getDirectionsRomaTre(room);
        }
        if (room.id.startsWith('foro_')) {
            return getDirectionsForoItalico(room);
        }
        if (room.id.startsWith('unitus_')) {
            return getDirectionsUnitus(room);
        }
        if (room.id.startsWith('unicas_')) {
            return getDirectionsUnicas(room);
        }
        if (room.id.startsWith('unimi_')) {
            return getDirectionsUnimi(room);
        }
        if (room.id.startsWith('polimi_')) {
            return getDirectionsPolimi(room);
        }
        if (room.id.startsWith('unimib_')) {
            return getDirectionsUnimib(room);
        }
        if (room.id.startsWith('unipv_')) {
            return getDirectionsUnipv(room);
        }
        if (room.id.startsWith('unibs_')) {
            return getDirectionsUnibs(room);
        }
        if (room.id.startsWith('unibg_') || room.id.startsWith('bg_')) {
            return getDirectionsUnibg(room);
        }
        if (room.id.startsWith('insubria_')) {
            return getDirectionsUninsubria(room);
        }
        if (room.id.startsWith('iuss_')) {
            return getDirectionsIUSS(room);
        }
        if (room.id.startsWith('unibo_') || room.id.startsWith('bologna_')) {
            return getDirectionsUnibo(room);
        }
        if (room.id.startsWith('unife_')) {
            return getDirectionsUnife(room);
        }
        if (room.id.startsWith('unimore_') || room.id.startsWith('modena_')) {
            return getDirectionsUnimore(room);
        }
        if (room.id.startsWith('unipr_') || room.id.startsWith('parma_')) {
            return getDirectionsUnipr(room);
        }
        if (room.id.startsWith('units_') || room.id.startsWith('ts_') || (room.university || '').toLowerCase() === 'units') {
            return getDirectionsUniTS(room);
        }
        if (room.id.startsWith('uniud_') || room.id.startsWith('ud_') || (room.university || '').toLowerCase() === 'uniud') {
            return getDirectionsUniUd(room);
        }
        if (room.id.startsWith('sissa_') || room.id.startsWith('ictp_') || room.id.startsWith('mib_') || ['SISSA', 'ICTP', 'MIB'].includes(room.university || '')) {
            return getDirectionsTriesteElite(room);
        }
        if (room.id.startsWith('cons_ts') || room.id.startsWith('cons_ud') || room.id.startsWith('aba_ud') || (room.university === 'AFAM' && (room.indirizzo.includes('Ghega') || room.indirizzo.includes('Maggio') || room.indirizzo.includes('Ungheria')))) {
            return getDirectionsAFAM_FVG(room);
        }
        if (room.id.startsWith('univaq_') || room.id.startsWith('adsu_')) {
            return getDirectionsUnivaq(room);
        }
        if (room.id.startsWith('uda_')) {
            return getDirectionsUdA(room);
        }
        if (room.id.startsWith('unite_') || room.id.includes('delfico')) {
            return getDirectionsUniTe(room);
        }
        if (room.id.startsWith('gssi_')) {
            return getDirectionsGSSI(room);
        }
        if (room.id.startsWith('unibas_') || room.id.includes('potenza_') || room.id.includes('matera') || (room.university || '').toLowerCase() === 'unibas') {
            return getDirectionsUnibas(room);
        }
        const addressLower = (room.indirizzo || '').toLowerCase();
        if (room.id.startsWith('cons_pz') || room.id.startsWith('cons_mt') || room.id.startsWith('idm') || ((room.university || '').toLowerCase() === 'afam' && (addressLower.includes('potenza') || addressLower.includes('matera')))) {
            return getDirectionsAFAM_Basilicata(room);
        }
        if (room.id.startsWith('unical_')) {
            return getDirectionsUniCal(room);
        }
        if (room.id.startsWith('umg_') || room.id.includes('cz_')) {
            return getDirectionsUMG(room);
        }
        if (room.id.startsWith('unirc_') || room.id.includes('rc_')) {
            return getDirectionsUniRC(room);
        }
        if (room.id.startsWith('cons_cs') || room.id.startsWith('cs_') || room.id.startsWith('abarc') || room.id.startsWith('cons_rc') || room.id.startsWith('rc_') || room.id.startsWith('abacz') || room.id.startsWith('cz_') || room.id.startsWith('cons_vv') || room.id.startsWith('vv_') || room.id.startsWith('fidia') || room.id.startsWith('tchaikovsky') || room.id.startsWith('adsu_rc')) {
            return getDirectionsAFAM_Calabria(room);
        }
        if (room.id.startsWith('unige_sv') || room.id.startsWith('sv_') || room.indirizzo.includes('Savona')) {
            return getDirectionsSavona(room);
        }
        if (room.id.startsWith('unige_im') || room.id.startsWith('im_') || room.indirizzo.includes('Imperia')) {
            return getDirectionsImperia(room);
        }
        if (room.id.startsWith('sp_') || room.indirizzo.includes('Spezia')) {
            return getDirectionsSpezia(room);
        }
        if (room.id.startsWith('unige_health') || room.id.includes('chiavari') || room.id.includes('pietra')) {
            return getDirectionsHealthDecentralized(room);
        }
        if (room.id.startsWith('aba_') || room.id.startsWith('cons_') || room.university === 'AFAM') {
            return getDirectionsAFAM_Liguria(room);
        }
        if (room.id.startsWith('unige_') || room.id.startsWith('ge_') || room.university === 'UniGe') {
            return getDirectionsUniGe(room);
        }
        if ((room.university || '').toUpperCase() === 'AFAM' || room.id.startsWith('abaq_') || room.id.startsWith('cons_') || room.id.startsWith('isia_')) {
            return getDirectionsAFAM(room);
        }
        if (room.id.startsWith('v')) {
            return getUniVaDirections(room);
        }
        return getUniNaDirections(room);
    }, [room]);

    return (
        <View style={styles.container}>
            <FocusAwareStatusBar barStyle="light-content" backgroundColor={primaryColor} />
            <LinearGradient
                colors={[primaryColor, darkColor]}
                style={styles.statusBarBg}
            >
                <SafeAreaView edges={['top']}>
                    <View style={styles.appBar}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name="arrow-back" size={24} color="#ffffff" />
                        </TouchableOpacity>
                        <Text style={styles.appBarTitle} numberOfLines={1}>{room.nome}</Text>
                        <View style={{ width: 40 }} />
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Come Arrivare</Text>
                    <Text style={styles.headerSubtitle}>
                        Segui le indicazioni per raggiungere l'aula studio.
                    </Text>
                </View>

                {/* Univaq-specific advisories: Roio (pendenza) & Centro (Tunnel) & Winter weather */}
                {(() => {
                    const isUnivaq = room.id.startsWith('univaq_') || room.id.startsWith('adsu_') || (room.university || '').toLowerCase() === 'univaq';
                    if (!isUnivaq) return null;
                    const isRoio = room.indirizzo.toLowerCase().includes('roio') || room.id.includes('roio');
                    const isCentro = room.indirizzo.toLowerCase().includes('nizza') || room.indirizzo.toLowerCase().includes('basilio') || room.indirizzo.toLowerCase().includes('mezzanotte');
                    const month = new Date().getMonth(); // 0-11
                    const isWinter = [10, 11, 0, 1].includes(month); // Nov-Feb roughly
                    return (
                        <>
                            {isRoio && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="warning-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>Roio è in forte pendenza: preferisci Bus AMA rispetto a percorsi a piedi.</Text>
                                </View>
                            )}
                            {isCentro && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0f9ff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="walk-outline" size={24} color="#0284c7" />
                                    <Text style={[styles.infoBoxText, { color: '#0284c7' }]}>Per il Centro, usa il Tunnel di Collemaggio dal Terminal a Piazza Duomo.</Text>
                                </View>
                            )}
                            {isRoio && isWinter && (
                                <View style={[styles.infoBox, { backgroundColor: '#eef2ff', borderColor: '#c7d2fe', marginTop: 12 }]}>
                                    <Ionicons name="snow-outline" size={24} color="#4f46e5" />
                                    <Text style={[styles.infoBoxText, { color: '#4f46e5' }]}>Inverno a Roio: controlla corse bus per neve/ghiaccio prima di partire.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '').toLowerCase();
                    const isUniTe = room.id.startsWith('unite_') || uni === 'unite';
                    if (!isUniTe) return null;
                    const isVet = room.id.includes('vet');
                    const isCampus = room.id.includes('campus');
                    const isCentro = room.id.includes('delfico');
                    return (
                        <>
                            {isVet && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff1f2', borderColor: '#fecdd3' }]}>
                                    <Ionicons name="train-outline" size={24} color="#be123c" />
                                    <Text style={[styles.infoBoxText, { color: '#be123c' }]}>Veterinaria è a Piano d'Accio: scendi a Teramo Piano d'Accio, non al Campus.</Text>
                                </View>
                            )}
                            {isCampus && (
                                <View style={[styles.infoBox, { backgroundColor: '#fefce8', borderColor: '#fef08a' }]}>
                                    <Ionicons name="leaf-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>Coste S. Agostino è ventoso: portati una sciarpa.</Text>
                                </View>
                            )}
                            {isCentro && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="walk-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>Le sedi in centro (Via Delfico) sono tutte a piedi dal terminal.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const isImperia = room.id.startsWith('unige_im') || room.id.startsWith('im_') || room.indirizzo.includes('Imperia');
                    if (!isImperia) return null;
                    const isCampus = room.indirizzo.includes('Nizza');
                    const isLagorio = room.id.includes('lagorio');
                    const isParasio = room.id.includes('parasio');
                    return (
                        <>
                            {isCampus && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="car-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>Easy Parking: A differenza di Genova, trovare parcheggio vicino al Campus è fattibile (parcheggi bianchi in Via Nizza).</Text>
                                </View>
                            )}
                            {isLagorio && (
                                <View style={[styles.infoBox, { backgroundColor: '#fefce8', borderColor: '#fef08a' }]}>
                                    <Ionicons name="map-outline" size={24} color="#a16207" />
                                    <Text style={[styles.infoBoxText, { color: '#a16207' }]}>Imperia Oneglia: Sei nella parte commerciale della città. Molti servizi e bar vicini.</Text>
                                </View>
                            )}
                            {isParasio && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="sunny-outline" size={24} color="#1d4ed8" />
                                    <Text style={[styles.infoBoxText, { color: '#1d4ed8' }]}>Spot Ispirazionale: Logge di Santa Chiara con vista mare incredibile. Perfetto per lettura leggera.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const isSpezia = room.id.startsWith('sp_') || room.indirizzo.includes('Spezia');
                    if (!isSpezia) return null;
                    const isCampus = room.indirizzo.includes('Fieschi');
                    const isBeghi = room.id.includes('beghi');
                    const isMirabello = room.id.includes('mirabello');
                    return (
                        <>
                            {isCampus && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="football-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>Match Day Alert: Il Campus è accanto allo stadio. Se lo Spezia gioca in casa, parcheggiare è impossibile!</Text>
                                </View>
                            )}
                            {isBeghi && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="star-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>Most Popular: La Beghi è la biblioteca più amata della città. Spesso aperta fino a tardi.</Text>
                                </View>
                            )}
                            {isMirabello && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="boat-outline" size={24} color="#1d4ed8" />
                                    <Text style={[styles.infoBoxText, { color: '#1d4ed8' }]}>Ispirazione Nautica: Studio con vista sui superyacht. Ottimo per studenti di Yacht Design.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const isHealth = room.id.startsWith('unige_health') || room.id.includes('chiavari') || room.id.includes('pietra');
                    if (!isHealth) return null;
                    const isEconomica = room.id.includes('economica');
                    const isSantaCorona = room.id.includes('corona');
                    const month = new Date().getMonth();
                    const isSummer = month >= 4 && month <= 8; // Maggio - Settembre
                    return (
                        <>
                            {isEconomica && (
                                <View style={[styles.infoBox, { backgroundColor: '#fdf2f8', borderColor: '#fbcfe8' }]}>
                                    <Ionicons name="ribbon-outline" size={24} color="#db2777" />
                                    <Text style={[styles.infoBoxText, { color: '#db2777' }]}>Prestigio: La Società Economica è un luogo storico e silenzioso. Sembra di studiare a Hogwarts!</Text>
                                </View>
                            )}
                            {isSantaCorona && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0f9ff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="navigate-outline" size={24} color="#0284c7" />
                                    <Text style={[styles.infoBoxText, { color: '#0284c7' }]}>Santa Corona è un labirinto: il polo didattico ha un ingresso specifico. Chiedi al check-point.</Text>
                                </View>
                            )}
                            {isSummer && (
                                <View style={[styles.infoBox, { backgroundColor: '#fffbeb', borderColor: '#fef3c7' }]}>
                                    <Ionicons name="umbrella-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>Beach Distraction: La spiaggia è letteralmente dall'altra parte della strada. Resistenza alta richiesta!</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const isAFAM_Liguria = room.id.startsWith('aba_') || room.id.startsWith('cons_');
                    if (!isAFAM_Liguria) return null;
                    const isLigustica = room.indirizzo.includes('Pertini') || room.id.includes('ligustica');
                    const isPaganini = room.indirizzo.includes('Pozzo') || room.id.includes('paganini');
                    const isSanremo = room.indirizzo.includes('Ponte') || room.id.includes('sanremo');
                    return (
                        <>
                            {isLigustica && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="library-outline" size={24} color="#1d4ed8" />
                                    <Text style={[styles.infoBoxText, { color: '#1d4ed8' }]}>Plan B: Se la biblioteca interna è chiusa, attraversa la strada per la Biblioteca Berio (Via del Seminario).</Text>
                                </View>
                            )}
                            {isPaganini && (
                                <View style={[styles.infoBox, { backgroundColor: '#fdf2f8', borderColor: '#fbcfe8' }]}>
                                    <Ionicons name="musical-notes-outline" size={24} color="#db2777" />
                                    <Text style={[styles.infoBoxText, { color: '#db2777' }]}>Mood Aristocratico: Sei in una villa storica ad Albaro. Silenzio interrotto solo da qualche scala cromatica.</Text>
                                </View>
                            )}
                            {isSanremo && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="walk-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>Attenzione Stazione: Il tunnel della stazione di Sanremo è lunghissimo. Calcola 5-8 min solo per uscire!</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '').toLowerCase();
                    const isGssi = room.id.startsWith('gssi_') || uni === 'gssi';
                    if (!isGssi) return null;
                    return (
                        <View style={[styles.infoBox, { backgroundColor: '#f8fafc', borderColor: '#cbd5e1' }]}>
                            <Ionicons name="lock-closed-outline" size={24} color="#0f172a" />
                            <Text style={[styles.infoBoxText, { color: '#0f172a' }]}>Accesso regolato: badge/reception per entrare nel GSSI.</Text>
                        </View>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '').toLowerCase();
                    const isUnibas = uni === 'unibas' || room.id.startsWith('unibas_') || room.id.includes('potenza_') || room.id.includes('matera');
                    if (!isUnibas) return null;
                    const isMacchia = room.id.includes('macchia') || room.id.includes('adsu');
                    const isGallitello = room.id.includes('nazionale');
                    const isCentro = room.id.includes('francioso') || room.indirizzo.toLowerCase().includes('sauro') || room.indirizzo.toLowerCase().includes('garibaldi');
                    const isMatera = room.indirizzo.toLowerCase().includes('matera');
                    const month = new Date().getMonth();
                    const isWinter = [10, 11, 0, 1].includes(month);
                    return (
                        <>
                            {isMacchia && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="cloud-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>Macchia Romana e' in alto: vento forte, autobus lenti con neve/pioggia. Considera margine extra.</Text>
                                </View>
                            )}
                            {isGallitello && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0', marginTop: isMacchia ? 12 : 0 }]}>
                                    <Ionicons name="location-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#166534' }]}>Gallitello e' in basso: Biblioteca Nazionale enorme e silenziosa, comoda per parcheggio/shopping.</Text>
                                </View>
                            )}
                            {isCentro && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa', marginTop: isMacchia || isGallitello ? 12 : 0 }]}>
                                    <Ionicons name="walk-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>Per il centro usa le scale mobili (Santa Lucia/Ponte Attrezzato) per evitare salite infinite.</Text>
                                </View>
                            )}
                            {isMatera && (
                                <View style={[styles.infoBox, { backgroundColor: '#f5f3ff', borderColor: '#ddd6fe', marginTop: (isMacchia || isGallitello || isCentro) ? 12 : 0 }]}>
                                    <Ionicons name="map-outline" size={24} color="#7c3aed" />
                                    <Text style={[styles.infoBoxText, { color: '#7c3aed' }]}>Matera: Stigliani e' in Piazza Vittorio Veneto (centro), Campus Lanera e' a 10-15 min a piedi.</Text>
                                </View>
                            )}
                            {isMacchia && isWinter && (
                                <View style={[styles.infoBox, { backgroundColor: '#eef2ff', borderColor: '#c7d2fe', marginTop: 12 }]}>
                                    <Ionicons name="snow-outline" size={24} color="#4f46e5" />
                                    <Text style={[styles.infoBoxText, { color: '#4f46e5' }]}>Inverno a Macchia: controlla ritardi bus per neve/ghiaccio prima di salire.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '').toLowerCase();
                    const isAFAM_Basi = room.id.startsWith('cons_pz') || room.id.startsWith('cons_mt') || room.id.startsWith('idm');
                    if (!isAFAM_Basi) return null;
                    const isPotenza = room.id.includes('cons_pz');
                    const isSassi = room.id.includes('cons_mt_sedile');
                    const isDesign = room.id.includes('idm');
                    const needsBooking = room.tags?.some(t => t.toLowerCase().includes('prenot')) || room.id.includes('aule');
                    return (
                        <>
                            {isPotenza && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef3c7', borderColor: '#fcd34d' }]}>
                                    <Ionicons name="car-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>Potenza: unica sede AFAM con parcheggio facile. Ideale per pendolari in auto.</Text>
                                </View>
                            )}
                            {isSassi && (
                                <View style={[styles.infoBox, { backgroundColor: '#f5f3ff', borderColor: '#ddd6fe', marginTop: isPotenza ? 12 : 0 }]}>
                                    <Ionicons name="camera-outline" size={24} color="#7c3aed" />
                                    <Text style={[styles.infoBoxText, { color: '#7c3aed' }]}>Location turistica (Sassi): magnifico ma circondato da turisti h24. Parcheggio ZTL impossibile, usa parcheggi esterni e cammina.</Text>
                                </View>
                            )}
                            {isDesign && (
                                <View style={[styles.infoBox, { backgroundColor: '#ecfdf5', borderColor: '#a7f3d0', marginTop: isPotenza || isSassi ? 12 : 0 }]}>
                                    <Ionicons name="easel-outline" size={24} color="#059669" />
                                    <Text style={[styles.infoBoxText, { color: '#059669' }]}>IDM Matera: accesso carrabile facile, ideale per portare tavole/plastici/computer pesanti. Lontano dai Sassi.</Text>
                                </View>
                            )}
                            {needsBooking && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa', marginTop: isPotenza || isSassi || isDesign ? 12 : 0 }]}>
                                    <Ionicons name="calendar-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>Sale strumento: prenotazione obbligatoria in portineria.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const isUnibas = room.id.startsWith('unibas_') || room.id.includes('potenza_') || room.id.includes('matera');
                    if (!isUnibas) return null;
                    const isMacchia = room.id.includes('macchia') || room.id.includes('adsu');
                    const isGallitello = room.id.includes('nazionale');
                    const isCentro = room.id.includes('francioso') || room.indirizzo.toLowerCase().includes('sauro') || room.indirizzo.toLowerCase().includes('garibaldi');
                    const isMatera = room.indirizzo.toLowerCase().includes('matera');
                    const month = new Date().getMonth();
                    const isWinter = [10, 11, 0, 1].includes(month);
                    return (
                        <>
                            {isMacchia && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="cloud-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>Macchia Romana e' in alto: vento forte, autobus lenti con neve/pioggia. Considera margine extra.</Text>
                                </View>
                            )}
                            {isGallitello && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0', marginTop: isMacchia ? 12 : 0 }]}>
                                    <Ionicons name="location-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#166534' }]}>Gallitello e' in basso: Biblioteca Nazionale enorme e silenziosa, comoda per parcheggio/shopping.</Text>
                                </View>
                            )}
                            {isCentro && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa', marginTop: isMacchia || isGallitello ? 12 : 0 }]}>
                                    <Ionicons name="walk-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>Per il centro usa le scale mobili (Santa Lucia/Ponte Attrezzato) per evitare salite infinite.</Text>
                                </View>
                            )}
                            {isMatera && (
                                <View style={[styles.infoBox, { backgroundColor: '#f5f3ff', borderColor: '#ddd6fe', marginTop: (isMacchia || isGallitello || isCentro) ? 12 : 0 }]}>
                                    <Ionicons name="map-outline" size={24} color="#7c3aed" />
                                    <Text style={[styles.infoBoxText, { color: '#7c3aed' }]}>Matera: Stigliani e' in Piazza Vittorio Veneto (centro), Campus Lanera e' a 10-15 min a piedi.</Text>
                                </View>
                            )}
                            {isMacchia && isWinter && (
                                <View style={[styles.infoBox, { backgroundColor: '#eef2ff', borderColor: '#c7d2fe', marginTop: 12 }]}>
                                    <Ionicons name="snow-outline" size={24} color="#4f46e5" />
                                    <Text style={[styles.infoBoxText, { color: '#4f46e5' }]}>Inverno a Macchia: controlla ritardi bus per neve/ghiaccio prima di salire.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '').toUpperCase();
                    const isAfam = uni === 'AFAM' || room.id.includes('abaq') || room.id.includes('cons_') || room.id.includes('isia');
                    if (!isAfam) return null;
                    const needsBooking = room.tags?.some(t => t.toLowerCase().includes('prenot')) || room.nome.toLowerCase().includes('prenotazione') || room.id.includes('aule');
                    const isNoisy = room.id.includes('cons_') && !room.id.includes('biblio');
                    return (
                        <>
                            {needsBooking && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="calendar-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>Per le sale strumento serve prenotazione in portineria/reception.</Text>
                                </View>
                            )}
                            {isNoisy && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0f9ff', borderColor: '#bae6fd', marginTop: needsBooking ? 12 : 0 }]}>
                                    <Ionicons name="musical-notes-outline" size={24} color="#0284c7" />
                                    <Text style={[styles.infoBoxText, { color: '#0284c7' }]}>Nei conservatori c'e' sempre rumore di strumenti: ottimo per suonare, meno per silenzio assoluto.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const isUda = room.id.startsWith('uda_') || (room.university || '').toLowerCase().includes("ud'a");
                    if (!isUda) return null;
                    const isChietiCampus = room.indirizzo.includes('Vestini') || room.id.includes('chieti_paratore') || room.id.includes('medicina') || room.id.includes('farmacia');
                    const isChietiAlta = room.id.includes('civitella');
                    const isPescara = room.indirizzo.includes('Pindaro') || room.id.includes('pescara');
                    return (
                        <>
                            {isChietiCampus && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff1f2', borderColor: '#fecdd3' }]}>
                                    <Ionicons name="train-outline" size={24} color="#be123c" />
                                    <Text style={[styles.infoBoxText, { color: '#be123c' }]}>Scendi a <Text style={{ fontWeight: '700' }}>Chieti-Madonna delle Piane</Text>, NON a Chieti Centrale.</Text>
                                </View>
                            )}
                            {isPescara && (
                                <View style={[styles.infoBox, { backgroundColor: '#ecfeff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="sparkles-outline" size={24} color="#0ea5e9" />
                                    <Text style={[styles.infoBoxText, { color: '#0ea5e9' }]}>Pescara Pindaro è a due passi da Pescara Vecchia e Pineta Dannunziana.</Text>
                                </View>
                            )}
                            {isChietiAlta && (
                                <View style={[styles.infoBox, { backgroundColor: '#f5f3ff', borderColor: '#ddd6fe' }]}>
                                    <Ionicons name="home-outline" size={24} color="#7c3aed" />
                                    <Text style={[styles.infoBoxText, { color: '#7c3aed' }]}>Perfetto per residenti in centro: La Civitella è in collina, non nel campus.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                <View style={styles.directionsContainer}>
                    {directions.map((dir, index) => {
                        const getIcon = () => {
                            const text = (dir.mezziPubblici?.[0] || dir.luogo || '').toLowerCase();
                            if (text.includes('treno') || text.includes('station') || text.includes('stazione') || text.includes('cumana') || text.includes('flegrei') || text.includes('leopardi') || text.includes('mostra')) return 'train-outline';
                            if (text.includes('bus') || text.includes('pullman') || text.includes('navetta') || text.includes('sita') || text.includes('autobus')) return 'bus-outline';
                            if (text.includes('metro')) return 'subway-outline';
                            if (text.includes('auto') || text.includes('parcheggio')) return 'car-outline';
                            if (text.includes('piedi') || text.includes('cammina')) return 'walk-outline';
                            if (text.includes('tram')) return 'tram-outline';
                            return 'map-outline';
                        };

                        return (
                            <View key={index} style={styles.directionPoint}>
                                <View style={[styles.directionIconContainer, { backgroundColor: lightBackgroundColor }]}>
                                    <Ionicons name={getIcon()} size={24} color={primaryColor} />
                                </View>
                                <View style={styles.directionTextContainer}>
                                    <Text style={styles.directionTitle}>{dir.luogo}</Text>
                                    <Text style={styles.directionContent}>{`${dir.descrizione}\n${dir.note || ''}`}</Text>
                                </View>
                            </View>
                        );
                    })}
                    {directions.length === 0 && (
                        <Text style={styles.directionContent}>Nessuna indicazione specifica disponibile.</Text>
                    )}
                </View>

                <View style={[styles.infoBox, { backgroundColor: lightBackgroundColor, borderColor: borderColor }]}>
                    <Ionicons name="information-circle-outline" size={24} color={darkColor} />
                    <Text style={[styles.infoBoxText, { color: darkColor }]}>
                        Gli orari dei mezzi pubblici potrebbero variare. Controlla sempre le app ufficiali dei trasporti.
                    </Text>
                </View>

                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe', marginTop: 16 }]}>
                    <Ionicons name="cloud-offline-outline" size={24} color="#3b82f6" />
                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>
                        Queste indicazioni sono disponibili anche offline.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    statusBarBg: {
        paddingTop: 0,
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        minHeight: 60,
    },
    backButton: {
        padding: 6,
    },
    appBarTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#ffffff',
        letterSpacing: 0.3,
        textAlign: 'center',
        marginHorizontal: 10,
        flexShrink: 1,
    },
    scrollContent: {
        padding: 20,
    },
    header: {
        marginBottom: 24,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 8,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#6b7280',
    },
    directionsContainer: {
        gap: 20,
    },
    directionPoint: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    directionIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#ecfdf5',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    directionTextContainer: {
        flex: 1,
    },
    directionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: 6,
    },
    directionContent: {
        fontSize: 14,
        color: '#475569',
        lineHeight: 20,
    },
    infoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ecfdf5',
        padding: 16,
        borderRadius: 12,
        marginTop: 32,
        borderWidth: 1,
        borderColor: '#a7f3d0',
    },
    infoBoxText: {
        flex: 1,
        marginLeft: 12,
        fontSize: 13,
        color: '#047857',
        lineHeight: 18,
    },
});
