import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    FlatList,
    RefreshControl,
    ActivityIndicator,
    TextInput,
    Animated,
    Easing,
    StatusBar,
    Alert,
    Linking,
    Platform,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StudyRoom, University } from '../types';
import { haversineDistance } from '../utils/locationHelpers';
import { FocusAwareStatusBar } from '../components/FocusAwareStatusBar';
import { GuideCarousel } from '../components/GuideCarousel';
import { StudyRoomCard } from '../components/StudyRoomCard';
import { StorageService } from '../services/storageService';
import { getUniversityById } from '../data/universities';
import { SmartWeatherCard } from '../components/SmartWeatherCard';

interface StudyRoomsScreenProps {
    navigation: any;
}

interface StudyRoomWithDistance extends StudyRoom {
    distance?: number;
}

type SortType = 'name' | 'distance';

const ITEMS_PER_PAGE = 10;
const FILTERS_CACHE_KEY = 'study_rooms_filters_cache';
const FAVORITES_CACHE_KEY = 'study_rooms_favorites_cache';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000;
const UDA_ALERT_KEY = 'uda_campus_prompt_shown';

export const StudyRoomsScreen: React.FC<StudyRoomsScreenProps> = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const [university, setUniversity] = useState<University | null>(null);
    const [studyRooms, setStudyRooms] = useState<StudyRoom[]>([]);
    const [selectedBuilding, setSelectedBuilding] = useState('Tutti');
    const [refreshing, setRefreshing] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [displayedItems, setDisplayedItems] = useState(ITEMS_PER_PAGE);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [isGuideVisible, setGuideVisible] = useState(false);

    const [userLocation, setUserLocation] = useState<Location.LocationObject | null>(null);
    const [sortType, setSortType] = useState<SortType>('name');
    const [favoriteRooms, setFavoriteRooms] = useState<Set<string>>(new Set());
    const [showFavorites, setShowFavorites] = useState(false);
    const udaPromptShown = useRef(false);
    const unitePromptShown = useRef(false);
    const uniprPromptShown = useRef(false);
    const unibaPromptShown = useRef(false);

    // Animations
    const headerAnim = useRef(new Animated.Value(0)).current;
    const searchBarAnim = useRef(new Animated.Value(0)).current;
    const filtersAnim = useRef(new Animated.Value(0)).current;
    const sortButtonsAnim = useRef(new Animated.Value(0)).current;
    const searchInputRef = useRef<TextInput>(null);

    // Load Initial Data
    useEffect(() => {
        loadUniversityData();
        loadFavoritesFromCache();
        requestLocation();

        Animated.stagger(100, [
            Animated.timing(headerAnim, { toValue: 1, duration: 500, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
            Animated.spring(searchBarAnim, { toValue: 1, friction: 8, tension: 40, useNativeDriver: true }),
            Animated.spring(filtersAnim, { toValue: 1, friction: 8, tension: 40, useNativeDriver: true }),
            Animated.spring(sortButtonsAnim, { toValue: 1, friction: 8, tension: 40, useNativeDriver: true }),
        ]).start();
    }, []);

    const loadUniversityData = async () => {
        const uniId = await StorageService.getSelectedUniversity();
        if (uniId) {
            const uni = getUniversityById(uniId);
            if (uni) {
                setUniversity(uni);
                setStudyRooms(uni.studyRooms);
                // Reset UI state when switching ateneo to avoid stale filters hiding rooms
                setSelectedBuilding('Tutti');
                setShowFavorites(false);
                setSearchQuery('');
                setDisplayedItems(ITEMS_PER_PAGE);
            }
        }
    };

    useEffect(() => {
        saveFiltersToCache();
    }, [selectedBuilding, university?.id]);

    const loadFiltersFromCache = async (uniId?: string) => {
        try {
            const cached = await AsyncStorage.getItem(FILTERS_CACHE_KEY);
            if (cached) {
                const { timestamp, building, universityId } = JSON.parse(cached);
                if (Date.now() - timestamp < CACHE_EXPIRY && (!uniId || universityId === uniId)) {
                    setSelectedBuilding(building || 'Tutti');
                }
            }
        } catch (error) { console.log('Cache error', error); }
    };

    const saveFiltersToCache = async () => {
        try {
            const cacheData = { timestamp: Date.now(), building: selectedBuilding, universityId: university?.id };
            await AsyncStorage.setItem(FILTERS_CACHE_KEY, JSON.stringify(cacheData));
        } catch (error) { console.log('Cache save error', error); }
    };

    // Reload filters cache once university is known to avoid cross-ateneo stale filters
    useEffect(() => {
        if (university?.id) {
            loadFiltersFromCache(university.id);
        }
    }, [university?.id]);

    // Prompt split-campus choice for Ud'A the first time
    useEffect(() => {
        const maybePromptUdA = async () => {
            if (!university || university.id !== 'uda' || udaPromptShown.current) return;
            const stored = await AsyncStorage.getItem(UDA_ALERT_KEY);
            if (stored === '1') { udaPromptShown.current = true; return; }
            udaPromptShown.current = true;
            Alert.alert(
                "Dove sei oggi?",
                "Ud'A è divisa tra Chieti (campus) e Pescara (Pindaro).",
                [
                    { text: 'Chieti', onPress: () => { setSelectedBuilding('Chieti'); AsyncStorage.setItem(UDA_ALERT_KEY, '1'); } },
                    { text: 'Pescara', onPress: () => { setSelectedBuilding('Pescara'); AsyncStorage.setItem(UDA_ALERT_KEY, '1'); } },
                    { text: 'Chiudi', style: 'cancel' }
                ]
            );
        };
        maybePromptUdA();
    }, [university]);

    // Prompt split-campus choice for UniTe (Campus vs Veterinaria vs Centro)
    useEffect(() => {
        const maybePromptUniTe = async () => {
            if (!university || university.id !== 'unite' || unitePromptShown.current) return;
            const key = 'unite_campus_prompt_shown';
            const stored = await AsyncStorage.getItem(key);
            if (stored === '1') { unitePromptShown.current = true; return; }
            unitePromptShown.current = true;
            Alert.alert(
                'Dove sei oggi?',
                'UniTe ha campus diversi: Coste S. Agostino, Veterinaria (Piano d\'Accio) e Centro.',
                [
                    { text: 'Campus', onPress: () => { setSelectedBuilding('Campus'); AsyncStorage.setItem(key, '1'); } },
                    { text: 'Veterinaria', onPress: () => { setSelectedBuilding('Veterinaria'); AsyncStorage.setItem(key, '1'); } },
                    { text: 'Centro', onPress: () => { setSelectedBuilding('Centro'); AsyncStorage.setItem(key, '1'); } },
                    { text: 'Chiudi', style: 'cancel' }
                ]
            );
        };
        maybePromptUniTe();
    }, [university]);

    // Prompt split-campus choice for UniPr (Campus vs Centro)
    useEffect(() => {
        const maybePromptUniPr = async () => {
            if (!university || university.id !== 'unipr' || uniprPromptShown.current) return;
            const key = 'unipr_campus_prompt_shown';
            const stored = await AsyncStorage.getItem(key);
            if (stored === '1') { uniprPromptShown.current = true; return; }
            uniprPromptShown.current = true;
            Alert.alert(
                'Dove sei oggi?',
                'UniPr ha sedi al Campus (zona sud) e in Centro Storico.',
                [
                    { text: 'Campus', onPress: () => { setSelectedBuilding('Campus'); AsyncStorage.setItem(key, '1'); } },
                    { text: 'Centro', onPress: () => { setSelectedBuilding('Centro Kennedy'); AsyncStorage.setItem(key, '1'); } },
                    { text: 'Chiudi', style: 'cancel' }
                ]
            );
        };
        maybePromptUniPr();
    }, [university]);

    // Prompt split-campus choice for UniBa the first time
    useEffect(() => {
        const maybePromptUniBa = async () => {
            if (!university || university.id !== 'uniba' || unibaPromptShown.current) return;
            const key = 'uniba_campus_prompt_shown';
            const stored = await AsyncStorage.getItem(key);
            if (stored === '1') { unibaPromptShown.current = true; return; }
            unibaPromptShown.current = true;
            Alert.alert(
                'Dove sei oggi?',
                'UniBa è divisa fra Centro (Ateneo), Campus (Orabona), Poggiofranco (Economia), Policlinico e sedi distaccate.',
                [
                    { text: 'Centro', onPress: () => { setSelectedBuilding('Centro Storico'); AsyncStorage.setItem(key, '1'); } },
                    { text: 'Campus', onPress: () => { setSelectedBuilding('Campus (Orabona)'); AsyncStorage.setItem(key, '1'); } },
                    { text: 'Altro', onPress: () => { AsyncStorage.setItem(key, '1'); }, style: 'cancel' },
                ]
            );
        };
        maybePromptUniBa();
    }, [university]);

    const requestLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') { setSortType('name'); return; }
        try {
            let location = await Location.getCurrentPositionAsync({});
            setUserLocation(location);
        } catch (error) { console.log('Location error', error); }
    };

    const loadFavoritesFromCache = async () => {
        const stored = await AsyncStorage.getItem(FAVORITES_CACHE_KEY);
        if (stored) setFavoriteRooms(new Set(JSON.parse(stored)));
    };

    const toggleFavorite = async (roomId: string) => {
        const newFavorites = new Set(favoriteRooms);
        if (newFavorites.has(roomId)) newFavorites.delete(roomId);
        else newFavorites.add(roomId);
        setFavoriteRooms(newFavorites);
        await AsyncStorage.setItem(FAVORITES_CACHE_KEY, JSON.stringify(Array.from(newFavorites)));
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            loadUniversityData(); // Reload data
            setRefreshing(false);
            setDisplayedItems(ITEMS_PER_PAGE);
        }, 1000);
    }, []);

    const mapRef = useRef<MapView>(null);

    const filteredRooms = useMemo(() => {
        let filtered = studyRooms;

        if (showFavorites) {
            filtered = filtered.filter(r => favoriteRooms.has(r.id));
        } else if (searchQuery.trim() !== '') {
            const lowercasedQuery = searchQuery.toLowerCase();
            filtered = filtered.filter(r => r.nome.toLowerCase().includes(lowercasedQuery));
        } else if (selectedBuilding === '☀️ All\'Aperto') {
            filtered = filtered.filter(r => {
                const allText = (r.nome + ' ' + (r.tags || []).join(' ') + ' ' + r.servizi.join(' ')).toLowerCase();
                return allText.includes('outdoor') || allText.includes('aperto') || allText.includes('chiostro') ||
                    allText.includes('giardino') || allText.includes('parco') || allText.includes('pineta') ||
                    allText.includes('gazebo') || allText.includes('terrazza') || allText.includes('cortile');
            });
        } else if (selectedBuilding === '🏠 Al Coperto') {
            filtered = filtered.filter(r => {
                const allText = (r.nome + ' ' + (r.tags || []).join(' ') + ' ' + r.servizi.join(' ')).toLowerCase();
                const isOutdoor = allText.includes('outdoor') || allText.includes('aperto') || allText.includes('chiostro') ||
                    allText.includes('giardino') || allText.includes('parco') || allText.includes('pineta') ||
                    allText.includes('gazebo') || allText.includes('terrazza') || allText.includes('cortile');
                return !isOutdoor;
            });
        } else if (selectedBuilding !== 'Tutti') {
            // Generic filter logic: check if edificio includes key terms or equals
            if (university?.name === 'UniNa' && selectedBuilding === 'Centro Storico') {
                filtered = filtered.filter(room =>
                    room.edificio.includes('Corso Umberto') ||
                    room.edificio.includes('Mezzocannone') ||
                    room.edificio.includes('Porta di Massa') ||
                    (room.edificio.includes('Centrale') && !room.edificio.includes('Monte'))
                );
            } else if (university?.id === 'uda') {
                if (selectedBuilding === 'Chieti') {
                    filtered = filtered.filter(r =>
                        (r.indirizzo.includes('Vestini') || r.id.includes('chieti')) && !r.id.includes('civitella')
                    );
                } else if (selectedBuilding === 'Chieti Alta') {
                    filtered = filtered.filter(r => r.id.includes('civitella'));
                } else if (selectedBuilding === 'Pescara') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Pindaro') || r.id.includes('pescara'));
                } else if (selectedBuilding === 'Vasto') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Vasto') || r.id.includes('vasto'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'unite') {
                if (selectedBuilding === 'Campus') {
                    filtered = filtered.filter(r => r.id.includes('campus'));
                } else if (selectedBuilding === 'Veterinaria') {
                    filtered = filtered.filter(r => r.id.includes('vet'));
                } else if (selectedBuilding === 'Centro') {
                    filtered = filtered.filter(r => r.id.includes('delfico'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'unimol') {
                if (selectedBuilding === 'Vazzieri') {
                    filtered = filtered.filter(r => r.id.includes('vazzieri') || r.id.includes('leonardo') || r.id.includes('economia'));
                } else if (selectedBuilding === 'Tappino (Medicina)') {
                    filtered = filtered.filter(r => r.id.includes('tappino'));
                } else if (selectedBuilding === 'Economia') {
                    filtered = filtered.filter(r => r.id.includes('economia'));
                } else if (selectedBuilding === 'Termoli') {
                    filtered = filtered.filter(r => r.id.includes('termoli'));
                } else if (selectedBuilding === 'Pesche (Agraria)') {
                    filtered = filtered.filter(r => r.id.includes('pesche'));
                } else if (selectedBuilding === 'Isernia (Sede)') {
                    filtered = filtered.filter(r => r.id.includes('unimol_isernia_'));
                } else if (selectedBuilding === 'Isernia (Biblio Comunale)') {
                    filtered = filtered.filter(r => r.id.includes('romano'));
                } else if (selectedBuilding === 'Museo Paleolitico') {
                    filtered = filtered.filter(r => r.id.includes('museo'));
                } else if (selectedBuilding === 'Campobasso (Albino)') {
                    filtered = filtered.filter(r => r.id.includes('albino'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'unibas') {
                if (selectedBuilding === 'Macchia') {
                    filtered = filtered.filter(r => r.id.includes('macchia') || r.id.includes('adsu'));
                } else if (selectedBuilding === 'Francioso') {
                    filtered = filtered.filter(r => r.id.includes('francioso') || r.indirizzo.includes('Sauro'));
                } else if (selectedBuilding === 'Gallitello') {
                    filtered = filtered.filter(r => r.id.includes('gallitello') || r.id.includes('nazionale'));
                } else if (selectedBuilding === 'Matera') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Matera'));
                } else if (selectedBuilding === 'ADSU') {
                    filtered = filtered.filter(r => r.id.includes('adsu'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'afamBasilicata') {
                if (selectedBuilding === 'Potenza') {
                    filtered = filtered.filter(r => r.id.includes('cons_pz'));
                } else if (selectedBuilding === 'Matera') {
                    filtered = filtered.filter(r => r.id.includes('cons_mt') || r.id.includes('idm'));
                } else if (selectedBuilding === 'Design') {
                    filtered = filtered.filter(r => r.id.includes('idm'));
                } else if (selectedBuilding === 'Strumenti') {
                    filtered = filtered.filter(r => r.id.includes('aule') || r.nome.toLowerCase().includes('strument'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'unical') {
                if (selectedBuilding === 'Biblioteche') {
                    filtered = filtered.filter(r => r.id.includes('bau') || r.id.includes('bats') || r.id.includes('tar'));
                } else if (selectedBuilding === 'Umanistica') {
                    filtered = filtered.filter(r => r.id.includes('bau') || r.id.includes('alcaro'));
                } else if (selectedBuilding === 'Scientifica') {
                    filtered = filtered.filter(r => r.id.includes('bats'));
                } else if (selectedBuilding === 'Economia') {
                    filtered = filtered.filter(r => r.id.includes('tar'));
                } else if (selectedBuilding === 'Medicina') {
                    filtered = filtered.filter(r => r.id.includes('medicina'));
                } else if (selectedBuilding === 'Residenziale') {
                    filtered = filtered.filter(r => r.id.includes('maisonnettes') || r.id.includes('martensson'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'umg') {
                if (selectedBuilding === 'Campus') {
                    filtered = filtered.filter(r => r.id.includes('umg'));
                } else if (selectedBuilding === 'Medicina') {
                    filtered = filtered.filter(r => r.id.includes('bio_biblio'));
                } else if (selectedBuilding === 'Giurisprudenza') {
                    filtered = filtered.filter(r => r.id.includes('giur_econom'));
                } else if (selectedBuilding === 'Centro') {
                    filtered = filtered.filter(r => r.id.includes('denobili'));
                } else if (selectedBuilding === 'Lido') {
                    filtered = filtered.filter(r => r.id.includes('lido_biblio'));
                } else if (selectedBuilding === 'Residenziale') {
                    filtered = filtered.filter(r => r.id.includes('residenze'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'unirc') {
                if (selectedBuilding === 'Biblioteche') {
                    filtered = filtered.filter(r => r.id.includes('biblio'));
                } else if (selectedBuilding === 'Architettura') {
                    filtered = filtered.filter(r => r.id.includes('arch'));
                } else if (selectedBuilding === 'Ingegneria') {
                    filtered = filtered.filter(r => r.id.includes('ing_biblio') || r.id.includes('ponti'));
                } else if (selectedBuilding === 'Giurisprudenza') {
                    filtered = filtered.filter(r => r.id.includes('giur_econom'));
                } else if (selectedBuilding === 'Centro') {
                    filtered = filtered.filter(r => r.id.includes('consiglio_regionale') || r.id.includes('palazzo_cultura'));
                } else if (selectedBuilding === 'Residenziale') {
                    filtered = filtered.filter(r => r.id.includes('residenze'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'gssi') {
                if (selectedBuilding === 'Main') {
                    filtered = filtered.filter(r => r.id.startsWith('gssi_') && !r.id.includes('villa'));
                } else if (selectedBuilding === 'Outdoor') {
                    filtered = filtered.filter(r => r.id.includes('villa'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'afam') {
                if (selectedBuilding === "L'Aquila") {
                    filtered = filtered.filter(r => r.id.includes('abaq') || r.id.includes('cons_aq'));
                } else if (selectedBuilding === 'Pescara') {
                    filtered = filtered.filter(r => r.id.includes('cons_pe') || r.id.includes('isia'));
                } else if (selectedBuilding === 'Teramo') {
                    filtered = filtered.filter(r => r.id.includes('cons_te'));
                } else if (selectedBuilding === 'Strumenti') {
                    const term = 'strument';
                    filtered = filtered.filter(r => r.id.includes('aule') || r.nome.toLowerCase().includes(term));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'afamCalabria') {
                if (selectedBuilding === 'Cosenza') {
                    filtered = filtered.filter(r => r.id.includes('cons_cs') || r.id.includes('cs_'));
                } else if (selectedBuilding === 'Reggio') {
                    filtered = filtered.filter(r => r.id.includes('abarc') || r.id.includes('cons_rc') || r.id.includes('rc_') || r.id.includes('adsu_rc'));
                } else if (selectedBuilding === 'Catanzaro') {
                    filtered = filtered.filter(r => r.id.includes('abacz') || r.id.includes('cz_'));
                } else if (selectedBuilding === 'Vibo') {
                    filtered = filtered.filter(r => r.id.includes('vv_') || r.id.includes('cons_vv') || r.id.includes('fidia'));
                } else if (selectedBuilding === 'Nocera') {
                    filtered = filtered.filter(r => r.id.includes('tchaikovsky'));
                } else if (selectedBuilding === 'Conservatori') {
                    filtered = filtered.filter(r => r.id.includes('cons_') || r.id.includes('tchaikovsky'));
                } else if (selectedBuilding === 'Accademie') {
                    filtered = filtered.filter(r => r.id.includes('aba') || r.id.includes('fidia'));
                } else if (selectedBuilding === 'Biblioteche Esterne') {
                    filtered = filtered.filter(r => r.id.includes('biblio') || r.id.includes('sbv') || r.id.includes('consiglio') || r.id.includes('palazzo_cultura'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'polimi') {
                // PoliMi Specific Filters
                if (selectedBuilding === 'Leonardo') {
                    filtered = filtered.filter(r =>
                        r.indirizzo.includes('Leonardo') ||
                        r.indirizzo.includes('Bonardi') ||
                        r.indirizzo.includes('Ampère')
                    );
                } else if (selectedBuilding === 'Bovisa') {
                    filtered = filtered.filter(r =>
                        r.indirizzo.includes('Candiani') ||
                        r.indirizzo.includes('La Masa') ||
                        r.nome.toLowerCase().includes('bovisa')
                    );
                } else {
                    // For Lecco, Como, Piacenza, etc. check address
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'afam_liguria') {
                if (selectedBuilding === 'Genova') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Genova'));
                } else if (selectedBuilding === 'La Spezia') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Spezia'));
                } else if (selectedBuilding === 'Sanremo') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Sanremo'));
                } else if (selectedBuilding === 'Accademia') {
                    filtered = filtered.filter(r => r.id.startsWith('aba_'));
                } else if (selectedBuilding === 'Conservatorio') {
                    filtered = filtered.filter(r => r.id.startsWith('cons_'));
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'unige_health') {
                if (selectedBuilding.includes('Chiavari')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Chiavari'));
                } else if (selectedBuilding.includes('Pietra Ligure')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Pietra Ligure'));
                } else if (selectedBuilding.includes('Ospedale')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Ghio') || r.indirizzo.includes('XXV Aprile'));
                } else if (selectedBuilding.includes('Outdoor')) {
                    filtered = filtered.filter(r => r.id.includes('outdoor'));
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'unige_spezia') {
                if (selectedBuilding.includes('Campus')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Fieschi') || r.id.includes('campus'));
                } else if (selectedBuilding.includes('Beghi')) {
                    filtered = filtered.filter(r => r.id.includes('beghi'));
                } else if (selectedBuilding.includes('Centro')) {
                    filtered = filtered.filter(r => r.id.includes('mazzini') || r.id.includes('mediateca'));
                } else if (selectedBuilding.includes('Outdoor')) {
                    filtered = filtered.filter(r => r.id.includes('mirabello'));
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'unige_imperia') {
                if (selectedBuilding.includes('Campus')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Nizza'));
                } else if (selectedBuilding.includes('Oneglia')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Oneglia'));
                } else if (selectedBuilding.includes('Porto Maurizio')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Porto Maurizio'));
                } else if (selectedBuilding.includes('Outdoor')) {
                    filtered = filtered.filter(r => r.id.includes('parasio') || r.id.includes('giardino'));
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'unimib') {
                if (selectedBuilding.includes('Sede Centrale')) {
                    filtered = filtered.filter(r => r.edificio.includes('U6'));
                } else if (selectedBuilding.includes('Scienza')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Scienza'));
                } else if (selectedBuilding.includes('Monza')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Monza') || r.indirizzo.includes('Vedano'));
                } else if (selectedBuilding.includes('U12')) {
                    filtered = filtered.filter(r => r.edificio.includes('U12') || r.edificio.includes('U7'));
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'unibs') {
                if (selectedBuilding.includes('Mantova')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Mantova'));
                } else if (selectedBuilding.includes('Chiari')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Chiari'));
                } else if (selectedBuilding.includes('Polo Nord')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Branze') || r.indirizzo.includes('Europa'));
                } else if (selectedBuilding.includes('Centro')) {
                    filtered = filtered.filter(r =>
                        r.indirizzo.includes('San Faustino') ||
                        r.indirizzo.includes('Santa Chiara') ||
                        r.indirizzo.includes('Battaglie')
                    );
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'unibg') {
                if (selectedBuilding.includes('Alta')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Alta') || r.indirizzo.includes('Salvecchio') || r.indirizzo.includes('Pignolo'));
                } else if (selectedBuilding.includes('Dalmine')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Dalmine'));
                } else if (selectedBuilding.includes('Caniana')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Caniana') || r.indirizzo.includes('Bernardino'));
                } else if (selectedBuilding.includes('Serali')) {
                    // Filter for late-closing libraries/rooms
                    filtered = filtered.filter(r => r.orarioChiusura > '20:00');
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'uninsubria') {
                if (selectedBuilding.includes('Varese')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Varese') || r.indirizzo.includes('Generoso') || r.indirizzo.includes('Dunant') || r.indirizzo.includes('Rossi'));
                } else if (selectedBuilding.includes('Abbondio')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Abbondio'));
                } else if (selectedBuilding.includes('Scienze')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Valleggio') || r.indirizzo.includes('Castelnuovo'));
                } else if (selectedBuilding.includes('Busto')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Busto'));
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'iuss') {
                if (selectedBuilding.includes('Sede Centrale')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Vittoria') || r.edificio.includes('Broletto'));
                } else if (selectedBuilding.includes('Lungoticino')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Lungoticino'));
                } else if (selectedBuilding.includes('Collegi')) {
                    filtered = filtered.filter(r => r.indirizzo.includes('Collegio') || r.indirizzo.includes('Ghislieri'));
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'univaq') {
                // UnivAQ specific clusters: Centro, Coppito, Roio, ADSU
                if (selectedBuilding === 'Centro') {
                    filtered = filtered.filter(r =>
                        r.indirizzo.includes('Nizza') ||
                        r.indirizzo.includes('Basilio') ||
                        r.indirizzo.includes('Mezzanotte')
                    );
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'parthenope') {
                // Parthenope specific filters
                if (selectedBuilding === 'Palazzo Pacanowski') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Parisi') || r.edificio.includes('Pacanowski'));
                } else if (selectedBuilding === "Villa Doria d'Angri") {
                    filtered = filtered.filter(r => r.indirizzo.includes('Petrarca') || r.edificio.includes('Villa Doria'));
                } else if (selectedBuilding === 'Centro Direzionale') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Centro Direzionale') || r.id.includes('cdn'));
                } else if (selectedBuilding === 'Sede Centrale Acton') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Acton'));
                } else if (selectedBuilding === 'Via Medina') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Medina') || r.id.includes('medina'));
                } else if (selectedBuilding === 'Nola') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Nola') || r.id.includes('nola'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'unisa') {
                // UniSa specific filters
                if (selectedBuilding === 'Biblioteche') {
                    filtered = filtered.filter(r => r.id.includes('biblio') || r.edificio.toLowerCase().includes('biblioteca'));
                } else if (selectedBuilding === 'Stecche') {
                    filtered = filtered.filter(r => r.id.includes('stecca') || r.edificio.includes('Stecca'));
                } else if (selectedBuilding === 'Servizi Campus') {
                    filtered = filtered.filter(r =>
                        r.id.includes('mensa') ||
                        r.id.includes('residenze') ||
                        r.id.includes('teatro') ||
                        r.id.includes('palazzetto') ||
                        r.id.includes('_p2')
                    );
                } else if (selectedBuilding === 'Baronissi') {
                    filtered = filtered.filter(r => r.id.includes('baronissi') || r.indirizzo.includes('Baronissi'));
                } else if (selectedBuilding === 'Salerno Centro') {
                    filtered = filtered.filter(r => r.id.includes('salerno_centro') || r.edificio.includes('Palazzo Pinto'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'unisannio') {
                // UniSannio specific filters
                if (selectedBuilding === 'Centro Storico') {
                    filtered = filtered.filter(r =>
                        r.id.includes('biblio_centrale') ||
                        r.id.includes('demm') ||
                        r.id.includes('santagostino') ||
                        r.id.includes('san_vittorino') ||
                        r.id.includes('san_domenico')
                    );
                } else if (selectedBuilding === 'Il Cubo') {
                    filtered = filtered.filter(r => r.id.includes('cubo') || r.id.includes('dst'));
                } else if (selectedBuilding === 'Polo SEA') {
                    filtered = filtered.filter(r => r.id.includes('sea') || r.indirizzo.includes('Via delle Puglie'));
                } else if (selectedBuilding === 'Piazza Roma') {
                    filtered = filtered.filter(r => r.id.includes('giannone') || r.id.includes('inps') || r.indirizzo.includes('Piazza Roma'));
                } else if (selectedBuilding === 'Corso Garibaldi') {
                    filtered = filtered.filter(r => r.id.includes('bosco') || r.indirizzo.includes('Corso Garibaldi'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'unibo') {
                if (selectedBuilding === 'Zamboni') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Zamboni') || r.id.includes('cicu') || r.id.includes('bub'));
                } else if (selectedBuilding === 'Belmeloro') {
                    filtered = filtered.filter(r => r.id.includes('belmeloro') || r.indirizzo.includes('Andreatta'));
                } else if (selectedBuilding === 'Ospedaliera') {
                    filtered = filtered.filter(r => r.id.includes('sant_orsola') || r.id.includes('pignatti'));
                } else if (selectedBuilding === 'Campus Romagna') {
                    filtered = filtered.filter(r => r.id.includes('cesena') || r.id.includes('forli') || r.id.includes('ravenna') || r.id.includes('rimini'));
                } else if (selectedBuilding.includes('Serali')) {
                    filtered = filtered.filter(r => r.orarioChiusura > '21:00' || r.id.includes('h24') || r.orarioApertura === '00:00');
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'unife') {
                if (selectedBuilding === 'Ferrara Centro') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Ferrara') && !r.edificio.includes('Polo Scientifico'));
                } else if (selectedBuilding === 'Polo Scientifico') {
                    filtered = filtered.filter(r => r.edificio.includes('Polo Scientifico') || r.indirizzo.includes('Saragat'));
                } else if (selectedBuilding === 'Rovigo') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Rovigo'));
                } else if (selectedBuilding.includes('Serali')) {
                    filtered = filtered.filter(r => r.orarioChiusura > '19:00');
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'unimore') {
                if (selectedBuilding === 'Modena Centro') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Modena') && !r.id.includes('campus') && !r.id.includes('policlinico'));
                } else if (selectedBuilding === 'Modena Campus') {
                    filtered = filtered.filter(r => r.id.includes('campus') || r.indirizzo.includes('Campi') || r.indirizzo.includes('Vivarelli'));
                } else if (selectedBuilding === 'Reggio Emilia') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Reggio'));
                } else if (selectedBuilding.includes('Serali')) {
                    filtered = filtered.filter(r => r.orarioChiusura > '19:30');
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'unipr') {
                if (selectedBuilding === 'Campus') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Parco Area delle Scienze'));
                } else if (selectedBuilding === 'Centro Kennedy') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Kennedy') || r.indirizzo.includes('D\'Azeglio') || r.indirizzo.includes('Università'));
                } else if (selectedBuilding === 'Ospedale') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Gramsci') || r.edificio.includes('Ospedale'));
                } else if (selectedBuilding === 'Biblioteche Comunali') {
                    filtered = filtered.filter(r => r.id.startsWith('parma_') || r.nome.toLowerCase().includes('comunale') || r.nome.toLowerCase().includes('civica'));
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'units') {
                if (selectedBuilding === 'Campus Europa') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Europa') || r.indirizzo.includes('Valerio'));
                } else if (selectedBuilding === 'Centro Trieste') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Filzi') || r.indirizzo.includes('Baciocchi') || r.indirizzo.includes('Battisti') || r.indirizzo.includes('Hortis') || r.indirizzo.includes('Giovanni'));
                } else if (selectedBuilding === 'Cattinara (Medicina)') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Cattinara') || r.indirizzo.includes('Fiume'));
                } else if (selectedBuilding === 'Gorizia') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Gorizia') || r.indirizzo.includes('Chiara') || r.indirizzo.includes('Alviano'));
                } else if (selectedBuilding === 'Pordenone/Portogruaro') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Pordenone') || r.indirizzo.includes('Portogruaro') || r.indirizzo.includes('Prasecco') || r.indirizzo.includes('Seminario'));
                } else if (selectedBuilding === 'Caffè Letterari') {
                    filtered = filtered.filter(r => r.id === 'ts_caffe_sanmarco');
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'uniud') {
                if (selectedBuilding === 'Rizzi (Scienze)') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Scienze') || r.indirizzo.includes('Rizzi') || r.indirizzo.includes('Schiavi'));
                } else if (selectedBuilding === 'Centro Storico') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Palladio') || r.indirizzo.includes('Margreth') || r.indirizzo.includes('Petracco') || r.indirizzo.includes('Tomadini'));
                } else if (selectedBuilding === 'Medicina Kolbe') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Kolbe') || r.indirizzo.includes('Misericordia'));
                } else if (selectedBuilding === 'Gorizia/Pordenone') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Gorizia') || r.indirizzo.includes('Pordenone') || r.indirizzo.includes('Chiara') || r.indirizzo.includes('Prasecco'));
                } else if (selectedBuilding === 'Gemona (Sport)') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Gemona'));
                } else if (selectedBuilding === 'Biblioteca Joppi') {
                    filtered = filtered.filter(r => r.id === 'ud_joppi');
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'trieste_elite') {
                if (selectedBuilding === 'SISSA (Physics/Math)') {
                    filtered = filtered.filter(r => r.id.startsWith('sissa_') || r.university === 'SISSA');
                } else if (selectedBuilding === 'ICTP (UNESCO)') {
                    filtered = filtered.filter(r => r.id.startsWith('ictp_') || r.university === 'ICTP');
                } else if (selectedBuilding === 'MIB (Business)') {
                    filtered = filtered.filter(r => r.id.startsWith('mib_') || r.university === 'MIB');
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'afam_fvg') {
                if (selectedBuilding === 'Tartini Trieste') {
                    filtered = filtered.filter(r => r.id.startsWith('cons_ts') || r.indirizzo.includes('Ghega'));
                } else if (selectedBuilding === 'Tomadini Udine') {
                    filtered = filtered.filter(r => r.id.startsWith('cons_ud') && !r.id.includes('giardin'));
                } else if (selectedBuilding === 'Tiepolo Udine') {
                    filtered = filtered.filter(r => r.id.startsWith('aba_ud') || r.indirizzo.includes('Ungheria'));
                } else if (selectedBuilding === 'Outdoor Study') {
                    filtered = filtered.filter(r => r.id === 'cons_ud_giardin_grande');
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'unige') {
                if (selectedBuilding === 'Via Balbi (Principe)') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Balbi'));
                } else if (selectedBuilding === 'Darsena (Economia)') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Vivaldi') || r.indirizzo.includes('Darsena'));
                } else if (selectedBuilding === 'Albaro (Ingegneria)') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Montallegro') || r.indirizzo.includes('Albaro'));
                } else if (selectedBuilding === 'San Martino (Medicina)') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Benzi') || r.indirizzo.includes('Europa'));
                } else if (selectedBuilding === 'Sarzano (Architettura)') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Agostino'));
                } else if (selectedBuilding === 'Berio (Civica)') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Seminario'));
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'unige_savona') {
                if (selectedBuilding === 'Campus Legino') {
                    filtered = filtered.filter(r => r.id.startsWith('unige_sv') && r.indirizzo.includes('Magliotto'));
                } else if (selectedBuilding === 'Barrili (Civica)') {
                    filtered = filtered.filter(r => r.id.includes('barrili'));
                } else if (selectedBuilding === 'Priamar (Outdoor)') {
                    filtered = filtered.filter(r => r.id.includes('priamar'));
                } else if (selectedBuilding === 'Sport Hub') {
                    filtered = filtered.filter(r => r.id.includes('sport') || r.id.includes('branca'));
                } else {
                    filtered = filtered.filter(r => r.edificio.includes(selectedBuilding) || r.indirizzo.includes(selectedBuilding));
                }
            } else if (university?.id === 'univpm') {
                if (selectedBuilding === 'Monte Dago') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Brecce') || r.edificio.includes('Dago'));
                } else if (selectedBuilding === 'Villarey') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Martelli') || r.edificio.includes('Villarey'));
                } else if (selectedBuilding === 'Torrette') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Conca') || r.edificio.includes('Torrette'));
                } else if (selectedBuilding === 'Ancona Centro') {
                    filtered = filtered.filter(r => r.id === 'an_benincasa' || r.indirizzo.includes('Plebiscito'));
                } else if (selectedBuilding === 'Ascoli') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Ascoli'));
                } else if (selectedBuilding === 'Fermo') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Fermo'));
                } else if (selectedBuilding === 'San Benedetto') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Benedetto'));
                } else if (selectedBuilding === 'Pesaro') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Pesaro'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'uniurb') {
                if (selectedBuilding === 'Centro Storico') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Urbino') && !r.indirizzo.includes('Cappuccini') && !r.indirizzo.includes('Crocicchia'));
                } else if (selectedBuilding === 'Collegi') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Cappuccini') || r.id.includes('collegi'));
                } else if (selectedBuilding === 'Scientifico') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Crocicchia') || r.id.includes('scientifico'));
                } else if (selectedBuilding === 'Fano') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Fano'));
                } else if (selectedBuilding === 'Pesaro') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Pesaro') || r.id.includes('pesaro'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'unimc') {
                if (selectedBuilding === 'Macerata Centro') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Macerata') || r.id.includes('unimc'));
                } else if (selectedBuilding === 'Civitanova') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Civitanova'));
                } else if (selectedBuilding === 'Jesi') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Jesi'));
                } else if (selectedBuilding === 'Fermo') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Fermo') || r.id.startsWith('fermo_'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'unicam') {
                if (selectedBuilding === 'Camerino') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Camerino') || r.id.includes('unicam'));
                } else if (selectedBuilding === 'Ascoli Piceno') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Ascoli'));
                } else if (selectedBuilding === 'Matelica') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Matelica'));
                } else if (selectedBuilding === 'San Benedetto') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Benedetto'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'afamMarche') {
                if (selectedBuilding === 'Urbino (ISIA/ABA)') {
                    filtered = filtered.filter(r => r.indirizzo.includes('Urbino'));
                } else if (selectedBuilding === 'Macerata (ABA)') {
                    filtered = filtered.filter(r => r.id.includes('aba_macerata') || r.id.includes('macerata_mozzi'));
                } else if (selectedBuilding === 'Pesaro (Rossini)') {
                    filtered = filtered.filter(r => r.id.includes('rossini') || r.id.includes('pesaro'));
                } else if (selectedBuilding === 'Fermo (Pergolesi)') {
                    filtered = filtered.filter(r => r.id.includes('fermo') || r.id.includes('cons_fermo'));
                } else if (selectedBuilding === 'Ancona (Poliarte)') {
                    filtered = filtered.filter(r => r.id.includes('poliarte'));
                } else if (selectedBuilding === 'Conservatori') {
                    filtered = filtered.filter(r => r.id.includes('cons_'));
                } else if (selectedBuilding === 'Accademie') {
                    filtered = filtered.filter(r => r.id.includes('aba_') || r.id.includes('isia_') || r.id.includes('poliarte'));
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'unito') {
                if (selectedBuilding === 'CLE (Campus Einaudi)') {
                    filtered = filtered.filter(r => r.id.includes('cle') || r.edificio.includes('Campus Luigi Einaudi'));
                } else if (selectedBuilding === 'Palazzo Nuovo') {
                    filtered = filtered.filter(r => r.id.includes('pn_') || r.edificio.includes('Palazzo Nuovo'));
                } else if (selectedBuilding === 'Molinette (Medicina)') {
                    filtered = filtered.filter(r => r.id.includes('molinette') || r.edificio.includes('Molinette'));
                } else if (selectedBuilding === 'Grugliasco (SAMEV)') {
                    filtered = filtered.filter(r => r.id.includes('grugliasco') || r.edificio.includes('Grugliasco'));
                } else if (selectedBuilding === 'Orbassano (San Luigi)') {
                    filtered = filtered.filter(r => r.id.includes('orbassano') || r.edificio.includes('San Luigi'));
                } else if (selectedBuilding === 'Sedi Regionali') {
                    filtered = filtered.filter(r =>
                        r.id.includes('cuneo') ||
                        r.id.includes('biella') ||
                        r.id.includes('alba') ||
                        r.id.includes('asti') ||
                        r.id.includes('savigliano') ||
                        r.id.includes('ivrea') ||
                        (r.university || '').includes('-')
                    );
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'polito') {
                if (selectedBuilding === 'Sede Centrale (Corso Duca)') {
                    filtered = filtered.filter(r => r.id.includes('centrale') || r.edificio.includes('Sede Centrale'));
                } else if (selectedBuilding === 'Cittadella (Lavori di Gruppo)') {
                    filtered = filtered.filter(r => r.id.includes('cittadella') || r.edificio.includes('Cittadella'));
                } else if (selectedBuilding === 'Valentino (Architettura)') {
                    filtered = filtered.filter(r => r.id.includes('valentino') || r.edificio.includes('Valentino') || r.edificio.includes('Castello'));
                } else if (selectedBuilding === 'Prese al Tavolo') {
                    filtered = filtered.filter(r => r.servizi.some(s => s.toLowerCase().includes('prese al tavolo')));
                } else if (selectedBuilding === 'Sedi Distaccate') {
                    filtered = filtered.filter(r =>
                        r.id.includes('alessandria') ||
                        r.id.includes('biella') ||
                        r.id.includes('mondovi') ||
                        r.id.includes('vercelli')
                    );
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'upo') {
                if (selectedBuilding === 'Novara') {
                    filtered = filtered.filter(r =>
                        r.id.includes('novara') || r.indirizzo.includes('Novara')
                    );
                } else if (selectedBuilding === 'Alessandria (Borsalino)') {
                    filtered = filtered.filter(r => r.id.includes('borsalino'));
                } else if (selectedBuilding === 'Alessandria (DiSIT)') {
                    filtered = filtered.filter(r => r.id.includes('disit'));
                } else if (selectedBuilding === 'Vercelli (Quiet & Historic)') {
                    filtered = filtered.filter(r =>
                        r.id.includes('vercelli') || r.indirizzo.includes('Vercelli')
                    );
                } else if (selectedBuilding === 'Sedi Distaccate') {
                    filtered = filtered.filter(r =>
                        r.id.includes('asti') ||
                        r.id.includes('biella') ||
                        r.id.includes('verbania')
                    );
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'afam_piemonte') {
                if (selectedBuilding === 'Torino (Albertina & Verdi)') {
                    filtered = filtered.filter(r =>
                        r.id.includes('albertina') || r.id.includes('verdi')
                    );
                } else if (selectedBuilding === 'Design Hub (IED & IAAD)') {
                    filtered = filtered.filter(r =>
                        r.id.includes('ied') || r.id.includes('iaad')
                    );
                } else if (selectedBuilding === 'Conservatori Provincia') {
                    filtered = filtered.filter(r =>
                        r.id.includes('cons_vivaldi') || r.id.includes('cons_cantelli') || r.id.includes('cons_ghedini')
                    );
                } else if (selectedBuilding === 'Digital Art (ACME)') {
                    filtered = filtered.filter(r => r.id.includes('acme'));
                } else if (selectedBuilding === 'Prese Elettriche') {
                    filtered = filtered.filter(r =>
                        r.servizi.some(s => s.toLowerCase().includes('prese'))
                    );
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'uniba') {
                if (selectedBuilding === 'Centro Storico') {
                    filtered = filtered.filter(r =>
                        r.indirizzo.includes('Umberto') ||
                        r.indirizzo.includes('Battisti') ||
                        r.indirizzo.includes('Torretta')
                    );
                } else if (selectedBuilding === 'Campus (Orabona)') {
                    filtered = filtered.filter(r =>
                        r.indirizzo.includes('Orabona') ||
                        r.indirizzo.includes('Amendola')
                    );
                } else if (selectedBuilding === 'Poggiofranco') {
                    filtered = filtered.filter(r =>
                        r.indirizzo.includes('Scolastica')
                    );
                } else if (selectedBuilding === 'Policlinico') {
                    filtered = filtered.filter(r =>
                        r.indirizzo.includes('Giulio Cesare')
                    );
                } else if (selectedBuilding === 'Valenzano') {
                    filtered = filtered.filter(r =>
                        r.indirizzo.includes('Valenzano')
                    );
                } else if (selectedBuilding === 'Taranto') {
                    filtered = filtered.filter(r =>
                        r.indirizzo.includes('Taranto') ||
                        (r.university || '').includes('Taranto')
                    );
                } else if (selectedBuilding === 'Brindisi') {
                    filtered = filtered.filter(r =>
                        r.indirizzo.includes('Brindisi') ||
                        (r.university || '').includes('Brindisi')
                    );
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'poliba') {
                if (selectedBuilding === 'Biblioteche') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('Biblioteca') || r.nome.toLowerCase().includes('biblioteca')
                    );
                } else if (selectedBuilding === 'Aule Studio') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('Aula Studio') || r.nome.toLowerCase().includes('aule studio')
                    );
                } else if (selectedBuilding === 'Laboratori') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('Laboratorio') || r.nome.toLowerCase().includes('laborator')
                    );
                } else if (selectedBuilding === 'Campus') {
                    filtered = filtered.filter(r =>
                        r.indirizzo.includes('Orabona') || r.tags?.includes('Campus')
                    );
                } else if (selectedBuilding === 'Taranto') {
                    filtered = filtered.filter(r =>
                        r.indirizzo.includes('Taranto') ||
                        (r.university || '').includes('Taranto') ||
                        r.tags?.includes('Taranto')
                    );
                } else if (selectedBuilding === 'Architettura') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('Architettura') ||
                        r.nome.includes('DICAR') ||
                        r.nome.includes('Architettura') ||
                        r.servizi.some(s => s.toLowerCase().includes('tavoli grandi'))
                    );
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'unisalento') {
                if (selectedBuilding === 'Centro Storico') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('Centro Storico') ||
                        r.indirizzo.includes('Valesio') ||
                        r.indirizzo.includes('San Nicola') ||
                        r.indirizzo.includes('Università') ||
                        r.id.includes('bernardini')
                    );
                } else if (selectedBuilding === 'Ecotekne') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('Ecotekne') ||
                        r.indirizzo.includes('Monteroni') ||
                        r.indirizzo.includes('Ecotekne') ||
                        (r.university || '').includes('Ecotekne')
                    );
                } else if (selectedBuilding === 'Brindisi') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('Brindisi') ||
                        r.indirizzo.includes('Brindisi') ||
                        r.indirizzo.includes('Appia') ||
                        (r.university || '').includes('Brindisi')
                    );
                } else if (selectedBuilding === 'Biblioteche') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('Biblioteca') ||
                        r.tags?.includes('Biblioteca Civica') ||
                        r.nome.toLowerCase().includes('biblioteca')
                    );
                } else if (selectedBuilding === 'Aria Condizionata') {
                    filtered = filtered.filter(r =>
                        r.servizi.some(s => s.toLowerCase().includes('aria condizionata'))
                    );
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'unifg') {
                if (selectedBuilding === 'Centro Storico') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('Centro Storico') ||
                        r.indirizzo.includes('Arpi')
                    );
                } else if (selectedBuilding === 'Semi-Centro') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('Semi-Centro') ||
                        r.indirizzo.includes('Papa Giovanni') ||
                        r.indirizzo.includes('Caggese') ||
                        r.id.includes('magna_capitana')
                    );
                } else if (selectedBuilding === 'Periferia') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('Periferia') ||
                        r.indirizzo.includes('Napoli') ||
                        r.indirizzo.includes('Pinto')
                    );
                } else if (selectedBuilding === 'Poli Distaccati') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('Polo Distaccato') ||
                        (r.university || '').includes('-')
                    );
                } else if (selectedBuilding === 'Lavoro di Gruppo') {
                    filtered = filtered.filter(r =>
                        r.servizi.some(s => s.toLowerCase().includes('lavoro di gruppo') || s.toLowerCase().includes('group work'))
                    );
                } else if (selectedBuilding === 'Biblioteche') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('Biblioteca') ||
                        r.tags?.includes('Biblioteca Civica') ||
                        r.nome.toLowerCase().includes('biblioteca')
                    );
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else if (university?.id === 'afamPuglia') {
                if (selectedBuilding === 'Accademie') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('Accademia') || r.id.startsWith('aba_')
                    );
                } else if (selectedBuilding === 'Conservatori') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('Conservatorio') || r.id.startsWith('cons_')
                    );
                } else if (selectedBuilding === 'Sporco Tollerato') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('🧱 Sporco Tollerato') ||
                        r.servizi.some(s => s.toLowerCase().includes('sporco tollerato'))
                    );
                } else if (selectedBuilding === 'Tavoli Grandi') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('📐 Tavoli Grandi') ||
                        r.servizi.some(s => s.toLowerCase().includes('tavoli grandi'))
                    );
                } else if (selectedBuilding === 'Sale Prova') {
                    filtered = filtered.filter(r =>
                        r.tags?.includes('🎹 Sale Prova') ||
                        r.servizi.some(s => s.toLowerCase().includes('sale prova'))
                    );
                } else {
                    filtered = filtered.filter(room =>
                        room.edificio.includes(selectedBuilding) ||
                        room.indirizzo.includes(selectedBuilding)
                    );
                }
            } else {
                // For others, direct match or substring in Edificio OR Indirizzo (more robust)
                filtered = filtered.filter(room =>
                    room.edificio.includes(selectedBuilding) ||
                    room.indirizzo.includes(selectedBuilding)
                );
            }
        }

        const withDistance: StudyRoomWithDistance[] = filtered.map(r => {
            if (userLocation) {
                const distance = haversineDistance(userLocation.coords, { latitude: r.latitude, longitude: r.longitude });
                return { ...r, distance };
            }
            return r;
        });

        if (sortType === 'distance' && userLocation) {
            return withDistance.sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity));
        }
        return withDistance.sort((a, b) => a.nome.localeCompare(b.nome));
    }, [studyRooms, selectedBuilding, searchQuery, showFavorites, favoriteRooms, userLocation, sortType, university]);

    const roomsToDisplay = useMemo(() => filteredRooms.slice(0, displayedItems), [filteredRooms, displayedItems]);

    useEffect(() => { setDisplayedItems(ITEMS_PER_PAGE); }, [selectedBuilding, searchQuery, showFavorites, sortType]);

    const handleLoadMore = useCallback(() => {
        if (isLoadingMore || displayedItems >= filteredRooms.length) return;
        setIsLoadingMore(true);
        setTimeout(() => {
            setDisplayedItems(prev => Math.min(prev + ITEMS_PER_PAGE, filteredRooms.length));
            setIsLoadingMore(false);
        }, 300);
    }, [isLoadingMore, displayedItems, filteredRooms.length]);

    const isOpen = useCallback((apertura?: string, chiusura?: string) => {
        // Handle missing or special values gracefully
        if (!apertura || !chiusura) return false;
        if (apertura.toUpperCase() === 'H24' || chiusura.toUpperCase() === 'H24') return true;

        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();
        const [aperturaOre, aperturaMin] = apertura.split(':').map(Number);
        const [chiusuraOre, chiusuraMin] = chiusura.split(':').map(Number);
        return currentTime >= (aperturaOre * 60 + aperturaMin) && currentTime <= (chiusuraOre * 60 + chiusuraMin);
    }, []);

    const handleMarkerPress = (room: StudyRoom) => {
        mapRef.current?.animateToRegion({
            latitude: room.latitude,
            longitude: room.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }, 500);
    };

    const renderStudyRoom = useCallback(({ item }: { item: StudyRoomWithDistance }) => (
        <StudyRoomCard
            studyRoom={item}
            isOpen={isOpen(item.orarioApertura, item.orarioChiusura)}
            onPress={() => navigation.navigate('RoomDetail', {
                room: item,
                primaryColor: university?.color,
                darkColor: university?.darkColor
            })}
            isFavorite={favoriteRooms.has(item.id)}
            onToggleFavorite={toggleFavorite}
            primaryColor={university?.color}
            distance={item.distance}
        />
    ), [isOpen, navigation, favoriteRooms, toggleFavorite, university]);

    const statistics = useMemo(() => {
        const totalCapacity = filteredRooms.reduce((sum, room) => sum + room.postiTotali, 0);
        return { totalAvailable: 0, totalCapacity };
    }, [filteredRooms]);

    const ListHeaderComponent = useCallback(() => (
        <>
            <View style={styles.statsContainer}>
                <View style={styles.statCard}>
                    <Ionicons name="library-outline" size={24} color={university?.color || "#10b981"} />
                    <Text style={[styles.statValue, { color: university?.color }]}>{filteredRooms.length}</Text>
                    <Text style={styles.statLabel}>Aule Aperte</Text>
                </View>
                <View style={styles.statCard}>
                    <Ionicons name="people-outline" size={24} color="#3b82f6" />
                    <Text style={styles.statValue}>{statistics.totalCapacity}</Text>
                    <Text style={styles.statLabel}>Posti Totali</Text>
                </View>
            </View>

            {university && (
                <SmartWeatherCard
                    city={university.city.split('/')[0].trim()}
                    latitude={university.region.latitude}
                    longitude={university.region.longitude}
                    accentColor={university.color}
                    onFilterSelect={(filter) => {
                        setShowFavorites(false);
                        setSelectedBuilding(filter === 'Outdoor' ? '☀️ All\'Aperto' : '🏠 Al Coperto');
                    }}
                />
            )}

            <Animated.View style={[styles.section, { paddingHorizontal: 16, opacity: filtersAnim, transform: [{ translateY: filtersAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }] }]}>
                <Text style={styles.sectionTitle}>Filtra per Edificio</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.buildingSelector}>
                    <TouchableOpacity
                        style={[
                            styles.buildingButton,
                            showFavorites && { backgroundColor: university?.color, borderColor: university?.color }
                        ]}
                        onPress={() => { setShowFavorites(true); setSelectedBuilding('Tutti'); setSearchQuery(''); }}
                    >
                        <Ionicons name="heart" size={14} color={showFavorites ? "#ffffff" : "#f50f0bff"} style={{ marginRight: 4 }} />
                        <Text style={[styles.buildingButtonText, showFavorites && styles.selectedBuildingButtonText]}>
                            Preferiti
                        </Text>
                    </TouchableOpacity>
                    {university?.availableFilters.map((edificio) => (
                        <TouchableOpacity
                            key={edificio}
                            style={[
                                styles.buildingButton,
                                selectedBuilding === edificio && !showFavorites && { backgroundColor: university.color, borderColor: university.color }
                            ]}
                            onPress={() => { setSelectedBuilding(edificio); setShowFavorites(false); setSearchQuery(''); }}
                        >
                            <Text style={[styles.buildingButtonText, selectedBuilding === edificio && !showFavorites && styles.selectedBuildingButtonText]}>
                                {edificio}
                            </Text>
                        </TouchableOpacity>
                    )) || <Text>Caricamento filtri...</Text>}
                </ScrollView>
            </Animated.View>

            <View style={styles.mapContainer}>
                <MapView
                    ref={mapRef}
                    style={styles.mapView}
                    initialRegion={university?.region}
                    showsUserLocation={true}
                    scrollEnabled={true}
                    zoomEnabled={true}
                    pitchEnabled={false}
                    rotateEnabled={false}
                >
                    {filteredRooms.map((room) => (
                        <Marker
                            key={room.id}
                            coordinate={{ latitude: room.latitude, longitude: room.longitude }}
                            onPress={() => handleMarkerPress(room)}
                        >
                            <View style={[styles.markerContainer, { backgroundColor: university?.color || '#10b981' }]}>
                                <Ionicons name="school" size={16} color="#ffffff" />
                            </View>
                            <Callout tooltip onPress={() => {
                                Alert.alert(
                                    "Come vuoi procedere?",
                                    "Scegli come visualizzare le indicazioni",
                                    [
                                        {
                                            text: "Annulla",
                                            style: "cancel"
                                        },
                                        {
                                            text: "Vedi in App",
                                            onPress: () => navigation.navigate('RoomDetail', {
                                                room,
                                                primaryColor: university?.color,
                                                darkColor: university?.darkColor
                                            })
                                        },
                                        {
                                            text: "Apri Mappe",
                                            onPress: () => {
                                                const url = Platform.select({
                                                    ios: `http://maps.apple.com/?daddr=${room.latitude},${room.longitude}`,
                                                    android: `google.navigation:q=${room.latitude},${room.longitude}`
                                                });
                                                if (url) Linking.openURL(url);
                                            }
                                        }
                                    ]
                                );
                            }}>
                                <View style={styles.calloutContainer}>
                                    <Text style={styles.calloutTitle}>{room.nome}</Text>
                                    <Text style={styles.calloutDescription}>{room.edificio}</Text>
                                    <View style={[styles.calloutButton, { backgroundColor: university?.color }]}>
                                        <Text style={styles.calloutButtonText}>Vedi Indicazioni</Text>
                                    </View>
                                </View>
                            </Callout>
                        </Marker>
                    ))}
                </MapView>
            </View>

            <Animated.View style={[styles.section, { paddingHorizontal: 16, opacity: sortButtonsAnim }]}>
                <Text style={styles.sectionTitle}>Ordina per</Text>
                <View style={styles.sortContainer}>
                    <TouchableOpacity
                        style={[styles.sortButton, sortType === 'name' && { backgroundColor: university?.color }]}
                        onPress={() => setSortType('name')}>
                        <Ionicons name="text" size={18} color={sortType === 'name' ? '#ffffff' : '#6b7280'} />
                        <Text style={[styles.sortButtonText, sortType === 'name' && styles.selectedSortButtonText]}>Nome</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.sortButton,
                            sortType === 'distance' && { backgroundColor: university?.color },
                            !userLocation && styles.disabledSortButton
                        ]}
                        onPress={() => setSortType('distance')}
                        disabled={!userLocation}
                    >
                        <Ionicons name="navigate" size={18} color={sortType === 'distance' ? '#ffffff' : '#6b7280'} />
                        <Text style={[styles.sortButtonText, sortType === 'distance' && styles.selectedSortButtonText]}>Distanza</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>

            <View style={[styles.section, { paddingHorizontal: 16 }]}>
                <Text style={styles.sectionTitle}>{selectedBuilding === 'Tutti' ? 'Tutte le Aule' : selectedBuilding}</Text>
                <Text style={styles.countText}>Mostrando {roomsToDisplay.length} di {filteredRooms.length} aule</Text>
            </View>
        </>
    ), [filteredRooms, statistics, selectedBuilding, roomsToDisplay.length, sortType, userLocation, university, headerAnim, searchBarAnim, filtersAnim, sortButtonsAnim]);

    const primaryColor = university?.color || '#10b981';
    const darkColor = university?.darkColor || '#059669';

    const unifiedHeader = useMemo(() => {
        if (!university) return null;
        return (
            <View>
                <LinearGradient colors={[primaryColor, darkColor]} style={styles.statusBarBg}>
                    <SafeAreaView edges={['top']}>
                        <Animated.View style={[styles.appBar, { opacity: headerAnim, transform: [{ translateY: headerAnim.interpolate({ inputRange: [0, 1], outputRange: [-20, 0] }) }] }]}>
                            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                                <Ionicons name="arrow-back" size={24} color="#ffffff" />
                            </TouchableOpacity>
                            <Text style={styles.appBarTitle}>{university.name}</Text>
                            <View style={styles.rightActions}>
                                <TouchableOpacity style={styles.iconButton} onPress={() => setGuideVisible(true)}>
                                    <Ionicons name="help-circle" size={24} color="#ffffff" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.iconButton} onPress={onRefresh}>
                                    <Ionicons name="refresh" size={24} color="#ffffff" />
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </SafeAreaView>
                </LinearGradient>

                {/* Search Bar - Outside FlatList header to prevent keyboard issues */}
                <Animated.View style={[styles.searchContainer, { opacity: searchBarAnim, transform: [{ scale: searchBarAnim }] }]}>
                    <Ionicons name="search" size={20} color="#9ca3af" style={styles.searchIcon} />
                    <TextInput
                        ref={searchInputRef}
                        style={styles.searchInput}
                        placeholder="Cerca un'aula studio..."
                        placeholderTextColor="#9ca3af"
                        defaultValue={searchQuery}
                        onChangeText={setSearchQuery}
                        autoCorrect={false}
                        autoCapitalize="none"
                        returnKeyType="search"
                        blurOnSubmit={true}
                    />
                    {searchQuery.length > 0 && (
                        <TouchableOpacity onPress={() => { setSearchQuery(''); if (searchInputRef.current) searchInputRef.current.clear(); }} style={styles.clearButton}>
                            <Ionicons name="close-circle" size={20} color="#9ca3af" />
                        </TouchableOpacity>
                    )}
                </Animated.View>

                <ListHeaderComponent />
            </View>
        );
    }, [university, headerAnim, ListHeaderComponent, primaryColor, darkColor, onRefresh]);

    if (!university) {
        return <View style={[styles.container, styles.center]}><ActivityIndicator size="large" color="#10b981" /></View>;
    }

    return (
        <View style={styles.container}>
            <FocusAwareStatusBar barStyle="light-content" backgroundColor={primaryColor} />

            <GuideCarousel isVisible={isGuideVisible} onClose={() => setGuideVisible(false)} topic="studyrooms" />

            <FlatList
                data={roomsToDisplay}
                renderItem={renderStudyRoom}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={unifiedHeader}
                ListFooterComponent={() => isLoadingMore ? <View style={styles.footerLoader}><ActivityIndicator size="small" color="#10b981" /><Text style={styles.footerText}>Caricamento...</Text></View> : null}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                initialNumToRender={10}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#10b981']} />}
                contentContainerStyle={[styles.contentContainer, { paddingBottom: Math.max(94, insets.bottom + 16) }]}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="always"
                keyboardDismissMode="none"
                removeClippedSubviews={false}
                extraData={searchQuery}
            />
        </View>
    );
};

