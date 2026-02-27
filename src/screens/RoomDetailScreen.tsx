import React, { useMemo, useState, useEffect } from 'react';
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
import { getDirectionsUNIVPM } from '../data/Marche/univpm';
import { getDirectionsUniUrb } from '../data/Marche/uniurb';
import { getDirectionsUniMC } from '../data/Marche/unimc';
import { getDirectionsUniCam } from '../data/Marche/unicam';
import { getDirectionsAFAM_Marche } from '../data/Marche/afamMarche';
import { getDirectionsUnimol } from '../data/Molise/unimol';
import { getDirectionsUniTo } from '../data/Piemonte/unito';
import { getDirectionsPoliTo } from '../data/Piemonte/polito';
import { getDirectionsUPO } from '../data/Piemonte/upo';
import { getDirectionsAFAMPiemonte } from '../data/Piemonte/afamPiemonte';
import { getDirectionsUniBa } from '../data/Puglia/uniba';
import { getDirectionsPoliBa } from '../data/Puglia/poliba';
import { getDirectionsUniSalento } from '../data/Puglia/unisalento';
import { getDirectionsUniFg } from '../data/Puglia/unifg';
import { getDirectionsAFAMPuglia } from '../data/Puglia/afamPuglia';
import { getDirectionsUniCa } from '../data/Sardegna/unicaRooms';
import { getDirectionsUniSS } from '../data/Sardegna/unissRooms';
import { getDirectionsSardegnaDecentrati } from '../data/Sardegna/poliDecentratiSardegnaRooms';
import { getDirectionsUniPa } from '../data/Sicilia/unipa';
import { getDirectionsUniCt } from '../data/Sicilia/unict';
import { getDirectionsUniMe } from '../data/Sicilia/unime';
import { getDirectionsAFAMSicilia } from '../data/Sicilia/afamSicilia';
import { getDirectionsUniFi } from '../data/Toscana/unifi';
import { getDirectionsUniPi } from '../data/Toscana/unipi';

const DirectionPoint: React.FC<{ title: string; content: string; icon: any }> = ({ title, content, icon }) => (
    <View style={styles.directionPoint}>
        <View style={styles.directionIconContainer}>
            <Ionicons name={icon} size={24} color="#10b981" />
        </View>
        <View style={styles.directionTextContainer}>
            <Text style={styles.directionTitle}>
                {parseMarkdownBold(title, styles.directionTitle)}
            </Text>
            <Text style={styles.directionContent}>
                {parseMarkdownBold(content, styles.directionContent)}
            </Text>
        </View>
    </View>
);

