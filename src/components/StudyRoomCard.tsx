import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StudyRoom } from '../types';

interface StudyRoomCardProps {
    studyRoom: StudyRoom;
    onPress: (room: StudyRoom) => void;
    isOpen: boolean;
    isFavorite?: boolean;
    onToggleFavorite?: (id: string) => void;
    primaryColor?: string;
    distance?: number;
}

export const StudyRoomCard = memo<StudyRoomCardProps>(
    ({ studyRoom, onPress, isOpen, isFavorite = false, onToggleFavorite, primaryColor = '#10b981', distance }) => {

        const handleOpenMaps = () => {
            const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
            const latLng = `${studyRoom.latitude},${studyRoom.longitude}`;
            const label = studyRoom.nome;
            const url = Platform.select({
                ios: `${scheme}${label}@${latLng}`,
                android: `${scheme}${latLng}(${label})`
            });

            if (url) {
                Linking.openURL(url);
            }
        };

        return (
            <TouchableOpacity style={styles.roomCard} onPress={() => onPress(studyRoom)} activeOpacity={0.9}>
                <View style={styles.roomHeader}>
                    <View style={styles.roomInfo}>
                        <Text style={styles.roomName}>{studyRoom.nome}</Text>
                        {studyRoom.tags && studyRoom.tags.length > 0 && (
                            <View style={styles.tagsRow}>
                                {studyRoom.tags.slice(0, 2).map((tag, idx) => (
                                    <View key={idx} style={styles.tagBadge}>
                                        <Text style={styles.tagText}>{tag}</Text>
                                    </View>
                                ))}
                            </View>
                        )}
                        <View style={styles.locationRow}>
                            <Ionicons name="location" size={14} color="#6b7280" />
                            <Text style={styles.locationText} numberOfLines={1}>
                                {studyRoom.edificio} - Piano {studyRoom.piano}{distance !== undefined ? ` • ${distance} km` : ''}
                            </Text>
                        </View>
                        {distance !== undefined && (
                            <View style={styles.distanceBadge}>
                                <Ionicons name="navigate-outline" size={12} color={primaryColor} />
                                <Text style={[styles.distanceBadgeText, { color: primaryColor }]}>{distance} km da te</Text>
                            </View>
                        )}
                    </View>
                    <View style={styles.headerActions}>
                        <View style={styles.statusContainer}>
                            <View
                                style={[
                                    styles.statusDot,
                                    { backgroundColor: isOpen ? primaryColor : '#ef4444' },
                                ]}
                            />
                            <Text
                                style={[
                                    styles.statusText,
                                    { color: isOpen ? primaryColor : '#ef4444' },
                                ]}
                            >
                                {isOpen ? 'Aperto' : 'Chiuso'}
                            </Text>
                        </View>
                        {studyRoom.orarioChiusura >= '23:00' && (
                            <View style={[styles.badgeContainer, { backgroundColor: '#e0e7ff' }]}>
                                <Text style={[styles.badgeText, { color: '#4338ca' }]}>Fino alle 23</Text>
                            </View>
                        )}
                        {studyRoom.extendedHours && (
                            <View style={[styles.badgeContainer, { backgroundColor: '#eff6ff' }]}>
                                <Text style={[styles.badgeText, { color: '#1d4ed8' }]}>Orario Esteso</Text>
                            </View>
                        )}
                        {studyRoom.servizi.includes('Aperto Domenica') && (
                            <View style={[styles.badgeContainer, { backgroundColor: '#fdf4ff' }]}>
                                <Text style={[styles.badgeText, { color: '#a21caf' }]}>Dom</Text>
                            </View>
                        )}
                        {studyRoom.servizi.some(s => s.toLowerCase().includes('affluences')) && (
                            <View style={[styles.badgeContainer, { backgroundColor: '#fff7ed' }]}>
                                <Text style={[styles.badgeText, { color: '#c2410c' }]}>Prenotazione</Text>
                            </View>
                        )}
                        {studyRoom.servizi.some(s => s.toLowerCase().includes('h24') || s.includes('24 ore')) && (
                            <View style={[styles.badgeContainer, { backgroundColor: '#dcfce7' }]}>
                                <Text style={[styles.badgeText, { color: '#15803d' }]}>H24</Text>
                            </View>
                        )}
                        {onToggleFavorite && (
                            <TouchableOpacity onPress={() => onToggleFavorite(studyRoom.id)} style={styles.favButton}>
                                <Ionicons name={isFavorite ? "star" : "star-outline"} size={22} color={isFavorite ? "#eab308" : "#9ca3af"} />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                <View style={styles.detailsRow}>
                    <View style={styles.capacityContainer}>
                        <Ionicons name="people" size={16} color="#6b7280" />
                        <Text style={styles.capacityText}>
                            Capienza: {studyRoom.postiTotali} posti
                        </Text>
                    </View>

                    <View style={styles.scheduleContainer}>
                        <Ionicons name="time" size={16} color="#6b7280" />
                        <Text style={styles.scheduleText}>
                            {studyRoom.orarioApertura} - {studyRoom.orarioChiusura}
                        </Text>
                    </View>
                </View>

                <View style={styles.servicesContainer}>
                    <Text style={styles.servicesTitle}>Servizi:</Text>
                    <View style={styles.servicesList}>
                        {studyRoom.servizi.slice(0, 3).map((servizio, index) => (
                            <View key={index} style={styles.serviceTag}>
                                <Text style={styles.serviceText} numberOfLines={1}>
                                    {servizio}
                                </Text>
                            </View>
                        ))}
                        {studyRoom.servizi.length > 3 && (
                            <View style={styles.serviceTag}>
                                <Text style={styles.serviceText}>+{studyRoom.servizi.length - 3}</Text>
                            </View>
                        )}
                    </View>
                </View>

                <TouchableOpacity style={[styles.mapsButton, { backgroundColor: primaryColor }]} onPress={handleOpenMaps}>
                    <Ionicons name="map" size={16} color="#ffffff" />
                    <Text style={styles.mapsButtonText}>Come Arrivare</Text>
                </TouchableOpacity>

            </TouchableOpacity>
        );
    },
    (prevProps, nextProps) => {
        return (
            prevProps.studyRoom.id === nextProps.studyRoom.id &&
            prevProps.isOpen === nextProps.isOpen &&
            prevProps.isFavorite === nextProps.isFavorite &&
            prevProps.distance === nextProps.distance
        );
    }
);

StudyRoomCard.displayName = 'StudyRoomCard';

const styles = StyleSheet.create({
    distanceBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginTop: 4,
        backgroundColor: '#f0fdf4',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },
    distanceBadgeText: {
        fontSize: 12,
        fontWeight: '600',
    },
    roomCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    roomHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        alignItems: 'flex-start',
    },
    roomInfo: {
        flex: 1,
        marginRight: 12,
    },
    headerActions: {
        alignItems: 'flex-end',
        gap: 6,
        paddingLeft: 4, // Prevent overlap with text on small screens
    },
    roomName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 4,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    locationText: {
        fontSize: 13,
        color: '#6b7280',
        flex: 1,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    statusDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    statusText: {
        fontSize: 12,
        fontWeight: '600',
    },
    badgeContainer: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 8,
        marginTop: 4,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    favButton: {
        padding: 4,
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 16,
        marginBottom: 12,
        flexWrap: 'wrap',
    },
    capacityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    capacityText: {
        fontSize: 14,
        color: '#374151',
    },
    scheduleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    scheduleText: {
        fontSize: 14,
        color: '#374151',
    },
    servicesContainer: {
        marginTop: 4,
        marginBottom: 16,
    },
    servicesTitle: {
        fontSize: 13,
        fontWeight: '600',
        color: '#6b7280',
        marginBottom: 8,
    },
    servicesList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
    },
    tagsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        marginBottom: 6,
    },
    tagBadge: {
        backgroundColor: '#eff6ff',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#bfdbfe',
    },
    tagText: {
        fontSize: 11,
        color: '#1e3a8a',
        fontWeight: '600',
    },
    serviceTag: {
        backgroundColor: '#f3f4f6',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
    },
    serviceText: {
        fontSize: 12,
        color: '#4b5563',
    },
    mapsButton: {
        backgroundColor: '#10b981',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        gap: 8,
    },
    mapsButtonText: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 14,
    }
});
