import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface SmartWeatherCardProps {
    city: string;
    latitude: number;
    longitude: number;
    accentColor?: string;
    onFilterSelect: (filter: string) => void;
}

interface WeatherData {
    temperature: number;
    weathercode: number;
    windspeed: number;
}

/**
 * Decode WMO weathercode → human-readable + icon.
 * WMO Codes: https://open-meteo.com/en/docs
 */
const decodeWeather = (code: number): { label: string; icon: keyof typeof Ionicons.glyphMap; isRainy: boolean } => {
    if (code <= 1) return { label: 'Sereno', icon: 'sunny-outline', isRainy: false };
    if (code <= 3) return { label: 'Parzialmente nuvoloso', icon: 'partly-sunny-outline', isRainy: false };
    if (code <= 48) return { label: 'Nuvoloso', icon: 'cloud-outline', isRainy: false };
    if (code <= 57) return { label: 'Pioggerellina', icon: 'rainy-outline', isRainy: true };
    if (code <= 67) return { label: 'Pioggia', icon: 'rainy-outline', isRainy: true };
    if (code <= 77) return { label: 'Neve', icon: 'snow-outline', isRainy: true };
    if (code <= 82) return { label: 'Acquazzone', icon: 'thunderstorm-outline', isRainy: true };
    if (code <= 86) return { label: 'Neve forte', icon: 'snow-outline', isRainy: true };
    return { label: 'Temporale', icon: 'thunderstorm-outline', isRainy: true };
};

export const SmartWeatherCard: React.FC<SmartWeatherCardProps> = ({
    city,
    latitude,
    longitude,
    accentColor = '#10b981',
    onFilterSelect,
}) => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let cancelled = false;
        const fetchWeather = async () => {
            try {
                setLoading(true);
                setError(false);
                const res = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
                );
                if (!res.ok) throw new Error('Network error');
                const data = await res.json();
                if (!cancelled && data.current_weather) {
                    setWeather({
                        temperature: Math.round(data.current_weather.temperature),
                        weathercode: data.current_weather.weathercode,
                        windspeed: data.current_weather.windspeed,
                    });
                }
            } catch {
                if (!cancelled) setError(true);
            } finally {
                if (!cancelled) setLoading(false);
            }
        };
        fetchWeather();
        return () => { cancelled = true; };
    }, [latitude, longitude]);

    if (loading) {
        return (
            <View style={styles.loadingCard}>
                <ActivityIndicator size="small" color={accentColor} />
                <Text style={styles.loadingText}>Caricamento meteo...</Text>
            </View>
        );
    }

    if (error || !weather) {
        return null; // Silently hide if API fails
    }

    const decoded = decodeWeather(weather.weathercode);
    const isWarm = weather.temperature > 20 && !decoded.isRainy;
    const isCold = weather.temperature < 18 || decoded.isRainy;

    // Dynamic theming
    const warmGradient: [string, string] = ['#fef3c7', '#ffedd5'];
    const coldGradient: [string, string] = ['#e0f2fe', '#ede9fe'];
    const gradient = isWarm ? warmGradient : coldGradient;
    const textColor = isWarm ? '#92400e' : '#1e3a5f';
    const iconColor = isWarm ? '#f59e0b' : '#3b82f6';
    const borderColor = isWarm ? '#fcd34d' : '#93c5fd';

    const emoji = isWarm ? '☀️' : (decoded.isRainy ? '🌧️' : '❄️');
    const message = isWarm
        ? `${weather.temperature}°C a ${city}. Giornata perfetta per studiare all'aperto!`
        : decoded.isRainy
            ? `${weather.temperature}°C e ${decoded.label.toLowerCase()}. Trova un posto caldo e al coperto!`
            : `${weather.temperature}°C a ${city}. Meglio restare al caldo dentro!`;

    const filterTarget = isWarm ? 'Outdoor' : 'Indoor';
    const actionLabel = isWarm ? 'Vedi spazi outdoor →' : 'Vedi spazi indoor →';

    return (
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => onFilterSelect(filterTarget)}
            style={styles.cardWrapper}
        >
            <LinearGradient
                colors={gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.card, { borderColor }]}
            >
                <View style={styles.row}>
                    <View style={[styles.iconCircle, { backgroundColor: isWarm ? '#fef9c3' : '#dbeafe' }]}>
                        <Ionicons name={decoded.icon} size={22} color={iconColor} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.mainText, { color: textColor }]}>
                            {emoji} {message}
                        </Text>
                        <Text style={[styles.actionText, { color: iconColor }]}>
                            {actionLabel}
                        </Text>
                    </View>
                    <Ionicons name="chevron-forward" size={18} color={iconColor} style={styles.chevron} />
                </View>
            </LinearGradient>
        </TouchableOpacity>
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
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    mainText: {
        fontSize: 13,
        fontWeight: '600',
        lineHeight: 18,
        marginBottom: 3,
    },
    actionText: {
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 0.3,
    },
    chevron: {
        marginLeft: 6,
        opacity: 0.6,
    },
    loadingCard: {
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 4,
        padding: 16,
        borderRadius: 16,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#f1f5f9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        shadowColor: '#64748b',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
    },
    loadingText: {
        fontSize: 12,
        color: '#94a3b8',
    },
});