export const RoomDetailScreen = ({ route, navigation }: any) => {
    const { room, primaryColor = '#10b981', darkColor = '#059669' } = route.params;

    // Helper to lighten color for backgrounds (simple approach or fallback)
    const lightBackgroundColor = primaryColor === '#ffffff' ? '#f0fdf4' : `${primaryColor}15`; // 15 = ~8% opacity
    const borderColor = primaryColor === '#ffffff' ? '#bbf7d0' : `${primaryColor}40`; // 40 = ~25% opacity

    // Meteo-Bici / Tram-Sync State (UniPi / UniFi / etc)
    const [isRainy, setIsRainy] = useState<boolean>(false);
    const [weatherLoading, setWeatherLoading] = useState<boolean>(true);

    useEffect(() => {
        let isMounted = true;
        const fetchLocalWeather = async () => {
            if (!room.latitude || !room.longitude) {
                setWeatherLoading(false);
                return;
            }
            try {
                const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${room.latitude}&longitude=${room.longitude}&current_weather=true`);
                if (!res.ok) throw new Error('API Error');
                const data = await res.json();
                if (data.current_weather && isMounted) {
                    const code = data.current_weather.weathercode;
                    // Rain codes: 51-67, 80-82, 95-99
                    const rain = (code >= 51 && code <= 67) || (code >= 80 && code <= 82) || (code >= 95 && code <= 99);
                    setIsRainy(rain);
                }
            } catch (e) {
                console.log("Weather fetch failed", e);
            } finally {
                if (isMounted) setWeatherLoading(false);
            }
        };

        const uni = (room.university || '').toLowerCase();
        // Only fetch weather if needed (e.g. UniPi and maybe UniFi in the future)
        if (room.id.startsWith('unipi_') || uni === 'unipi' || uni.includes('pisa') || uni.includes('livorno')) {
            fetchLocalWeather();
        } else {
            setWeatherLoading(false);
        }

        return () => { isMounted = false; };
    }, [room.latitude, room.longitude, room.university, room.id]);

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
        if (room.id.startsWith('unito_') || (room.university || '').toLowerCase() === 'unito' || (room.university || '').includes('UniTo')) {
            return getDirectionsUniTo(room);
        }
        if (room.id.startsWith('polito_') || (room.university || '').toLowerCase() === 'polito' || (room.university || '').includes('PoliTo')) {
            return getDirectionsPoliTo(room);
        }
        if (room.id.startsWith('upo_') || (room.university || '').toLowerCase() === 'upo' || (room.university || '') === 'UPO') {
            return getDirectionsUPO(room);
        }
        if (room.id.startsWith('aba_albertina') || room.id.startsWith('ied_') || room.id.startsWith('iaad_') || room.id.startsWith('cons_verdi_') || room.id.startsWith('cons_vivaldi_') || room.id.startsWith('cons_cantelli_') || room.id.startsWith('cons_ghedini_') || room.id.startsWith('acme_') || room.id.startsWith('aba_cuneo_')) {
            return getDirectionsAFAMPiemonte(room);
        }
        if (room.id.startsWith('unimol_') || room.id === 'cb_albino' || (room.university || '').toLowerCase() === 'unimol') {
            return getDirectionsUnimol(room);
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
        if (room.id.startsWith('aba_ligustica') || room.id.startsWith('cons_paganini') || room.id.startsWith('cons_sp') || room.id.startsWith('aba_sanremo') || room.id.startsWith('sanremo_')) {
            return getDirectionsAFAM_Liguria(room);
        }
        if (room.id.startsWith('unige_') || room.id.startsWith('ge_') || room.university === 'UniGe') {
            return getDirectionsUniGe(room);
        }
        if (room.id.startsWith('univpm_') || room.id.startsWith('an_') || room.university === 'UNIVPM') {
            return getDirectionsUNIVPM(room);
        }
        if (room.id.startsWith('uniurb_') || room.id.startsWith('fano_') || room.id.startsWith('pesaro_') || room.university === 'UniUrb') {
            return getDirectionsUniUrb(room);
        }
        if (room.id.startsWith('unimc_') || room.id.startsWith('civitanova_') || room.id.startsWith('jesi_') || room.id.startsWith('fermo_') || room.university === 'UniMC') {
            return getDirectionsUniMC(room);
        }
        if (room.id.startsWith('unicam_') || room.id.startsWith('matelica_') || room.id.includes('ascoli_annunziata') || room.university === 'UniCam') {
            return getDirectionsUniCam(room);
        }
        if (room.id.startsWith('isia_urbino') || room.id.startsWith('aba_urbino') || room.id.startsWith('aba_macerata') || room.id.startsWith('macerata_') || room.id.startsWith('cons_rossini') || room.id.startsWith('pesaro_') || room.id.startsWith('cons_fermo') || room.id.startsWith('fermo_') || room.id.startsWith('poliarte_')) {
            return getDirectionsAFAM_Marche(room);
        }
        if (room.id.startsWith('uniba_') || (room.university || '').includes('UniBa')) {
            return getDirectionsUniBa(room);
        }
        if (room.id.startsWith('poliba_') || (room.university || '').includes('PoliBa')) {
            return getDirectionsPoliBa(room);
        }
        if (room.id.startsWith('unisalento_') || room.id.startsWith('lecce_') || (room.university || '').includes('UniSalento')) {
            return getDirectionsUniSalento(room);
        }
        if (room.id.startsWith('unifg_') || room.id.startsWith('fg_') || (room.university || '').includes('UniFg')) {
            return getDirectionsUniFg(room);
        }
        if (room.id.startsWith('aba_') && ((room.university || '').includes('Bari') || (room.university || '').includes('Foggia') || (room.university || '').includes('Lecce'))) {
            return getDirectionsAFAMPuglia(room);
        }
        if (room.id.startsWith('cons_') && ((room.university || '').includes('Bari') || (room.university || '').includes('Monopoli') || (room.university || '').includes('Taranto') || (room.university || '').includes('Foggia'))) {
            return getDirectionsAFAMPuglia(room);
        }
        if (room.id.startsWith('unica_') || (room.university || '').toLowerCase() === 'unica') {
            return getDirectionsUniCa(room);
        }
        if (room.id.startsWith('uniss_') || (room.university || '').toLowerCase() === 'uniss' || (room.university || '').toLowerCase().includes('sassari')) {
            return getDirectionsUniSS(room);
        }
        if (room.id.startsWith('alghero_') || room.id.startsWith('olbia_') || room.id.startsWith('oristano_') || room.id.startsWith('nuoro_') || room.id.startsWith('aba_sironi') || room.id.startsWith('cons_canepa') || room.id.startsWith('cons_palestrina') || (room.university || '').includes('UniOlbia') || (room.university || '').includes('UniNuoro') || (room.university || '').includes('Consorzio UNO') || (room.university || '').includes('Alghero')) {
            return getDirectionsSardegnaDecentrati(room);
        }
        if (room.id.startsWith('unipa_') || (room.university || '').toLowerCase() === 'unipa' || (room.university || '').toLowerCase().includes('palermo') || (room.university || '').toLowerCase().includes('trapani') || (room.university || '').toLowerCase().includes('agrigento') || (room.university || '').toLowerCase().includes('caltanissetta')) {
            return getDirectionsUniPa(room);
        }
        if (room.id.startsWith('unict_') || (room.university || '').toLowerCase() === 'unict' || (room.university || '').toLowerCase().includes('catania') || (room.university || '').toLowerCase().includes('siracusa') || (room.university || '').toLowerCase().includes('ragusa')) {
            return getDirectionsUniCt(room);
        }
        if (room.id.startsWith('unime_') || (room.university || '').toLowerCase() === 'unime' || (room.university || '').toLowerCase().includes('messina') || (room.university || '').toLowerCase().includes('noto')) {
            return getDirectionsUniMe(room);
        }
        if (room.id.startsWith('aba_') || room.id.startsWith('cons_') || room.id.startsWith('idm_') || (room.university || '').toLowerCase().includes('afam')) {
            if ((room.university || '').toLowerCase().includes('palermo') || (room.university || '').toLowerCase().includes('catania') || (room.university || '').toLowerCase().includes('messina') || (room.university || '').toLowerCase().includes('trapani') || (room.university || '').toLowerCase().includes('agrigento') || (room.university || '').toLowerCase().includes('ragusa') || (room.university || '').toLowerCase().includes('caltanissetta') || (room.university || '').toLowerCase().includes('ribera') || (room.university || '').toLowerCase().includes('abadir') || room.id.includes('palermo') || room.id.includes('catania') || room.id.includes('messina') || room.id.includes('trapani') || room.id.includes('agrigento') || room.id.includes('ragusa') || room.id.includes('caltanissetta') || room.id.includes('ribera') || room.id.includes('abadir') || room.id.includes('scarlatti') || room.id.includes('bellini') || room.id.includes('scontrino') || room.id.includes('toscanini') || room.id.includes('corelli')) {
                return getDirectionsAFAMSicilia(room);
            }
        }
        if (room.id.startsWith('unifi_') || (room.university || '').toLowerCase() === 'unifi' || (room.university || '').toLowerCase().includes('firenze') || (room.university || '').toLowerCase().includes('prato') || (room.university || '').toLowerCase().includes('empoli') || (room.university || '').toLowerCase().includes('sesto') || (room.university || '').toLowerCase().includes('scandicci') || (room.university || '').toLowerCase().includes('pistoia')) {
            return getDirectionsUniFi(room);
        }
        if (room.id.startsWith('unipi_') || (room.university || '').toLowerCase() === 'unipi' || (room.university || '').toLowerCase().includes('pisa') || (room.university || '').toLowerCase().includes('livorno') || (room.university || '').toLowerCase().includes('spezia') || (room.university || '').toLowerCase().includes('lucca')) {
            return getDirectionsUniPi(room, isRainy);
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

                {/* UniMol-specific advisories */}
                {(() => {
                    const uni = (room.university || '').toLowerCase();
                    const isUnimol = uni === 'unimol' || room.id.startsWith('unimol_');
                    if (!isUnimol) return null;

                    const isVazzieri = room.id.includes('vazzieri') || room.id.includes('leonardo') || room.id.includes('economia');
                    const isTappino = room.id.includes('tappino');
                    const month = new Date().getMonth();
                    const isWinter = [10, 11, 0, 1, 2].includes(month); // Nov-Mar

                    return (
                        <>
                            {isWinter && (isVazzieri || isTappino) && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="snow-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>Campobasso è fredda (700m slm). Possibile neve: controlla se i bus SEAC per Tappino circolano.</Text>
                                </View>
                            )}
                            {isTappino && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa', marginTop: isWinter ? 12 : 0 }]}>
                                    <Ionicons name="medkit-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>Medicina è isolata: non riesci ad andare in sede centrale (Vazzieri) tra una lezione e l'altra.</Text>
                                </View>
                            )}
                            {isVazzieri && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0', marginTop: isWinter ? 12 : 0 }]}>
                                    <Ionicons name="bus-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>Hub Vazzieri: usa la Navetta gratuita "Campus Travellers" (serve badge).</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

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
                    const isUniPa = room.id.startsWith('unipa_') || uni === 'unipa';
                    if (!isUniPa) return null;
                    const isVialeScienze = room.id.includes('viale');
                    const isTrapani = room.id.includes('trapani');
                    const isAgrigento = room.id.includes('agrigento');
                    return (
                        <>
                            {isVialeScienze && (
                                <View style={[styles.infoBox, { backgroundColor: '#fefce8', borderColor: '#fef08a' }]}>
                                    <Ionicons name="car-outline" size={24} color="#a16207" />
                                    <Text style={[styles.infoBoxText, { color: '#a16207' }]}>Viale delle Scienze: Il parcheggio interno è difficile dopo le 8:30. Usa la Metro Orleans o il Bus 109.</Text>
                                </View>
                            )}
                            {isTrapani && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe', marginTop: isVialeScienze ? 12 : 0 }]}>
                                    <Ionicons name="boat-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>Polo di Trapani: Vicino al mare, molto ventoso. Se arrivi da Palermo, calcola bene gli orari Segesta (bus).</Text>
                                </View>
                            )}
                            {isAgrigento && (
                                <View style={[styles.infoBox, { backgroundColor: '#fdf4ff', borderColor: '#e879f9', marginTop: (isVialeScienze || isTrapani) ? 12 : 0 }]}>
                                    <Ionicons name="partly-sunny-outline" size={24} color="#c026d3" />
                                    <Text style={[styles.infoBoxText, { color: '#c026d3' }]}>Polo di Agrigento: Fuori centro città. Essenziale l'auto per non dipendere dai bus urbani TUA.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '').toLowerCase();
                    const isUniCt = room.id.startsWith('unict_') || uni === 'unict';
                    if (!isUniCt) return null;
                    const isCittadella = room.id.includes('cittadella');
                    const isBenedettini = room.id.includes('benedettini');
                    const isSiracusa = room.id.includes('siracusa');
                    return (
                        <>
                            {isCittadella && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="subway-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>Cittadella Universitaria: Evita il traffico della circonvallazione usando la navetta Metro Shuttle dalla stazione Milo.</Text>
                                </View>
                            )}
                            {isBenedettini && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef08a', borderColor: '#facc15', marginTop: isCittadella ? 12 : 0 }]}>
                                    <Ionicons name="walk-outline" size={24} color="#854d0e" />
                                    <Text style={[styles.infoBoxText, { color: '#854d0e' }]}>Benedettini/Centro: Zona ZTL e sosta a pagamento fitta. Parcheggia in piazza Dante se sei fortunato, oppure usa il bus.</Text>
                                </View>
                            )}
                            {isSiracusa && (
                                <View style={[styles.infoBox, { backgroundColor: '#e0f2fe', borderColor: '#7dd3fc', marginTop: (isCittadella || isBenedettini) ? 12 : 0 }]}>
                                    <Ionicons name="warning-outline" size={24} color="#0369a1" />
                                    <Text style={[styles.infoBoxText, { color: '#0369a1' }]}>Siracusa (Architettura Ortigia): Ortigia è ZTL assoluta. Parcheggia al Talete o al Molo Sant'Antonio.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '').toLowerCase();
                    const isUniMe = room.id.startsWith('unime_') || uni === 'unime';
                    if (!isUniMe) return null;
                    const isPapardo = room.id.includes('papardo');
                    const isPoliclinico = room.id.includes('policlinico');
                    const isNoto = room.id.includes('noto');
                    return (
                        <>
                            {isPapardo && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="bus-outline" size={24} color="#1d4ed8" />
                                    <Text style={[styles.infoBoxText, { color: '#1d4ed8' }]}>Papardo: Estremo Nord di Messina. Il bus ATM è obbligatorio se non hai l'auto. Calcola traffico sulla litoranea.</Text>
                                </View>
                            )}
                            {isPoliclinico && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef2f2', borderColor: '#fecaca', marginTop: isPapardo ? 12 : 0 }]}>
                                    <Ionicons name="train-outline" size={24} color="#b91c1c" />
                                    <Text style={[styles.infoBoxText, { color: '#b91c1c' }]}>Policlinico Gazzi: Ignora l'auto. Prendi la linea 28 del Tram (direzione Sud) fino al capolinea esatto.</Text>
                                </View>
                            )}
                            {isNoto && (
                                <View style={[styles.infoBox, { backgroundColor: '#fdf4ff', borderColor: '#e879f9', marginTop: (isPapardo || isPoliclinico) ? 12 : 0 }]}>
                                    <Ionicons name="sunny-outline" size={24} color="#a21caf" />
                                    <Text style={[styles.infoBoxText, { color: '#a21caf' }]}>CUMO Noto: Centro storico pedonale. L'estate può far caldissimo, ma il palazzo delle aule garantisce ombra costante.</Text>
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
                    const needsBooking = room.tags?.some((t: string) => t.toLowerCase().includes('prenot')) || room.id.includes('aule');
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
                    const needsBooking = room.tags?.some((t: string) => t.toLowerCase().includes('prenot')) || room.nome.toLowerCase().includes('prenotazione') || room.id.includes('aule');
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

                {(() => {
                    const uni = (room.university || '').toUpperCase();
                    if (uni !== 'UNIVPM') return null;
                    const isMonteDago = room.indirizzo.includes('Brecce') || room.id.includes('montedago');
                    const isTorrette = room.indirizzo.includes('Conca') || room.id.includes('torrette');
                    const isVillarey = room.indirizzo.includes('Martelli') || room.id.includes('villarey');
                    const isAscoli = room.indirizzo.includes('Ascoli') || room.id.includes('ascoli');
                    const month = new Date().getMonth();
                    const isWinter = [10, 11, 0, 1, 2].includes(month);
                    return (
                        <>
                            {isMonteDago && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="bus-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>Prendi il Bus 1/4 (Uno-Quarto): è l'arteria vitale per Monte Dago.</Text>
                                </View>
                            )}
                            {isMonteDago && isWinter && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0f9ff', borderColor: '#bae6fd', marginTop: 12 }]}>
                                    <Ionicons name="thermometer-outline" size={24} color="#0284c7" />
                                    <Text style={[styles.infoBoxText, { color: '#0284c7' }]}>High Wind Warning: Monte Dago è molto esposto. Copriti bene alla fermata del bus!</Text>
                                </View>
                            )}
                            {isTorrette && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff1f2', borderColor: '#fecdd3' }]}>
                                    <Ionicons name="medical-outline" size={24} color="#be123c" />
                                    <Text style={[styles.infoBoxText, { color: '#be123c' }]}>Sei dentro l'Ospedale Regionale. Schiscetta consigliata (o mensa ospedaliera).</Text>
                                </View>
                            )}
                            {isVillarey && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="rose-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>Polo Economia: goditi il chiostro storico e la vicinanza al centro per l'aperitivo.</Text>
                                </View>
                            )}
                            {isAscoli && (
                                <View style={[styles.infoBox, { backgroundColor: '#fffbeb', borderColor: '#fef3c7' }]}>
                                    <Ionicons name="construct-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>Vibe Artistica: qui trovi laboratori per plastici e modelli fisici.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '').toLowerCase();
                    if (uni !== 'uniurb') return null;
                    const isCentro = room.indirizzo.includes('Urbino') && !room.indirizzo.includes('Cappuccini') && !room.indirizzo.includes('Crocicchia');
                    const isCollegi = room.indirizzo.includes('Cappuccini') || room.id.includes('collegi');
                    const isScientifico = room.indirizzo.includes('Crocicchia') || room.id.includes('scientifico');
                    const isFano = room.indirizzo.includes('Fano') || room.id.includes('fano');
                    const month = new Date().getMonth();
                    const isWinter = [10, 11, 0, 1, 2].includes(month);
                    return (
                        <>
                            {isCentro && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="alert-circle-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>No Train Alert: Urbino non ha stazione. Usa il Bus Adriabus (Fast da Pesaro/Fano).</Text>
                                </View>
                            )}
                            {isCentro && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0', marginTop: 12 }]}>
                                    <Ionicons name="arrow-up-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>Verticalità: usa gli ascensori di Borgo Mercatale per salire in Piazza Repubblica senza fatica.</Text>
                                </View>
                            )}
                            {isCollegi && (
                                <View style={[styles.infoBox, { backgroundColor: '#fdf2f8', borderColor: '#fbcfe8' }]}>
                                    <Ionicons name="people-outline" size={24} color="#db2777" />
                                    <Text style={[styles.infoBoxText, { color: '#db2777' }]}>Community Vibe: i Collegi De Carlo sono un'esperienza di studio e vita unica. Vista tramonto top.</Text>
                                </View>
                            )}
                            {isFano && (
                                <View style={[styles.infoBox, { backgroundColor: '#ecfeff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="library-outline" size={24} color="#0ea5e9" />
                                    <Text style={[styles.infoBoxText, { color: '#0ea5e9' }]}>MeMo Fano: studia tra le rovine romane in una mediateca super moderna.</Text>
                                </View>
                            )}
                            {isWinter && (
                                <View style={[styles.infoBox, { backgroundColor: '#eef2ff', borderColor: '#c7d2fe', marginTop: 12 }]}>
                                    <Ionicons name="snow-outline" size={24} color="#4f46e5" />
                                    <Text style={[styles.infoBoxText, { color: '#4f46e5' }]}>Snow Alert: in caso di neve, controlla la pagina Adriabus per ritardi/sospensioni.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '').toLowerCase();
                    if (uni !== 'unimc') return null;
                    const isMacerataCentro = room.indirizzo.includes('Macerata') || room.id.includes('unimc');
                    const isBMB = room.id.includes('mozzi_borgetti');
                    const isCASB = room.id.includes('casb');
                    const isPantaleoni = room.id.includes('pantaleoni');
                    const isCivitanova = room.indirizzo.includes('Civitanova');
                    const isThursday = new Date().getDay() === 4;
                    return (
                        <>
                            {isMacerataCentro && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="cafe-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>Umanista Vibe: goditi una pausa caffè in Piazza della Libertà tra una sessione e l'altra.</Text>
                                </View>
                            )}
                            {isCASB && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe', marginTop: 12 }]}>
                                    <Ionicons name="people-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>Hub Moderno: il CASB è il posto perfetto per lavori di gruppo e socialità (al piano terra).</Text>
                                </View>
                            )}
                            {isBMB && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa', marginTop: 12 }]}>
                                    <Ionicons name="library-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>Tempio del Silenzio: la Mozzi Borgetti è l'ideale per il deep work immersi nella storia.</Text>
                                </View>
                            )}
                            {isMacerataCentro && (
                                <View style={[styles.infoBox, { backgroundColor: '#f5f3ff', borderColor: '#ddd6fe', marginTop: 12 }]}>
                                    <Ionicons name="arrow-up-outline" size={24} color="#7c3aed" />
                                    <Text style={[styles.infoBoxText, { color: '#7c3aed' }]}>Verticalità: usa gli ascensori di Viale Trieste (dietro lo Sferisterio) per evitare le Piagge.</Text>
                                </View>
                            )}
                            {isCivitanova && (
                                <View style={[styles.infoBox, { backgroundColor: '#ecfeff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="boat-outline" size={24} color="#0ea5e9" />
                                    <Text style={[styles.infoBoxText, { color: '#0ea5e9' }]}>Base Logistica: la Zavatti è comodissima se vivi sulla costa e fai il pendolare col treno.</Text>
                                </View>
                            )}
                            {isPantaleoni && isThursday && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef3c7', borderColor: '#fcd34d', marginTop: 12 }]}>
                                    <Ionicons name="sparkles-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>Giovedì Universitario: il Polo Pantaleoni vive la sua serata clou. Preparati a un po' di fermento!</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '').toLowerCase();
                    if (uni !== 'unicam') return null;
                    const isCamerino = room.indirizzo.includes('Camerino') || room.id.includes('unicam');
                    const isAscoli = room.indirizzo.includes('Ascoli') || room.id.includes('ascoli');
                    const isMatelica = room.indirizzo.includes('Matelica') || room.id.includes('matelica');
                    const month = new Date().getMonth();
                    const isWinter = [10, 11, 0, 1, 2].includes(month);
                    return (
                        <>
                            {isCamerino && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="people-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>Resilienza & Comunità: il Polo degli Studenti è l'hub dove batte il cuore di UniCam.</Text>
                                </View>
                            )}
                            {isCamerino && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe', marginTop: 12 }]}>
                                    <Ionicons name="bus-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>Contram Switch: scendi a Castelraimondo e prendi subito il bus Contram per Camerino centro.</Text>
                                </View>
                            )}
                            {isAscoli && (
                                <View style={[styles.infoBox, { backgroundColor: '#f5f3ff', borderColor: '#ddd6fe' }]}>
                                    <Ionicons name="color-palette-outline" size={24} color="#7c3aed" />
                                    <Text style={[styles.infoBoxText, { color: '#7c3aed' }]}>SAD Excellence: la sede Annunziata è il top per i creativi, con tavoli da disegno ampi.</Text>
                                </View>
                            )}
                            {isMatelica && (
                                <View style={[styles.infoBox, { backgroundColor: '#ecfeff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="paw-outline" size={24} color="#0ea5e9" />
                                    <Text style={[styles.infoBoxText, { color: '#0ea5e9' }]}>Matelica-Camerino: calcola bene i tempi di spostamento tra le due sedi (ca. 20 min auto/bus).</Text>
                                </View>
                            )}
                            {isWinter && isCamerino && (
                                <View style={[styles.infoBox, { backgroundColor: '#eef2ff', borderColor: '#c7d2fe', marginTop: 12 }]}>
                                    <Ionicons name="snow-outline" size={24} color="#4f46e5" />
                                    <Text style={[styles.infoBoxText, { color: '#4f46e5' }]}>Snow Alert: Camerino è a 700m. In inverno controlla il meteo prima di salire!</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '').toUpperCase();
                    if (uni !== 'AFAM') return null;
                    const isISIA = room.id.includes('isia');
                    const isRossini = room.id.includes('rossini');
                    const isMacerata = room.id.includes('aba_macerata') || room.id.includes('macerata_mozzi');
                    const isUrbino = room.indirizzo.includes('Urbino');
                    const isAncona = room.id.includes('poliarte');
                    const isSummer = new Date().getMonth() >= 5 && new Date().getMonth() <= 7;
                    return (
                        <>
                            {isISIA && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="brush-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>Graphic Design Hub: l'ISIA è una comunità creativa d'eccellenza. Mac Lab e stamperia top.</Text>
                                </View>
                            )}
                            {isRossini && isSummer && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef3c7', borderColor: '#fcd34d' }]}>
                                    <Ionicons name="musical-notes-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>ROF Alert: durante il Rossini Opera Festival la città è in fermento. Atmosfera magica ma aule piene!</Text>
                                </View>
                            )}
                            {isMacerata && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="color-palette-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>Macerata Mixed: l'Accademia e UniMC condividono spesso gli spazi. La BMB è il terreno ideale.</Text>
                                </View>
                            )}
                            {isUrbino && (
                                <View style={[styles.infoBox, { backgroundColor: '#f5f3ff', borderColor: '#ddd6fe', marginTop: 12 }]}>
                                    <Ionicons name="briefcase-outline" size={24} color="#7c3aed" />
                                    <Text style={[styles.infoBoxText, { color: '#7c3aed' }]}>Art Logistics: se hai cartelle giganti o strumenti, chiedi all'autista dell'Adriabus di aprire il bagagliaio.</Text>
                                </View>
                            )}
                            {isAncona && (
                                <View style={[styles.infoBox, { backgroundColor: '#ecfeff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="construct-outline" size={24} color="#0ea5e9" />
                                    <Text style={[styles.infoBoxText, { color: '#0ea5e9' }]}>Industrial Pragmatism: Poliarte è moderna e funzionale, in una zona di snodo facile da raggiungere.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '');
                    const isUniBa = room.id.startsWith('uniba_') || uni.includes('UniBa');
                    if (!isUniBa) return null;
                    const isCentro = room.indirizzo.includes('Umberto') || room.indirizzo.includes('Battisti') || room.indirizzo.includes('Torretta');
                    const isCampus = room.indirizzo.includes('Orabona') || room.indirizzo.includes('Amendola');
                    const isPoliclinico = room.indirizzo.includes('Giulio Cesare');
                    const isTaranto = room.indirizzo.includes('Taranto') || uni.includes('Taranto');
                    const isValenzano = room.indirizzo.includes('Valenzano');
                    return (
                        <>
                            {isCentro && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef3c7', borderColor: '#fcd34d' }]}>
                                    <Ionicons name="sunny-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>Campus a cielo aperto: Piazza Umberto I è il crocevia degli studenti di giorno. Panchine, pendolari, vita universitaria. La sera può essere caotica.</Text>
                                </View>
                            )}
                            {isCentro && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa', marginTop: 12 }]}>
                                    <Ionicons name="pizza-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>Carburante Universitario: Via Nicolai/Via Crispi hanno i panifici storici. Panificio Fiore e Magda per la migliore focaccia barese e panzerotti.</Text>
                                </View>
                            )}
                            {isTaranto && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="boat-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>Studio nell'Isola: chiostri dell'ex convento con il Mar Ionio da due lati. Esperienza unica. L'isola sta vivendo una forte riqualificazione studentesca.</Text>
                                </View>
                            )}
                            {isTaranto && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff1f2', borderColor: '#fecdd3', marginTop: 12 }]}>
                                    <Ionicons name="warning-outline" size={24} color="#be123c" />
                                    <Text style={[styles.infoBoxText, { color: '#be123c' }]}>Viabilità complessa: la Città Vecchia è un'isola. Parcheggia nella città nuova e prosegui a piedi o con bus Kyma.</Text>
                                </View>
                            )}
                            {isCampus && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="bus-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>Navette Ufficiose: Bus AMTAB 21 e 22 sono le linee degli studenti per il Campus. Frequenti dal centro.</Text>
                                </View>
                            )}
                            {isPoliclinico && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0f9ff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="train-outline" size={24} color="#0284c7" />
                                    <Text style={[styles.infoBoxText, { color: '#0284c7' }]}>FSE Pendolari: Le Ferrovie Sud Est hanno una fermata comodissima per chi fa il pendolare dai paesi limitrofi. Metro L1 fermata "Policlinico" diretta.</Text>
                                </View>
                            )}
                            {isValenzano && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="car-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>Polo Isolato: Valenzano è fuori Bari. Auto fortemente consigliata, oppure bus extraurbano Cotrap/FSE.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '');
                    const isPoliBa = room.id.startsWith('poliba_') || uni.includes('PoliBa');
                    if (!isPoliBa) return null;
                    const isBariCampus = room.indirizzo.includes('Orabona');
                    const isTarantoPaoloVI = room.indirizzo.includes('Turismo') || room.indirizzo.includes('Paolo VI');
                    const isTarantoCittaVecchia = room.indirizzo.includes('Città Vecchia');
                    const isDICAR = room.nome.includes('DICAR') || room.nome.includes('Architettura');
                    const isCaianiello = room.nome.includes('Caianiello');
                    const hasPreseCablate = room.servizi.some((s: string) => s.toLowerCase().includes('prese cablate'));
                    const hasTavoliGrandi = room.servizi.some((s: string) => s.toLowerCase().includes('tavoli grandi'));
                    return (
                        <>
                            {isCaianiello && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff1f2', borderColor: '#fecdd3' }]}>
                                    <Ionicons name="warning-outline" size={24} color="#be123c" />
                                    <Text style={[styles.infoBoxText, { color: '#be123c' }]}>⚠️ Ansia da Sessione: La Caianiello si riempie prima delle 9:00 sotto sessione. Arrivo presto o cerca alternative (Corpo O, DMMM).</Text>
                                </View>
                            )}
                            {isDICAR && hasTavoliGrandi && (
                                <View style={[styles.infoBox, { backgroundColor: '#fdf4ff', borderColor: '#f5d0fe' }]}>
                                    <Ionicons name="resize-outline" size={24} color="#a21caf" />
                                    <Text style={[styles.infoBoxText, { color: '#a21caf' }]}>📐 Architetti Alert: Tavoli extra-large per tavole A0, plastici e modellini. Se porti il tubo portadisegni, questo è il tuo posto.</Text>
                                </View>
                            )}
                            {hasPreseCablate && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="flash" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>⚡ Survival Mode: Prese cablate disponibili! Al PoliBa nessuno studia senza laptop alimentato — qui sei al sicuro.</Text>
                                </View>
                            )}
                            {isTarantoPaoloVI && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="car-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>🚗 Attenzione: Questo polo è nel Quartiere Paolo VI, fuori dal centro città. Mezzo proprio consigliato. La buona notizia? Parcheggio immenso e gratuito.</Text>
                                </View>
                            )}
                            {isTarantoCittaVecchia && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="boat-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>🏛️ Fascino Storico: Studi Restauro tra le mura del borgo antico. Parcheggia nella città nuova e prosegui a piedi via Ponte Girevole.</Text>
                                </View>
                            )}
                            {isBariCampus && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0f9ff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="bus-outline" size={24} color="#0284c7" />
                                    <Text style={[styles.infoBoxText, { color: '#0284c7' }]}>🚌 Campus PoliBa: Bus AMTAB 21 e 22 sono le linee degli studenti. Parcheggio in zona è controllato e difficile — meglio i mezzi o la bici.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '');
                    const isUniSalento = room.id.startsWith('unisalento_') || room.id.startsWith('lecce_') || uni.includes('UniSalento');
                    if (!isUniSalento) return null;
                    const isEcotekne = room.indirizzo.includes('Monteroni') || room.indirizzo.includes('Ecotekne') || uni.includes('Ecotekne');
                    const isCentro = room.indirizzo.includes('Valesio') || room.indirizzo.includes('San Nicola') || room.indirizzo.includes('Università') || room.id.includes('bernardini');
                    const isBrindisi = room.indirizzo.includes('Brindisi') || room.indirizzo.includes('Appia');
                    const isBernardini = room.id.includes('bernardini');
                    const hasAC = room.servizi.some((s: string) => s.toLowerCase().includes('aria condizionata'));
                    const isOutdoor = room.tags?.includes('Outdoor');
                    return (
                        <>
                            {isEcotekne && !isOutdoor && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="bus-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>🚌 Il Leggendario Bus 27: La linea SGM 27 (e la 27 Express) collega il centro al Campus Ecotekne. Negli orari di punta (8:30 e 13:30) è preso d'assalto — parti presto!</Text>
                                </View>
                            )}
                            {hasAC && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="snow-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>❄️ Aria Condizionata Garantita: Da maggio a settembre questo è IL fattore decisivo per la scelta dell'aula. L'Ecotekne d'estate è una spianata rovente — qui sei al fresco.</Text>
                                </View>
                            )}
                            {isOutdoor && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="sunny-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>☀️ Attenzione Caldo: L'Ecotekne è una spianata d'asfalto e pini. A giugno-luglio fa MOLTO caldo. Porta acqua e crema solare se studi all'aperto.</Text>
                                </View>
                            )}
                            {isCentro && !isBernardini && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef3c7', borderColor: '#fcd34d' }]}>
                                    <Ionicons name="restaurant-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>🥐 Pausa Rustico: Sei nel cuore barocco di Lecce! A due passi trovi forni e rosticcerie storiche per il rituale del Rustico leccese (sfoglia, besciamella, pomodoro, mozzarella). Imperdibile.</Text>
                                </View>
                            )}
                            {isBernardini && (
                                <View style={[styles.infoBox, { backgroundColor: '#fdf4ff', borderColor: '#f5d0fe' }]}>
                                    <Ionicons name="library-outline" size={24} color="#a21caf" />
                                    <Text style={[styles.infoBoxText, { color: '#a21caf' }]}>📚 Hub Alternativo: La Bernardini è la civica "requisita" dagli universitari. Perfetta per chi non vuole prendere il Bus 27 nei giorni senza lezioni all'Ecotekne. Orario esteso fino alle 20.</Text>
                                </View>
                            )}
                            {isBernardini && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef3c7', borderColor: '#fcd34d', marginTop: 12 }]}>
                                    <Ionicons name="restaurant-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>🥐 Zona Rustico: Piazzetta Carducci è nel cuore della movida leccese. Il Rustico è a portata di mano a ogni pausa studio.</Text>
                                </View>
                            )}
                            {isBrindisi && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="car-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>🚗 Sede Isolata: La Cittadella della Ricerca è sulla SS7 Appia, fuori città. Auto o bus extraurbano STP consigliati. Parcheggio interno sconfinato.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '');
                    const isUniFg = room.id.startsWith('unifg_') || room.id.startsWith('fg_') || uni.includes('UniFg');
                    if (!isUniFg) return null;
                    const isCentroStorico = room.indirizzo.includes('Arpi');
                    const isSemiCentro = room.indirizzo.includes('Papa Giovanni') || room.indirizzo.includes('Caggese') || room.id.includes('magna_capitana');
                    const isPeriferia = room.indirizzo.includes('Napoli') || room.indirizzo.includes('Pinto');
                    const isMagnaCapitana = room.id.includes('magna_capitana');
                    const isDAFNE = room.id.includes('agraria') || room.nome.includes('DAFNE');
                    const isBiomedico = room.id.includes('biomedico');
                    const isBarletta = room.indirizzo.includes('Barletta');
                    const isDistaccata = uni.includes('-');
                    const isOutdoor = room.tags?.includes('Outdoor');
                    const hasLavoroGruppo = room.servizi.some((s: string) => s.toLowerCase().includes('lavoro di gruppo') || s.toLowerCase().includes('group work'));
                    const isSilenzioTombale = room.id.includes('giurisprudenza');
                    return (
                        <>
                            {isMagnaCapitana && (
                                <View style={[styles.infoBox, { backgroundColor: '#fdf4ff', borderColor: '#f5d0fe' }]}>
                                    <Ionicons name="library-outline" size={24} color="#a21caf" />
                                    <Text style={[styles.infoBoxText, { color: '#a21caf' }]}>🏦 Hub Cittadino: La Magna Capitana è uno dei centri culturali più grandi del Sud Italia — 500 posti! Usata al 90% da universitari quando Giurisprudenza ed Economia sono piene. La tua prima alternativa.</Text>
                                </View>
                            )}
                            {isSilenzioTombale && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="volume-mute-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>🔇 Silenzio Tombale: Giurisprudenza richiede concentrazione assoluta. Per lavori di gruppo, meglio Economia (Via Caggese) a pochi passi, dove il chiacchiericcio a bassa voce è tollerato.</Text>
                                </View>
                            )}
                            {hasLavoroGruppo && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="people-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>👥 Lavoro di Gruppo OK: Questa sala è più tollerante al chiacchiericcio. Ideale per progetti di gruppo e studio collaborativo.</Text>
                                </View>
                            )}
                            {isOutdoor && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="thunderstorm-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>💨 Vento di Foggia: La città è nota per il Maestrale. Nelle giornate ventose, gli spazi outdoor sono sconsigliati — meglio ripararsi nelle aule interne.</Text>
                                </View>
                            )}
                            {isDAFNE && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="leaf-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>🌾 Eccellenza Agraria: Il DAFNE è il fiore all'occhiello di UniFg, legato al Tavoliere (il granaio d'Italia). Aule adiacenti a laboratori di analisi sensoriale e serre. Tranquillità e aree verdi reali.</Text>
                                </View>
                            )}
                            {isBiomedico && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="flash" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>🆕 Polo Nuovo: Struttura moderna con prese funzionanti ovunque. Divide i flussi dal Policlinico — alternativa fresca per biologi e professioni sanitarie, a pochi metri da Agraria.</Text>
                                </View>
                            )}
                            {(isCentroStorico || isSemiCentro) && !isMagnaCapitana && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef3c7', borderColor: '#fcd34d' }]}>
                                    <Ionicons name="restaurant-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>🥖 Pausa Focaccia: Sei nel cuore di Foggia! La pausa studio si fa con la focaccia foggiana o il calzone con gli sponsali. Forni storici a ogni angolo tra Via Arpi e Largo Papa Giovanni.</Text>
                                </View>
                            )}
                            {isBarletta && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0f9ff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="train-outline" size={24} color="#0284c7" />
                                    <Text style={[styles.infoBoxText, { color: '#0284c7' }]}>🚂 Hub BAT: La Stazione FS di Barletta è a pochi minuti a piedi. Trenitalia e Ferrotramviaria (linea Bari-Barletta) — evita il viaggio fino a Foggia!</Text>
                                </View>
                            )}
                            {isDistaccata && !isBarletta && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="map-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>📍 Polo Distaccato: Sede territoriale raggiungibile con treno regionale o bus extraurbano. Ideale per pendolari locali.</Text>
                                </View>
                            )}
                            {isPeriferia && (
                                <View style={[styles.infoBox, { backgroundColor: '#f1f5f9', borderColor: '#e2e8f0' }]}>
                                    <Ionicons name="car-outline" size={24} color="#475569" />
                                    <Text style={[styles.infoBoxText, { color: '#475569' }]}>🏫 Zona Periferica: Atmosfera da polo tecnologico — ampi spazi, serre, parcheggi. Mondo diverso dal centro storico. Auto consigliata.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '');
                    const isAFAMPuglia = (room.id.startsWith('aba_') || room.id.startsWith('cons_')) && (uni.includes('AFAM') || uni.includes('Cons.'));
                    if (!isAFAMPuglia) return null;
                    const isConservatorio = room.id.startsWith('cons_') || uni.includes('Cons.');
                    const isAccademia = room.id.startsWith('aba_');
                    const hasSporco = room.servizi.some((s: string) => s.toLowerCase().includes('sporco tollerato'));
                    const hasTavoliGrandi = room.servizi.some((s: string) => s.toLowerCase().includes('tavoli grandi'));
                    const hasSaleProva = room.servizi.some((s: string) => s.toLowerCase().includes('sale prova'));
                    const isLecce = uni.includes('Lecce');
                    const isTaranto = uni.includes('Taranto');
                    const isMonopoli = uni.includes('Monopoli');
                    const isPiccinni = room.id.includes('piccinni');
                    return (
                        <>
                            {hasSporco && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef3c7', borderColor: '#fcd34d' }]}>
                                    <Ionicons name="brush-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>🧱 Sporco Tollerato: Qui si lavora con gesso, creta e colori a olio. Niente salotti foderati — puoi macchiare liberamente. Porta il grembiule ma non la paura!</Text>
                                </View>
                            )}
                            {hasTavoliGrandi && (
                                <View style={[styles.infoBox, { backgroundColor: '#fdf4ff', borderColor: '#f5d0fe' }]}>
                                    <Ionicons name="resize-outline" size={24} color="#a21caf" />
                                    <Text style={[styles.infoBoxText, { color: '#a21caf' }]}>📐 Srotolamento Progetti: Tavoli extra-large per scenografi e architetti. Perfetti per tavole A0, plastici, storyboard e progetti di grande formato.</Text>
                                </View>
                            )}
                            {isPiccinni && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff1f2', borderColor: '#fecdd3' }]}>
                                    <Ionicons name="musical-notes-outline" size={24} color="#be123c" />
                                    <Text style={[styles.infoBoxText, { color: '#be123c' }]}>🎹 Guerra del Pianoforte: Al Piccinni la lotta per un'aula con pianoforte è feroce. Le sale prova sono prenotabili — consulta il sistema di prenotazione dell'istituto in anticipo!</Text>
                                </View>
                            )}
                            {hasSaleProva && !isPiccinni && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="musical-notes-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>🎵 Sale Prova: Spazi insonorizzati disponibili per la pratica strumentale. Qui non cerchi il silenzio — cerchi il rumore giusto!</Text>
                                </View>
                            )}
                            {isConservatorio && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="headset-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>🎧 Rumore Necessario: Al conservatorio non si cerca il silenzio, si cercano le Sale Prova. Le postazioni d'ascolto sono fondamentali per lo studio di partitura e armonia.</Text>
                                </View>
                            )}
                            {isAccademia && !hasSporco && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="book-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>🎨 Studio Teorico: Questa è una sala dedicata allo studio teorico e alla consultazione. Per il lavoro con materiali (gesso, creta, colori) cerca gli spazi "Sporco Tollerato".</Text>
                                </View>
                            )}
                            {isLecce && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="time-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>⚠️ Orario Ridotto: L'ABA Lecce ha orari corti (biblioteca chiude alle 14!). Verifica sempre prima di uscire. Il chiostro ha orari più estesi.</Text>
                                </View>
                            )}
                            {isTaranto && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="boat-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>🏛️ Città Vecchia: Il Conservatorio Paisiello è sull'isola storica. Attraversa il Ponte Girevole ed entra nei vicoli — auto sconsigliata, parcheggia nella città nuova.</Text>
                                </View>
                            )}
                            {isMonopoli && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0f9ff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="water-outline" size={24} color="#0284c7" />
                                    <Text style={[styles.infoBoxText, { color: '#0284c7' }]}>🌊 Vista Mare: Il Conservatorio Rota è un gioiello affacciato sull'Adriatico. Fondi del Maestro Nino Rota — vale il viaggio da solo!</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '').toLowerCase();
                    const isUniCa = uni.includes('unica') || room.id.startsWith('unica_');
                    if (!isUniCa) return null;
                    const isMonserrato = room.id.includes('monserrato') || room.indirizzo.includes('Monserrato');
                    const isSaDuchessa = room.id.includes('saduchessa');
                    const isEconomicaGiuridica = room.indirizzo.includes('Ignazio');
                    const isArchitettura = room.id.includes('architettura') || room.indirizzo.includes('Croce');
                    const isNuoroOristano = room.indirizzo.includes('Nuoro') || room.indirizzo.includes('Oristano');
                    return (
                        <>
                            {isMonserrato && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0f9ff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="train-outline" size={24} color="#0284c7" />
                                    <Text style={[styles.infoBoxText, { color: '#0284c7' }]}>MetroCagliari: La Linea 1 della metro leggera ti lascia letteralmente dentro la Cittadella. Ideale per evitare il traffico della SS554.</Text>
                                </View>
                            )}
                            {isSaDuchessa && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa', marginTop: isMonserrato ? 12 : 0 }]}>
                                    <Ionicons name="walk-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>Salita Sa Duchessa: Piazza d'Armi è in cima a una collina. Prendi il bus CTM 8 dal centro per salvarti la scalata!</Text>
                                </View>
                            )}
                            {isEconomicaGiuridica && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef3c7', borderColor: '#fcd34d', marginTop: (isMonserrato || isSaDuchessa) ? 12 : 0 }]}>
                                    <Ionicons name="car-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>Parcheggio Impossibile: Trovare posto in Viale Sant'Ignazio dopo le 8:15 è una missione fallimentare. Vieni in bus (linea 8 o 5).</Text>
                                </View>
                            )}
                            {isArchitettura && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="camera-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>Vista Mozzafiato: Sei nel cuore di Castello. Nelle pause studio goditi il panorama dal Bastione di Santa Croce.</Text>
                                </View>
                            )}
                            {isNuoroOristano && (
                                <View style={[styles.infoBox, { backgroundColor: '#f8fafc', borderColor: '#cbd5e1' }]}>
                                    <Ionicons name="map-outline" size={24} color="#475569" />
                                    <Text style={[styles.infoBoxText, { color: '#475569' }]}>Polo Territoriale: Hub decentrato fondamentale per il centro Sardegna. Atmosfera molto più intima rispetto ai grandi poli cagliaritani.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '').toLowerCase();
                    const isUniSS = uni.includes('uniss') || room.id.startsWith('uniss_') || uni.includes('sironi') || uni.includes('canepa') || uni.includes('olbia') || uni.includes('nuoro') || uni.includes('uno');
                    if (!isUniSS) return null;
                    const isSassariCentro = room.indirizzo.includes('Sassari') && !room.indirizzo.includes('Piandanna') && !uni.includes('sironi') && !uni.includes('canepa');
                    const isPiandanna = room.indirizzo.includes('Piandanna');
                    const isVeterinaria = room.id.includes('veterinaria');
                    const isAlghero = room.id.includes('alghero') && !room.id.includes('asilo_sella_open');
                    const isOlbia = room.id.includes('olbia');
                    const isSironi = uni.includes('sironi') || room.id.startsWith('aba_sironi');
                    const hasSporco = room.servizi?.some((s: string) => s.toLowerCase().includes('sporco tollerato'));
                    const isAsiloSellaOpen = room.id.includes('asilo_sella_open');

                    return (
                        <>
                            {isSironi && hasSporco && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef3c7', borderColor: '#fcd34d' }]}>
                                    <Ionicons name="brush-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>🧱 Sporco Tollerato: Laboratorio operativo dell'Accademia Sironi. Odore di trementina e creta. Niente salotti foderati — puoi macchiare liberamente!</Text>
                                </View>
                            )}
                            {isSironi && !hasSporco && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="book-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>🎨 Studio Teorico: Attenzione, in Biblioteca Sironi si consulta solo la teoria. Per lavorare con gesso o colori, spostati nei laboratori "Sporco Tollerato".</Text>
                                </View>
                            )}
                            {isAsiloSellaOpen && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff1f2', borderColor: '#fecdd3' }]}>
                                    <Ionicons name="time-outline" size={24} color="#be123c" />
                                    <Text style={[styles.infoBoxText, { color: '#be123c' }]}>🌙 Orario "Fuori Controllo": L'Open Space dell'Asilo Sella è noto per ignorare gli orari di chiusura sotto consegna. Spesso gli studenti autogestiscono lo spazio fino a tarda notte.</Text>
                                </View>
                            )}
                            {isSassariCentro && (
                                <View style={[styles.infoBox, { backgroundColor: '#f5f3ff', borderColor: '#ddd6fe', marginTop: (isSironi || isAsiloSellaOpen) ? 12 : 0 }]}>
                                    <Ionicons name="train-outline" size={24} color="#7c3aed" />
                                    <Text style={[styles.infoBoxText, { color: '#7c3aed' }]}>Metro Sirio: I poli umanistici/giuridici e le cliniche sono serviti benissimo dalla metropolitana di superficie di Sassari.</Text>
                                </View>
                            )}
                            {isPiandanna && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0', marginTop: (isSassariCentro || isSironi || isAsiloSellaOpen) ? 12 : 0 }]}>
                                    <Ionicons name="leaf-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>Campus nel Verde: Piandanna è isolata dal traffico cittadino. Ci sono grandi parcheggi, ottima se vieni in auto.</Text>
                                </View>
                            )}
                            {isVeterinaria && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff1f2', borderColor: '#fecdd3', marginTop: (isSassariCentro || isPiandanna || isSironi || isAsiloSellaOpen) ? 12 : 0 }]}>
                                    <Ionicons name="paw-outline" size={24} color="#be123c" />
                                    <Text style={[styles.infoBoxText, { color: '#be123c' }]}>Eccellenza Med-Vet: Sei in uno dei poli storici e più rinomati in Italia per Medicina Veterinaria.</Text>
                                </View>
                            )}
                            {isAlghero && (
                                <View style={[styles.infoBox, { backgroundColor: '#ecfeff', borderColor: '#bae6fd', marginTop: (isSassariCentro || isPiandanna || isVeterinaria || isSironi || isAsiloSellaOpen) ? 12 : 0 }]}>
                                    <Ionicons name="color-palette-outline" size={24} color="#0ea5e9" />
                                    <Text style={[styles.infoBoxText, { color: '#0ea5e9' }]}>Dipartimento di Architettura: Vivi gli spazi storici di Alghero (Asilo Sella, Santa Chiara). Maestrale permettendo!</Text>
                                </View>
                            )}
                            {isOlbia && (
                                <View style={[styles.infoBox, { backgroundColor: '#fefce8', borderColor: '#fef08a', marginTop: (isSassariCentro || isPiandanna || isVeterinaria || isAlghero || isSironi || isAsiloSellaOpen) ? 12 : 0 }]}>
                                    <Ionicons name="airplane-outline" size={24} color="#a16207" />
                                    <Text style={[styles.infoBoxText, { color: '#a16207' }]}>Polo Aeroportuale UniOlbia: Unico in Italia! Studia direttamente guardando i jet sulla pista dell'Aeroporto Costa Smeralda.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {/* TOSCANA (UniFi & UniPi) InfoBoxes */}
                {(() => {
                    const uni = (room.university || '').toLowerCase();
                    const id = room.id.toLowerCase();
                    const isUniFi = uni.includes('unifi') || id.startsWith('unifi_') || uni.includes('firenze');
                    const isUniPi = uni.includes('unipi') || id.startsWith('unipi_') || uni.includes('pisa');

                    const isNovoli = id.includes('novoli');
                    const isSesto = id.includes('sesto');
                    const isMorgagni = id.includes('careggi') || id.includes('morgagni');
                    const isCentroFi = id.includes('brunelleschi') || id.includes('capponi') || id.includes('architettura') || id.includes('mensa_apollonia');

                    if (!isUniFi && !isUniPi) return null;

                    return (
                        <>
                            {isUniFi && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0f9ff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="train-outline" size={24} color="#0284c7" />
                                    <Text style={[styles.infoBoxText, { color: '#0284c7' }]}>TRAM-SYNC Firenze: Le aule fiorentine sono perfettamente collegate dalle linee T1 e T2 della Tranvia (Gest). Evita l'auto, il centro è Off-Limits!</Text>
                                </View>
                            )}
                            {isUniFi && isNovoli && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef2f2', borderColor: '#fecaca', marginTop: 12 }]}>
                                    <Ionicons name="business-outline" size={24} color="#dc2626" />
                                    <Text style={[styles.infoBoxText, { color: '#dc2626' }]}>Campus Novoli: Il polo di Scienze Sociali più grande di UniFi. La biblioteca D10 è presa d'assalto in sessione, arriva presto!</Text>
                                </View>
                            )}
                            {isUniFi && isSesto && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0', marginTop: 12 }]}>
                                    <Ionicons name="flask-outline" size={24} color="#16a34a" />
                                    <Text style={[styles.infoBoxText, { color: '#16a34a' }]}>Polo Scientifico (Sesto F.): Fuori Firenze, ampi spazi verdi e dipartimenti moderni. Ideale se ami la tranquillità fuggendo dal caos cittadino.</Text>
                                </View>
                            )}
                            {isUniFi && isCentroFi && (
                                <View style={[styles.infoBox, { backgroundColor: '#fefce8', borderColor: '#fef08a', marginTop: 12 }]}>
                                    <Ionicons name="color-palette-outline" size={24} color="#ca8a04" />
                                    <Text style={[styles.infoBoxText, { color: '#ca8a04' }]}>Centro Storico: Studia tra i palazzi rinascimentali del Brunelleschi. Attenzione, le biblioteche umanistiche chiudono spesso alle 19:00.</Text>
                                </View>
                            )}
                            {isUniFi && isMorgagni && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe', marginTop: 12 }]}>
                                    <Ionicons name="medkit-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>Area Biomedica e STEM: Tra Careggi e Morgagni si concentrano i futuri medici, biologi e ingegneri. Fermata T1 Morgagni a due passi!</Text>
                                </View>
                            )}

                            {isUniPi && isRainy && !weatherLoading && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="rainy-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>METEO-BICI Attivo: A Pisa sta piovendo! Lascia la bici (il lastricato è scivoloso e la ZTL pericolosa con la pioggia). Le indicazioni sono state aggiornate per consigliarti i bus LAM.</Text>
                                </View>
                            )}
                            {isUniPi && !isRainy && !weatherLoading && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="bicycle-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>METEO-BICI Attivo: Bel tempo a Pisa. Goditi il viaggio in bici (la città è minuscola e pianeggiante)! Le indicazioni premiano la Ciclopi.</Text>
                                </View>
                            )}
                        </>
                    );
                })()}

                {(() => {
                    const uni = (room.university || '');
                    const uniLC = uni.toLowerCase();
                    const ind = (room.indirizzo || '').toLowerCase();
                    const edif = (room.edificio || '').toLowerCase();
                    const id = room.id;
                    const allText = (uni + ' ' + room.indirizzo + ' ' + room.edificio + ' ' + room.nome).toLowerCase();

                    // ======================== LOMBARDIA ========================
                    const isUniMi = id.startsWith('unimi_') || uniLC === 'unimi';
                    const isPoliMi = id.startsWith('polimi_') || uniLC.includes('polimi');
                    const isUniMiB = id.startsWith('unimib_') || uniLC.includes('bicocca');
                    const isUniPV = id.startsWith('unipv_') || uniLC.includes('unipv');
                    const isUniBG = id.startsWith('unibg_') || uniLC.includes('unibg');
                    const isUniBS = id.startsWith('unibs_') || uniLC.includes('unibs');
                    const isInsubria = id.startsWith('uninsubria_') || uniLC.includes('insubria');
                    const isIUSS = id.startsWith('iuss_') || uniLC.includes('iuss');

                    // ======================== LAZIO ========================
                    const isSapienza = id.startsWith('sapienza_') || id.startsWith('sap_') || uniLC.includes('sapienza');
                    const isTorVergata = id.startsWith('torvergata_') || id.startsWith('tv_') || uniLC.includes('tor vergata');
                    const isRomaTre = id.startsWith('romatre_') || id.startsWith('rm3_') || uniLC.includes('roma tre');
                    const isForoItalico = id.startsWith('foro_') || uniLC.includes('foro italico');
                    const isUniTus = id.startsWith('unitus_') || uniLC.includes('unitus');
                    const isUniCas = id.startsWith('unicas_') || uniLC.includes('unicas') || uniLC.includes('cassino');

                    // ======================== EMILIA-ROMAGNA ========================
                    const isUniBo = id.startsWith('unibo_') || uniLC === 'unibo';
                    const isUniFe = id.startsWith('unife_') || uniLC.includes('unife');
                    const isUniMore = id.startsWith('unimore_') || uniLC.includes('unimore');
                    const isUniPr = id.startsWith('unipr_') || uniLC.includes('unipr');

                    // ======================== FVG ========================
                    const isUniTs = id.startsWith('units_') || uniLC.includes('units') || uniLC.includes('trieste');
                    const isUniUd = id.startsWith('uniud_') || uniLC.includes('uniud');
                    const isTriesteElite = id.startsWith('sissa_') || id.startsWith('ictp_') || uniLC.includes('sissa') || uniLC.includes('ictp');

                    // ======================== PIEMONTE ========================
                    const isPoliTo = id.startsWith('polito_') || uniLC.includes('polito');
                    const isUniTo = id.startsWith('unito_') || uniLC === 'unito';
                    const isUPO = id.startsWith('upo_') || uniLC.includes('upo') || uniLC.includes('piemonte orientale');

                    // ======================== MARCHE ========================
                    const isUniVPM = id.startsWith('univpm_') || uniLC.includes('univpm') || uniLC.includes('politecnica');
                    const isUniMC = id.startsWith('unimc_') || uniLC.includes('macerata');
                    const isUniCam = id.startsWith('unicam_') || uniLC.includes('camerino');
                    const isUniUrb = id.startsWith('uniurb_') || uniLC.includes('urbino');

                    // ======================== CALABRIA ========================
                    const isUniCal = id.startsWith('unical_') || uniLC.includes('unical') || uniLC.includes('calabria');
                    const isUMG = id.startsWith('umg_') || uniLC.includes('catanzaro') || uniLC.includes('magna graecia');
                    const isUniRC = id.startsWith('unirc_') || uniLC.includes('mediterranea') || uniLC.includes('reggio');

                    // ======================== CAMPANIA (non-Federico II) ========================
                    const isVanvitelli = id.startsWith('vanvitelli_') || id.startsWith('v_') || uniLC.includes('vanvitelli');
                    const isParthenope = id.startsWith('parthenope_') || uniLC.includes('parthenope');
                    const isOrientale = id.startsWith('orientale_') || uniLC.includes('orientale');
                    const isUniSa = id.startsWith('unisa_') || uniLC.includes('salerno');
                    const isUniSannio = id.startsWith('unisannio_') || uniLC.includes('sannio');
                    const isBenincasa = id.startsWith('benincasa_') || uniLC.includes('benincasa');

                    // ======================== ABRUZZO (non-UniVaq/UniTe/UniMol) ========================
                    const isGSSI = id.startsWith('gssi_') || uniLC.includes('gssi');
                    const isUdA = id.startsWith('uda_') || uniLC.includes('d\'annunzio') || uniLC.includes('chieti');

                    // Skip if already covered by other blocks
                    const isAlreadyCovered =
                        id.startsWith('unimol_') || uniLC === 'unimol' ||
                        id.startsWith('univaq_') || id.startsWith('adsu_') || uniLC === 'univaq' ||
                        id.startsWith('unite_') || uniLC === 'unite' ||
                        id.startsWith('unibas_') || id.includes('potenza_') || id.includes('matera') ||
                        id.startsWith('uniba_') || uniLC.includes('uniba') ||
                        id.startsWith('poliba_') || uniLC.includes('poliba') ||
                        id.startsWith('unisalento_') || id.startsWith('lecce_') || uniLC.includes('unisalento') ||
                        id.startsWith('unifg_') || id.startsWith('fg_') || uniLC.includes('unifg') ||
                        (id.startsWith('aba_') || id.startsWith('cons_')) && (uniLC.includes('afam') || uniLC.includes('cons.')) ||
                        id.startsWith('unina_') ||
                        uniLC === 'afam' || id.startsWith('abaq_') || id.includes('isia');

                    if (isAlreadyCovered) return null;

                    return (
                        <>
                            {/* LOMBARDIA */}
                            {isUniMi && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="subway-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>🚇 Milano Metro: La Statale è nel cuore di Milano. Sedi sparse tra Città Studi (M2 Piola), Centro (M3 Missori) e Bicocca. Metro fondamentale — abbonamento ATM caldamente consigliato.</Text>
                                </View>
                            )}
                            {isPoliMi && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="business-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>🏗️ Campus PoliMi: Leonardo (M2 Piola) è il campus storico, Bovisa (M5 Lilla) quello moderno. Le aule studio si riempiono velocemente durante le sessioni — arriva presto!</Text>
                                </View>
                            )}
                            {isUniMiB && (
                                <View style={[styles.infoBox, { backgroundColor: '#fdf4ff', borderColor: '#f5d0fe' }]}>
                                    <Ionicons name="leaf-outline" size={24} color="#a21caf" />
                                    <Text style={[styles.infoBoxText, { color: '#a21caf' }]}>🌿 Campus Bicocca: Quartiere universitario autosufficiente con edifici moderni. Tutto a portata di mano: biblioteche, mense, bar. Fermata M5 Bicocca o tram 7.</Text>
                                </View>
                            )}
                            {isUniPV && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="school-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>🏛️ Collegi Storici: Pavia ha il sistema dei Collegi universitari più antico d'Italia. Le biblioteche di Collegio sono gioielli nascosti — alcune aperte anche di sera!</Text>
                                </View>
                            )}
                            {isUniBG && (
                                <View style={[styles.infoBox, { backgroundColor: '#ecfdf5', borderColor: '#a7f3d0' }]}>
                                    <Ionicons name="trail-sign-outline" size={24} color="#059669" />
                                    <Text style={[styles.infoBoxText, { color: '#059669' }]}>⛰️ Città Alta vs Bassa: La sede di Ingegneria è in Dalmine (periferia), Umanistica in centro. Per Città Alta usa la funicolare — vale la salita per la vista!</Text>
                                </View>
                            )}
                            {isUniBS && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0f9ff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="subway-outline" size={24} color="#0284c7" />
                                    <Text style={[styles.infoBoxText, { color: '#0284c7' }]}>🚇 Metro Brescia: La metro automatica collega le sedi principali. Fermata "Europa" per campus, "San Faustino" per centro storico. Rapida e comoda!</Text>
                                </View>
                            )}
                            {isInsubria && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="water-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>🏔️ Due Laghi, Due Città: Sedi a Varese e Como — paesaggi mozzafiato ma spostarsi tra le due richiede 40+ minuti in treno. Organizza la giornata per sede!</Text>
                                </View>
                            )}
                            {isIUSS && (
                                <View style={[styles.infoBox, { backgroundColor: '#fdf4ff', borderColor: '#f5d0fe' }]}>
                                    <Ionicons name="diamond-outline" size={24} color="#a21caf" />
                                    <Text style={[styles.infoBoxText, { color: '#a21caf' }]}>💎 Eccellenza: Lo IUSS è una scuola superiore d'eccellenza. Spazi esclusivi e raccolti dentro Palazzo del Maino — un privilegio studiare qui.</Text>
                                </View>
                            )}

                            {/* LAZIO */}
                            {isSapienza && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff1f2', borderColor: '#fecdd3' }]}>
                                    <Ionicons name="map-outline" size={24} color="#be123c" />
                                    <Text style={[styles.infoBoxText, { color: '#be123c' }]}>🗺️ Labirinto Sapienza: La Città Universitaria è enorme (52 edifici!). Usa l'app campus come GPS. Le biblioteche migliori: Alessandrina (centro) e Matematica (silenziosa). M Termini / B Castro Pretorio.</Text>
                                </View>
                            )}
                            {isTorVergata && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="bus-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>🚌 Campus Periferico: Tor Vergata è fuori Roma — usa Metro A Anagnina + bus navetta. Il campus è vasto, porta scarpe comode. Mensa interna essenziale!</Text>
                                </View>
                            )}
                            {isRomaTre && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="train-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>🚉 Zona Ostiense: Roma Tre è concentrata intorno a Via Ostiense. Metro B Basilica S. Paolo e stazione Ostiense. Quartiere vivo con street food e locali studenteschi!</Text>
                                </View>
                            )}
                            {isForoItalico && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="fitness-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>🏟️ Campus Sportivo: Il Foro Italico è un complesso monumentale affacciato sul Tevere. Spazi unici per studiare tra mosaici e impianti olimpici. Tram 2 da Piazzale Flaminio.</Text>
                                </View>
                            )}
                            {isUniTus && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef3c7', borderColor: '#fcd34d' }]}>
                                    <Ionicons name="compass-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>🏰 Viterbo Medievale: Sedi sparse nel centro storico medievale. Atmosfera unica ma orientarsi è un'avventura! Il quartiere San Pellegrino è incantevole per studiare.</Text>
                                </View>
                            )}
                            {isUniCas && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0f9ff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="business-outline" size={24} color="#0284c7" />
                                    <Text style={[styles.infoBoxText, { color: '#0284c7' }]}>🏭 Campus Folcara: L'Università di Cassino ha il campus principale a Folcara (collina). Auto consigliata o bus navetta dalla stazione FS. Abbazia di Montecassino a 10 min!</Text>
                                </View>
                            )}

                            {/* EMILIA-ROMAGNA */}
                            {isUniBo && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef3c7', borderColor: '#fcd34d' }]}>
                                    <Ionicons name="globe-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>🎓 Alma Mater 5 Città: UniBo ha sedi a Bologna, Cesena, Forlì, Ravenna e Rimini. Via Zamboni è il cuore storico. Le biblioteche aperte fino a mezzanotte sono un tesoro!</Text>
                                </View>
                            )}
                            {isUniFe && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="bicycle-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>🚲 Ferrara in Bici: Ferrara è la città delle biciclette. Il campus è raggiungibile pedalando dalle mura estensi. Noleggia una bici il primo giorno — non te ne pentirai!</Text>
                                </View>
                            )}
                            {isUniMore && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="swap-horizontal-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>🔄 Modena + Reggio: UniMore ha due sedi principali collegate dal treno (25 min). Modena è il polo scientifico, Reggio quello umanistico. Controlla dove hai lezione!</Text>
                                </View>
                            )}
                            {isUniPr && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="restaurant-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>🧀 Food Valley: Parma è la capitale del cibo italiano! Campus compatto e raggiungibile. Pausa pranzo? Prosciutterie e tortellerie ovunque — studia meglio a pancia piena!</Text>
                                </View>
                            )}

                            {/* FRIULI-VENEZIA GIULIA */}
                            {isUniTs && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0f9ff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="flag-outline" size={24} color="#0284c7" />
                                    <Text style={[styles.infoBoxText, { color: '#0284c7' }]}>🌬️ Bora Alert: Trieste è la città della Bora — raffiche fino a 150 km/h! D'inverno copriti bene per raggiungere le sedi in collina. Il campus di Via Valerio è esposto.</Text>
                                </View>
                            )}
                            {isUniUd && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="leaf-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>🏡 Campus Rizzi: Il polo scientifico è nel Campus dei Rizzi (periferia), le sedi umanistiche in centro storico. Bus n. 1 e 3 collegano tutto. Udine è a misura di studente!</Text>
                                </View>
                            )}
                            {isTriesteElite && (
                                <View style={[styles.infoBox, { backgroundColor: '#fdf4ff', borderColor: '#f5d0fe' }]}>
                                    <Ionicons name="telescope-outline" size={24} color="#a21caf" />
                                    <Text style={[styles.infoBoxText, { color: '#a21caf' }]}>🔬 Eccellenza Internazionale: SISSA e ICTP sono centri di ricerca avanzata. Ambienti esclusivi con vista sul Golfo di Trieste. Accesso limitato ma spazi studio formidabili.</Text>
                                </View>
                            )}

                            {/* PIEMONTE */}
                            {isPoliTo && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="business-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>🏗️ Campus Torino: Il PoliTo ha sedi a Corso Duca degli Abruzzi (centro) e Lingotto/Mirafiori (periferia). Metro M1 ferma al campus. Le aule studio del Politecnico sono tra le migliori del Nord!</Text>
                                </View>
                            )}
                            {isUniTo && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef3c7', borderColor: '#fcd34d' }]}>
                                    <Ionicons name="library-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>📚 Torino Multicampus: Sedi sparse dal centro (Palazzo Nuovo, Via Po) al Campus Luigi Einaudi (CLE, moderno e luminoso). Tram e bus GTT coprono tutto — tessera studenti scontata!</Text>
                                </View>
                            )}
                            {isUPO && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="train-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>🚂 3 Città, 1 Ateneo: UPO ha sedi a Vercelli, Novara e Alessandria. Treni regionali frequenti tra le città (20-40 min). Ogni sede ha la sua identità — Novara è la più moderna!</Text>
                                </View>
                            )}

                            {/* MARCHE */}
                            {isUniVPM && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0f9ff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="boat-outline" size={24} color="#0284c7" />
                                    <Text style={[styles.infoBoxText, { color: '#0284c7' }]}>⚓ Ancona Porto: La Politecnica delle Marche è affacciata sull'Adriatico. Le sedi di Ingegneria sono a Monte Dago (collina) — vista mare spettacolare ma salita impegnativa!</Text>
                                </View>
                            )}
                            {isUniMC && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef3c7', borderColor: '#fcd34d' }]}>
                                    <Ionicons name="compass-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>🏰 Macerata in Collina: Ateneo piccolo ma affascinante, tutto in centro storico. Le sedi sono palazzi storici — studiare tra affreschi e cortili rinascimentali!</Text>
                                </View>
                            )}
                            {isUniCam && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="snow-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>🏔️ Camerino Montana: Università in montagna (661m slm). D'inverno può nevicare — controlla le strade! Comunità piccola e unitissima, tutti si conoscono.</Text>
                                </View>
                            )}
                            {isUniUrb && (
                                <View style={[styles.infoBox, { backgroundColor: '#fdf4ff', borderColor: '#f5d0fe' }]}>
                                    <Ionicons name="diamond-outline" size={24} color="#a21caf" />
                                    <Text style={[styles.infoBoxText, { color: '#a21caf' }]}>🎨 Urbino Rinascimentale: Città UNESCO patrimonio dell'umanità. Studiare nel Palazzo Ducale è un'esperienza unica. Tutto a piedi ma le salite sono serie!</Text>
                                </View>
                            )}

                            {/* CALABRIA */}
                            {isUniCal && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="home-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>🏘️ Campus Arcavacata: UniCal ha il campus residenziale più grande d'Italia a Rende. Vivi e studi nello stesso posto — tutto a portata di mano ma auto utile per uscire!</Text>
                                </View>
                            )}
                            {isUMG && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="medkit-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>🏥 Campus Germaneto: L'Università Magna Graecia è al Campus di Germaneto, fuori Catanzaro. Area ospedaliera — mensa e servizi interni sono fondamentali. Bus AMC dal centro.</Text>
                                </View>
                            )}
                            {isUniRC && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0f9ff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="water-outline" size={24} color="#0284c7" />
                                    <Text style={[styles.infoBoxText, { color: '#0284c7' }]}>🌊 Stretto di Messina: La Mediterranea è affacciata sullo Stretto! Le sedi di Architettura e Ingegneria hanno viste incredibili. Lungomare Falcomatà perfetto per le pause studio.</Text>
                                </View>
                            )}

                            {/* CAMPANIA (non-Federico II) */}
                            {isVanvitelli && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff1f2', borderColor: '#fecdd3' }]}>
                                    <Ionicons name="swap-horizontal-outline" size={24} color="#be123c" />
                                    <Text style={[styles.infoBoxText, { color: '#be123c' }]}>🔄 Napoli + Caserta: La Vanvitelli ha sedi in entrambe le città. A Caserta sei vicino alla Reggia — ambiente regale! A Napoli le sedi sono sparse. Treno Napoli-Caserta ogni 20 min.</Text>
                                </View>
                            )}
                            {isParthenope && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0f9ff', borderColor: '#bae6fd' }]}>
                                    <Ionicons name="sunny-outline" size={24} color="#0284c7" />
                                    <Text style={[styles.infoBoxText, { color: '#0284c7' }]}>🌅 Vista Golfo: La Parthenope è l'università con la vista più bella d'Italia! Sede di Via Amm. Acton affacciata su Castel dell'Ovo e Vesuvio. Concentrarsi è la vera sfida!</Text>
                                </View>
                            )}
                            {isOrientale && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef3c7', borderColor: '#fcd34d' }]}>
                                    <Ionicons name="globe-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>🌏 Centro Storico Profondo: L'Orientale è immersa nei vicoli di Napoli — Palazzo Corigliano e Palazzo Du Mesnil sono gioielli. ZTL attiva: muoviti a piedi o con metro L1!</Text>
                                </View>
                            )}
                            {isUniSa && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="bus-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>🏫 Campus Fisciano: Uno dei campus più grandi del Sud. Isolato ma autosufficiente (mense, palestre, residenze). Bus BUSITALIA da Salerno ogni 15 min. Parcheggio ampio ma arriva presto!</Text>
                                </View>
                            )}
                            {isUniSannio && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="leaf-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>🏛️ Benevento Storica: Ateneo raccolto nel centro storico di Benevento. L'Arco di Traiano è a 5 minuti! Città piccola e vivibile — tutto a portata di piedi.</Text>
                                </View>
                            )}
                            {isBenincasa && (
                                <View style={[styles.infoBox, { backgroundColor: '#fdf4ff', borderColor: '#f5d0fe' }]}>
                                    <Ionicons name="school-outline" size={24} color="#a21caf" />
                                    <Text style={[styles.infoBoxText, { color: '#a21caf' }]}>🎓 Ateneo di Nicchia: La Suor Orsola Benincasa è sul Vomero, in una posizione panoramica privilegiata. Ambiente raccolto e familiare — tutti si conoscono. Funicolare Centrale per arrivare!</Text>
                                </View>
                            )}

                            {/* ABRUZZO extra */}
                            {isGSSI && (
                                <View style={[styles.infoBox, { backgroundColor: '#f8fafc', borderColor: '#cbd5e1' }]}>
                                    <Ionicons name="diamond-outline" size={24} color="#475569" />
                                    <Text style={[styles.infoBoxText, { color: '#475569' }]}>💎 Eccellenza L'Aquila: Il GSSI è una scuola superiore post-sisma — moderna e internazionale. Accesso riservato ma spazi di altissima qualità nel centro ricostruito.</Text>
                                </View>
                            )}
                            {isUdA && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="swap-horizontal-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>🔄 Chieti + Pescara: Due città, un ateneo. Chieti (Campus Madonna delle Piane) per Medicina, Pescara (Viale Pindaro) per Economia e Lingue. Navetta gratuita tra i campus!</Text>
                                </View>
                            )}
                        </>
                    );
                })()}
                {(() => {
                    const isUniNa = room.id.startsWith('unina_');
                    if (!isUniNa) return null;
                    const ind = (room.indirizzo || '').toLowerCase();
                    const edif = (room.edificio || '').toLowerCase();
                    const isCentro = ind.includes('mezzocannone') || ind.includes('umberto') || ind.includes('porta di massa') || ind.includes('bellini') || ind.includes('monteoliveto') || ind.includes('rodinò') || ind.includes('pietà') || ind.includes('marcellino') || ind.includes('gravina');
                    const isMSA = ind.includes('monte s. angelo') || ind.includes('cintia') || edif.includes('monte s. angelo') || room.id.includes('msa_');
                    const isFuorigrotta = ind.includes('claudio') || ind.includes('tecchio') || ind.includes('agnano');
                    const isAgnano = ind.includes('agnano');
                    const isPoliclinico = ind.includes('pansini') || ind.includes('montesano') || ind.includes('amicis') || edif.includes('policlinico');
                    const isScampia = ind.includes('scampia') || ind.includes('gaetano quagliariello');
                    return (
                        <>
                            {isCentro && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff1f2', borderColor: '#fecdd3' }]}>
                                    <Ionicons name="warning-outline" size={24} color="#be123c" />
                                    <Text style={[styles.infoBoxText, { color: '#be123c' }]}>🚫 Trappola ZTL: Zona a Traffico Limitato attiva! Parcheggio impossibile tra Mezzocannone e Porta di Massa. Lascia l'auto ai Colli Aminei o a Brin e prendi la Metro Linea 1.</Text>
                                </View>
                            )}
                            {isCentro && (
                                <View style={[styles.infoBox, { backgroundColor: '#fef3c7', borderColor: '#fcd34d' }]}>
                                    <Ionicons name="pizza-outline" size={24} color="#d97706" />
                                    <Text style={[styles.infoBoxText, { color: '#d97706' }]}>🍕 Sopravvivenza Gastronomica: Sei nel cuore di Napoli! Pizze a portafoglio, cuoppo fritto e taralli a portata di mano. Via Mezzocannone e Piazza Bellini sono il paradiso dello street food studentesco.</Text>
                                </View>
                            )}
                            {(isMSA || isAgnano) && (
                                <View style={[styles.infoBox, { backgroundColor: '#fff7ed', borderColor: '#fed7aa' }]}>
                                    <Ionicons name="car-outline" size={24} color="#c2410c" />
                                    <Text style={[styles.infoBoxText, { color: '#c2410c' }]}>🅿️ Parcheggio Early Bird: Il parcheggio studenti si riempie entro le 08:45. Se arrivi in auto dalla provincia, parti presto o valuta la Cumana (fermata Mostra per MSA).</Text>
                                </View>
                            )}
                            {(isMSA || isFuorigrotta || isPoliclinico) && (
                                <View style={[styles.infoBox, { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }]}>
                                    <Ionicons name="restaurant-outline" size={24} color="#15803d" />
                                    <Text style={[styles.infoBoxText, { color: '#15803d' }]}>🍽️ Mensa ADISURC: Fuori dai cancelli c'è il vuoto cosmico. Usa la mensa universitaria interna o i bar dei dipartimenti — sono il tuo salvavita per il pranzo nei poli periferici.</Text>
                                </View>
                            )}
                            {isScampia && (
                                <View style={[styles.infoBox, { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }]}>
                                    <Ionicons name="bus-outline" size={24} color="#2563eb" />
                                    <Text style={[styles.infoBoxText, { color: '#2563eb' }]}>🏥 Polo Scampia: Sede moderna ma isolata. Metro Linea 1 (stazione Piscinola) + navetta gratuita. Mensa interna disponibile.</Text>
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
                            if (text.includes('tram')) return 'train-outline';
                            return 'map-outline';
                        };

                        return (
                            <View key={index} style={styles.directionPoint}>
                                <View style={[styles.directionIconContainer, { backgroundColor: lightBackgroundColor }]}>
                                    <Ionicons name={getIcon()} size={24} color={primaryColor} />
                                </View>
                                <View style={styles.directionTextContainer}>
                                    <Text style={styles.directionTitle}>{parseMarkdownBold(dir.luogo, styles.directionTitle)}</Text>
                                    <Text style={styles.directionContent}>{parseMarkdownBold(`${dir.descrizione}\n${dir.note || ''}`, styles.directionContent)}</Text>
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
            </ScrollView >
        </View >
    );
};

/* ────────────────────────────────────────────────────────
 *  RoomDetailScreen — Premium Design System
 *  Tokens: #f8fafc, #1e293b, #64748b, #94a3b8
 * ──────────────────────────────────────────────────────── */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },

    /* ── Header / App Bar ── */
    statusBarBg: {
        paddingTop: 0,
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 14,
        minHeight: 56,
    },
    backButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    appBarTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#ffffff',
        letterSpacing: 0.2,
        textAlign: 'center',
        marginHorizontal: 10,
        flexShrink: 1,
    },

    /* ── Content ── */
    scrollContent: {
        padding: 20,
        paddingBottom: 44,
    },

    /* ── Room Header ── */
    header: {
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: '#1e293b',
        marginBottom: 8,
        letterSpacing: -0.3,
        lineHeight: 30,
    },
    headerSubtitle: {
        fontSize: 15,
        color: '#64748b',
        fontWeight: '500',
    },

    /* ── Directions Cards ── */
    directionsContainer: {
        gap: 16,
        marginTop: 8,
    },
    directionPoint: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 18,
        shadowColor: '#64748b',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 3,
    },
    directionIconContainer: {
        width: 42,
        height: 42,
        borderRadius: 14,
        backgroundColor: '#ecfdf5',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    directionTextContainer: {
        flex: 1,
    },
    directionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1e293b',
        marginBottom: 6,
    },
    directionContent: {
        fontSize: 14,
        color: '#64748b',
        lineHeight: 21,
    },

    /* ── Advisory / Info Boxes ── */
    infoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ecfdf5',
        padding: 16,
        borderRadius: 16,
        marginTop: 14,
        marginBottom: 6,
        borderWidth: 1,
        borderColor: '#a7f3d0',
        shadowColor: '#64748b',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 1,
    },
    infoBoxText: {
        flex: 1,
        marginLeft: 12,
        fontSize: 13,
        color: '#047857',
        lineHeight: 19,
        fontWeight: '500',
    },
});
