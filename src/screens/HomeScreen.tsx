import React, { useState, useMemo, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    StatusBar,
    Animated,
    Dimensions,
    ScrollView,
    Keyboard,
    Pressable,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList, University } from '../types';
import { universities } from '../data/universities';
import { StorageService } from '../services/storageService';
import { FocusAwareStatusBar } from '../components/FocusAwareStatusBar';
import { OnboardingCarousel } from '../components/OnboardingCarousel';
import AsyncStorage from '@react-native-async-storage/async-storage';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
    navigation: HomeScreenNavigationProp;
}

const { width } = Dimensions.get('window');

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('Tutti');
    const [scaleAnims] = useState(() => universities.map(() => new Animated.Value(1)));
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [favoriteUniversities, setFavoriteUniversities] = useState<Set<string>>(new Set());

    // Check if onboarding has been completed and load favorites
    useEffect(() => {
        const checkOnboarding = async () => {
            const completed = await AsyncStorage.getItem('onboarding_completed');
            if (completed !== 'true') {
                setShowOnboarding(true);
            }
        };
        const loadFavorites = async () => {
            const stored = await AsyncStorage.getItem('favorite_universities');
            if (stored) {
                setFavoriteUniversities(new Set(JSON.parse(stored)));
            }
        };
        checkOnboarding();
        loadFavorites();
    }, []);

    const handleOnboardingComplete = async () => {
        await AsyncStorage.setItem('onboarding_completed', 'true');
        setShowOnboarding(false);
    };

    const toggleFavorite = async (universityId: string) => {
        const newFavorites = new Set(favoriteUniversities);
        if (newFavorites.has(universityId)) {
            newFavorites.delete(universityId);
        } else {
            newFavorites.add(universityId);
        }
        setFavoriteUniversities(newFavorites);
        await AsyncStorage.setItem('favorite_universities', JSON.stringify(Array.from(newFavorites)));
    };

    const filteredUniversities = useMemo(() => {
        let result = universities;

        // Apply Favorites Filter
        if (selectedRegion === 'Preferiti') {
            result = result.filter(uni => favoriteUniversities.has(uni.id));
        }
        // Apply Region/City Filter
        else if (selectedRegion !== 'Tutti') {
            result = result.filter(uni => uni.regionName === selectedRegion);
        }

        // Apply Search Filter
        if (searchQuery.trim() !== '') {
            result = result.filter(
                (uni) =>
                    uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    uni.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    uni.city.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return result;
    }, [searchQuery, selectedRegion, favoriteUniversities]);

    const handleUniversitySelect = async (university: University) => {
        await StorageService.setSelectedUniversity(university.id);
        navigation.navigate('StudyRooms');
    };

    const onPressIn = (index: number) => {
        Animated.spring(scaleAnims[index], {
            toValue: 0.96,
            useNativeDriver: true,
        }).start();
    };

    const onPressOut = (index: number) => {
        Animated.spring(scaleAnims[index], {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    const renderUniversityItem = ({ item, index }: { item: University; index: number }) => {
        const scale = scaleAnims[index] || new Animated.Value(1);
        const isFavorite = favoriteUniversities.has(item.id);

        return (
            <Animated.View style={{ transform: [{ scale }] }}>
                <TouchableOpacity
                    style={styles.uniCard}
                    onPress={() => handleUniversitySelect(item)}
                    onPressIn={() => onPressIn(index)}
                    onPressOut={() => onPressOut(index)}
                    activeOpacity={0.9}
                >
                    <LinearGradient
                        colors={['#ffffff', '#f8fafc']}
                        style={styles.cardGradient}
                    >
                        <View style={styles.cardHeader}>
                            <View style={[styles.iconContainer, { backgroundColor: item.id === 'federico-ii' ? '#ecfdf5' : '#eff6ff' }]}>
                                <Ionicons name="school" size={28} color={item.color} />
                            </View>
                            <View style={styles.badgeContainer}>
                                <Text style={[styles.badgeText, { color: item.color }]}>
                                    {item.city}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.uniNameRow}>
                            <Text style={styles.uniAcronym}>{item.name}</Text>
                            <TouchableOpacity
                                onPress={(e) => {
                                    e.stopPropagation();
                                    toggleFavorite(item.id);
                                }}
                                style={styles.favoriteButtonInline}
                            >
                                <Ionicons
                                    name={isFavorite ? "star" : "star-outline"}
                                    size={24}
                                    color={isFavorite ? "#f59e0b" : "#9ca3af"}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.uniName} numberOfLines={2}>{item.fullName}</Text>

                        <View style={styles.divider} />

                        <View style={styles.cardFooter}>
                            <View style={styles.roomCount}>
                                <Ionicons name="library-outline" size={16} color="#64748b" />
                                <Text style={styles.roomCountText}>{item.studyRooms.length} Aule Studio</Text>
                            </View>
                            <View style={styles.arrowButton}>
                                <Ionicons name="arrow-forward" size={20} color={item.color} />
                            </View>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </Animated.View>
        )
    };

    return (
        <Pressable style={styles.container} onPress={Keyboard.dismiss}>
            <OnboardingCarousel
                isVisible={showOnboarding}
                onComplete={handleOnboardingComplete}
            />
            <FocusAwareStatusBar barStyle="light-content" backgroundColor="#10b981" />
            <LinearGradient
                colors={['#10b981', '#059669']}
                style={styles.headerBackground}
            >
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.headerContent}>
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.greeting}>Benvenuto in</Text>
                            <Text style={styles.appName}>UniStudy Italia</Text>
                        </View>
                        <View style={styles.headerIcons}>
                            <View style={styles.headerIcon}>
                                <Ionicons name="book" size={32} color="rgba(255,255,255,0.2)" />
                            </View>
                            <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('Settings')}>
                                <Ionicons name="settings-outline" size={24} color="#ffffff" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={styles.subtitle}>
                        Seleziona il tuo ateneo per trovare{'\n'}l'aula studio perfetta per te.
                    </Text>

                    <View style={styles.searchContainer}>
                        <Ionicons name="search" size={20} color="#94a3b8" style={styles.searchIcon} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Cerca università o città..."
                            placeholderTextColor="#94a3b8"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                        {searchQuery.length > 0 && (
                            <TouchableOpacity onPress={() => setSearchQuery('')}>
                                <Ionicons name="close-circle" size={20} color="#94a3b8" />
                            </TouchableOpacity>
                        )}
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <View style={styles.listContainer}>
                <View style={styles.filterContainer}>
                    <Text style={styles.sectionTitle}>Filtra per Regione</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.filterScrollViewContent}
                        style={styles.filterScrollView}
                    >
                        {[
                            'Preferiti', 'Tutti', 'Abruzzo', 'Basilicata', 'Calabria', 'Campania', 'Emilia-Romagna',
                            'Friuli-Venezia Giulia', 'Lazio', 'Liguria', 'Lombardia', 'Marche', 'Molise',
                            'Piemonte', 'Puglia', 'Sardegna', 'Sicilia', 'Toscana', 'Trentino-Alto Adige',
                            'Umbria', "Valle d'Aosta", 'Veneto'
                        ].map((region) => (
                            <TouchableOpacity
                                key={region}
                                style={[
                                    styles.filterChip,
                                    selectedRegion === region && styles.selectedFilterChip,
                                    region === 'Preferiti' && { backgroundColor: selectedRegion === 'Preferiti' ? '#f59e0b' : '#fffbeb', borderColor: selectedRegion === 'Preferiti' ? '#f59e0b' : '#fbbf24' }
                                ]}
                                onPress={() => setSelectedRegion(region)}
                            >
                                {region === 'Preferiti' && (
                                    <Ionicons
                                        name="star"
                                        size={14}
                                        color={selectedRegion === 'Preferiti' ? '#ffffff' : '#f59e0b'}
                                        style={{ marginRight: 4 }}
                                    />
                                )}
                                <Text style={[
                                    styles.filterChipText,
                                    selectedRegion === region && styles.selectedFilterChipText
                                ]}>
                                    {region}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.listHeaderDecorator} />

                {selectedRegion === 'Lombardia' && (
                    <View style={styles.tipCard}>
                        <LinearGradient
                            colors={['#3b82f6', '#2563eb']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.tipGradient}
                        >
                            <View style={styles.tipContent}>
                                <View style={styles.tipIconContainer}>
                                    <Ionicons name="bulb" size={24} color="#fbbf24" />
                                </View>
                                <View style={styles.tipTextContainer}>
                                    <Text style={styles.tipTitle}>Non trovi posto in biblioteca?</Text>
                                    <Text style={styles.tipDescription}>
                                        Al PoliMi, cerca un'aula libera negli Edifici 11 (Leonardo) o B12 (Bovisa)!
                                    </Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                )}

                <FlatList
                    data={filteredUniversities}
                    renderItem={renderUniversityItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <View style={styles.emptyContainer}>
                            <Ionicons name="search-outline" size={48} color="#94a3b8" />
                            <Text style={styles.emptyText}>
                                Nessuna università trovata
                            </Text>
                        </View>
                    }
                />
            </View>
        </Pressable>
    );
};