/* ────────────────────────────────────────────────────────
 *  Premium Design System — Airbnb / Apple Maps aesthetic
 *  Design Tokens:
 *  · Background: #f8fafc (cool gray canvas)
 *  · Card Surface: #ffffff
 *  · Text Primary: #1e293b
 *  · Text Secondary: #64748b
 *  · Text Muted: #94a3b8
 *  · Border: #e2e8f0
 *  · Border Light: #f1f5f9
 *  · Radius Large: 16px  |  Medium: 12px  |  Full: 20px+
 *  · Shadow: layered soft shadows (#64748b based)
 * ──────────────────────────────────────────────────────── */
const styles = StyleSheet.create({
    /* ── Layout ── */
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        paddingBottom: 20,
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
        fontSize: 20,
        fontWeight: '800',
        color: '#ffffff',
        letterSpacing: 0.3,
    },
    rightActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    iconButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    /* ── Search Bar (floating, white, full-rounded) ── */
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 28,
        paddingHorizontal: 18,
        marginHorizontal: 16,
        marginTop: -6,
        marginBottom: 6,
        // Premium floating shadow
        shadowColor: '#64748b',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 16,
        elevation: 6,
        borderWidth: 1,
        borderColor: '#f1f5f9',
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 50,
        fontSize: 15,
        color: '#1e293b',
        fontWeight: '500',
    },
    clearButton: {
        padding: 6,
        marginLeft: 4,
    },

    /* ── Stats Cards ── */
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
        paddingHorizontal: 16,
        marginTop: 20,
    },
    statCard: {
        backgroundColor: '#ffffff',
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderRadius: 16,
        alignItems: 'center',
        flex: 1,
        // Elevated card shadow
        shadowColor: '#64748b',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 3,
        gap: 4,
    },
    statValue: {
        fontSize: 26,
        fontWeight: '800',
        color: '#1e293b',
        marginTop: 6,
        letterSpacing: -0.5,
    },
    statLabel: {
        fontSize: 12,
        color: '#94a3b8',
        marginTop: 2,
        textAlign: 'center',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },

    /* ── Section Layout ── */
    section: {
        marginTop: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1e293b',
        marginBottom: 14,
        letterSpacing: -0.2,
    },

    /* ── Filter Chips ── */
    buildingSelector: {
        marginHorizontal: -16,
        paddingHorizontal: 16,
    },
    buildingButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
        marginRight: 8,
        borderRadius: 24,
        backgroundColor: '#ffffff',
        borderWidth: 1.5,
        borderColor: '#e2e8f0',
        // Subtle chip shadow
        shadowColor: '#94a3b8',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 1,
    },
    selectedBuildingButton: {},
    buildingButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#475569',
    },
    selectedBuildingButtonText: {
        color: '#ffffff',
        fontWeight: '700',
    },

    /* ── Map ── */
    mapContainer: {
        height: 260,
        borderRadius: 20,
        overflow: 'hidden',
        marginTop: 24,
        marginHorizontal: 16,
        // Deep shadow for map depth
        shadowColor: '#475569',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 8,
        backgroundColor: '#e2e8f0',
    },
    mapView: {
        ...StyleSheet.absoluteFillObject,
    },
    markerContainer: {
        padding: 7,
        borderRadius: 20,
        borderWidth: 2.5,
        borderColor: '#ffffff',
        // Marker shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },
    calloutContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 14,
        padding: 14,
        width: 220,
        // Callout shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    calloutTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#1e293b',
        marginBottom: 3,
    },
    calloutDescription: {
        fontSize: 12,
        color: '#64748b',
        marginBottom: 10,
    },
    calloutButton: {
        borderRadius: 10,
        paddingVertical: 8,
        alignItems: 'center',
    },
    calloutButtonText: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 13,
    },

    /* ── Sort Toggles (segmented control) ── */
    sortContainer: {
        flexDirection: 'row',
        gap: 0,
        backgroundColor: '#f1f5f9',
        borderRadius: 14,
        padding: 4,
    },
    sortButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 11,
        gap: 6,
    },
    selectedSortButton: {},
    disabledSortButton: {
        opacity: 0.4,
    },
    sortButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#64748b',
    },
    selectedSortButtonText: {
        color: '#ffffff',
        fontWeight: '700',
    },

    /* ── Room List Label ── */
    countText: {
        fontSize: 13,
        color: '#94a3b8',
        marginTop: -8,
        marginBottom: 8,
        fontWeight: '500',
    },

    /* ── Footer ── */
    footerLoader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 24,
        gap: 10,
    },
    footerText: {
        fontSize: 14,
        color: '#94a3b8',
        fontWeight: '500',
    },
});

