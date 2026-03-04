import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

interface OnboardingSlide {
    id: string;
    icon: any;
    title: string;
    description: string;
    gradient: [string, string];
}

const slides: OnboardingSlide[] = [
    {
        id: '1',
        icon: 'book',
        title: 'Benvenuto in UniStudy Italia',
        description: 'L\'alleato perfetto per ogni studente. Trova il tuo posto ideale per studiare in tutta Italia.',
        gradient: ['#10b981', '#059669'],
    },
    {
        id: '2',
        icon: 'school',
        title: 'Oltre 100 Atenei',
        description: 'Da Nord a Sud, abbiamo mappato i principali atenei. Seleziona la tua università e scopri tutte le sedi.',
        gradient: ['#3b82f6', '#2563eb'],
    },
    {
        id: '3',
        icon: 'time',
        title: 'Orari Live e Filtri',
        description: 'Vedi all\'istante se un\'aula è aperta. Filtra per edificio o ordina per distanza dalla tua posizione.',
        gradient: ['#8b5cf6', '#7c3aed'],
    },
    {
        id: '4',
        icon: 'navigate',
        title: 'Navigazione Semplice',
        description: 'Ottieni indicazioni precise (bus, metro, treno) o apri le mappe per non perdere neanche un minuto.',
        gradient: ['#f59e0b', '#d97706'],
    },
    {
        id: '5',
        icon: 'color-palette',
        title: 'Preferiti e Colori',
        description: 'Salva le tue aule del cuore. L\'interfaccia cambierà colore per abbinarsi alla tua università!',
        gradient: ['#ec4899', '#db2777'],
    },
    {
        id: '6',
        icon: 'hardware-chip-outline',
        title: 'Strumenti Smart',
        description: 'Meteo in tempo reale per scegliere sempre il posto migliore dove studiare, al chiuso o all\'aperto.',
        gradient: ['#6366f1', '#4f46e5'],
    },
];

interface OnboardingCarouselProps {
    isVisible: boolean;
    onComplete: () => void;
}

export const OnboardingCarousel: React.FC<OnboardingCarouselProps> = ({ isVisible, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const insets = useSafeAreaInsets();

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
            setCurrentIndex(currentIndex + 1);
        } else {
            onComplete();
        }
    };

    const handleSkip = () => {
        onComplete();
    };

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const renderSlide = ({ item }: { item: OnboardingSlide }) => (
        <View style={[styles.slide, { width }]}>
            <LinearGradient colors={item.gradient} style={styles.slideGradient}>
                <View style={styles.iconContainer}>
                    <Ionicons name={item.icon} size={80} color="rgba(255,255,255,0.95)" />
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </LinearGradient>
        </View>
    );

    const renderPagination = () => (
        <View style={styles.paginationContainer}>
            {slides.map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.paginationDot,
                        currentIndex === index && styles.paginationDotActive,
                    ]}
                />
            ))}
        </View>
    );

    return (
        <Modal visible={isVisible} animationType="fade" statusBarTranslucent>
            <View style={styles.container}>
                <FlatList
                    ref={flatListRef}
                    data={slides}
                    renderItem={renderSlide}
                    keyExtractor={(item) => item.id}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={onViewableItemsChanged}
                    viewabilityConfig={viewabilityConfig}
                    scrollEventThrottle={16}
                />

                {renderPagination()}

                <View style={[styles.buttonsContainer, { paddingBottom: insets.bottom + 24 }]}>
                    <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
                        <Text style={styles.skipButtonText}>Salta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
                        <LinearGradient
                            colors={['#ffffff', '#f8fafc']}
                            style={styles.nextButtonGradient}
                        >
                            <Text style={styles.nextButtonText}>
                                {currentIndex === slides.length - 1 ? 'Inizia' : 'Avanti'}
                            </Text>
                            <Ionicons
                                name={currentIndex === slides.length - 1 ? 'checkmark' : 'arrow-forward'}
                                size={20}
                                color="#10b981"
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10b981',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideGradient: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    iconContainer: {
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: 'rgba(255,255,255,0.15)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 16,
        letterSpacing: -0.5,
    },
    description: {
        fontSize: 17,
        color: 'rgba(255,255,255,0.9)',
        textAlign: 'center',
        lineHeight: 26,
        paddingHorizontal: 20,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 120,
        left: 0,
        right: 0,
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255,0.4)',
        marginHorizontal: 6,
    },
    paginationDotActive: {
        backgroundColor: '#ffffff',
        width: 28,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
    },
    skipButton: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    skipButtonText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 16,
        fontWeight: '600',
    },
    nextButton: {
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
    },
    nextButtonGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 30,
        gap: 8,
    },
    nextButtonText: {
        color: '#10b981',
        fontSize: 16,
        fontWeight: '700',
    },
});