/* ────────────────────────────────────────────────────────
 *  HomeScreen — Premium Design System
 *  Tokens: #f8fafc bg, #1e293b text, #64748b secondary,
 *  #94a3b8 muted, layered #64748b shadows
 * ──────────────────────────────────────────────────────── */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },

    /* ── Header ── */
    headerBackground: {
        paddingBottom: 44,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    safeArea: {
        paddingHorizontal: 20,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 16,
    },
    headerTextContainer: {
        marginLeft: 16,
    },
    greeting: {
        fontSize: 15,
        color: 'rgba(255,255,255,0.8)',
        fontWeight: '600',
        marginBottom: 4,
        letterSpacing: 0.2,
    },
    appName: {
        fontSize: 30,
        fontWeight: '800',
        color: '#ffffff',
        letterSpacing: -0.5,
    },
    headerIcon: {
        marginRight: 8,
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    settingsButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 4,
    },
    favoriteButtonContainer: {
        position: 'absolute',
        top: 8,
        right: 8,
    },
    favoriteButton: {
        padding: 6,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },

    /* ── Subtitle ── */
    subtitle: {
        fontSize: 15,
        color: 'rgba(255,255,255,0.85)',
        lineHeight: 22,
        marginBottom: 28,
        marginLeft: 16,
        marginRight: 16,
        fontWeight: '500',
    },

    /* ── Search Bar (floating, white, full-rounded) ── */
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: 52,
        borderRadius: 28,
        paddingHorizontal: 18,
        shadowColor: '#64748b',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 8,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        fontSize: 15,
        color: '#1e293b',
        fontWeight: '500',
    },

    /* ── List Container ── */
    listContainer: {
        flex: 1,
        marginTop: -28,
        backgroundColor: '#f8fafc',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
    },

    /* ── Region Filters ── */
    filterContainer: {
        paddingTop: 24,
        paddingBottom: 8,
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: '#94a3b8',
        marginBottom: 12,
        marginLeft: 24,
        textTransform: 'uppercase',
        letterSpacing: 0.8,
    },
    filterScrollView: {
        flexGrow: 0,
    },
    filterScrollViewContent: {
        paddingHorizontal: 20,
        gap: 8,
    },
    filterChip: {
        paddingVertical: 9,
        paddingHorizontal: 18,
        borderRadius: 24,
        backgroundColor: '#ffffff',
        borderWidth: 1.5,
        borderColor: '#e2e8f0',
        shadowColor: '#94a3b8',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 38,
    },
    selectedFilterChip: {
        backgroundColor: '#10b981',
        borderColor: '#10b981',
        shadowColor: '#10b981',
        shadowOpacity: 0.2,
    },
    filterChipText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#475569',
    },
    selectedFilterChipText: {
        color: '#ffffff',
        fontWeight: '700',
    },

    /* ── Spacer ── */
    listHeaderDecorator: {
        height: 12,
    },

    /* ── University Cards ── */
    listContent: {
        paddingHorizontal: 20,
        paddingBottom: 40,
        gap: 16,
    },
    uniCard: {
        borderRadius: 20,
        shadowColor: '#64748b',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 16,
        elevation: 5,
        marginBottom: 2,
    },
    cardGradient: {
        padding: 22,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#f1f5f9',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    iconContainer: {
        width: 52,
        height: 52,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeContainer: {
        backgroundColor: '#f1f5f9',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 20,
    },
    badgeText: {
        fontSize: 12,
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 0.3,
    },
    badgeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    favoriteButtonInline: {
        padding: 4,
    },
    uniNameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    uniAcronym: {
        fontSize: 26,
        fontWeight: '800',
        color: '#1e293b',
        marginBottom: 4,
        letterSpacing: -0.5,
    },
    uniName: {
        fontSize: 15,
        color: '#64748b',
        lineHeight: 21,
        marginBottom: 18,
        fontWeight: '500',
    },
    divider: {
        height: 1,
        backgroundColor: '#f1f5f9',
        marginBottom: 14,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    roomCount: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    roomCountText: {
        color: '#64748b',
        fontWeight: '600',
        fontSize: 14,
    },
    arrowButton: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: '#f1f5f9',
        justifyContent: 'center',
        alignItems: 'center',
    },

    /* ── Empty State ── */
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        gap: 16,
    },
    emptyText: {
        fontSize: 16,
        color: '#94a3b8',
        fontWeight: '600',
    },

    /* ── Tip Card ── */
    tipCard: {
        marginHorizontal: 20,
        marginBottom: 16,
        borderRadius: 20,
        shadowColor: '#2563eb',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 6,
    },
    tipGradient: {
        borderRadius: 20,
        padding: 18,
    },
    tipContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    tipIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tipTextContainer: {
        flex: 1,
    },
    tipTitle: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 4,
    },
    tipDescription: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 13,
        lineHeight: 18,
    },
});
