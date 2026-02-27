import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StudyRoom } from '../types';

/* ────────────────────────────────────────────────────────
 *  StudyRoomCard — Premium, Airbnb-style room card
 *  Design Philosophy:
 *  · Generous padding & white space for breathability
 *  · Soft shadows for a "floating" card feel
 *  · Clear visual hierarchy: Name → Location → Details → Tags
 *  · Dynamic primary color adapts to university theme
 *  · Tag pills with subtle pastel backgrounds
 * ──────────────────────────────────────────────────────── */

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
            if (url) Linking.openURL(url);
        };

        // Dynamic status colors
        const statusBg = isOpen ? `${primaryColor}15` : '#fef2f215';
        const statusColor = isOpen ? primaryColor : '#ef4444';

        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => onPress(studyRoom)}
                activeOpacity={0.92}
            >
                {/* ─── Top Row: Name + Status/Favorite ─── */}
                <View style={styles.topRow}>
                    <View style={styles.nameBlock}>
                        <Text style={styles.name} numberOfLines={2}>{studyRoom.nome}</Text>
                        <View style={styles.locationRow}>
                            <Ionicons name="location-outline" size={13} color="#94a3b8" />
                            <Text style={styles.locationText} numberOfLines={1}>
                                {studyRoom.edificio} · Piano {studyRoom.piano}
                            </Text>
                        </View>
                        {studyRoom.indirizzo && (
                            <Text style={styles.addressText} numberOfLines={1}>{studyRoom.indirizzo}</Text>
                        )}
                    </View>
                    <View style={styles.topActions}>
                        {/* Status Badge */}
                        <View style={[styles.statusBadge, { backgroundColor: statusBg }]}>
                            <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
                            <Text style={[styles.statusLabel, { color: statusColor }]}>
                                {isOpen ? 'Aperto' : 'Chiuso'}
                            </Text>
                        </View>
                        {/* Favorite Button */}
                        {onToggleFavorite && (
                            <TouchableOpacity
                                onPress={() => onToggleFavorite(studyRoom.id)}
                                style={styles.favButton}
                                hitSlop={{ top: 8, right: 8, bottom: 8, left: 8 }}
                            >
                                <Ionicons
                                    name={isFavorite ? "heart" : "heart-outline"}
                                    size={22}
                                    color={isFavorite ? "#ef4444" : "#cbd5e1"}
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                {/* ─── Divider ─── */}
                <View style={styles.divider} />

                {/* ─── Info Row: Capacity, Schedule, Distance ─── */}
                <View style={styles.infoRow}>
                    <View style={styles.infoItem}>
                        <Ionicons name="people-outline" size={15} color="#64748b" />
                        <Text style={styles.infoText}>{studyRoom.postiTotali} posti</Text>
                    </View>
                    <View style={styles.infoSeparator} />
                    <View style={styles.infoItem}>
                        <Ionicons name="time-outline" size={15} color="#64748b" />
                        <Text style={styles.infoText}>{studyRoom.orarioApertura} – {studyRoom.orarioChiusura}</Text>
                    </View>
                    {distance !== undefined && (
                        <>
                            <View style={styles.infoSeparator} />
                            <View style={styles.infoItem}>
                                <Ionicons name="navigate-outline" size={14} color={primaryColor} />
                                <Text style={[styles.infoText, { color: primaryColor, fontWeight: '600' }]}>{distance} km</Text>
                            </View>
                        </>
                    )}
                </View>

                {/* ─── Quick Badges (H24, Late night, Weekend, Booking) ─── */}
                {(studyRoom.orarioChiusura >= '23:00' ||
                    studyRoom.extendedHours ||
                    studyRoom.servizi.includes('Aperto Domenica') ||
                    studyRoom.servizi.some(s => s.toLowerCase().includes('h24') || s.includes('24 ore')) ||
                    studyRoom.servizi.some(s => s.toLowerCase().includes('affluences')) ||
                    studyRoom.tags?.some(tag => tag.includes('Fermata Sirio:')) ||
                    studyRoom.tags?.includes('✈️ Airport Mode') ||
                    studyRoom.occupancy_rate) && (
                        <View style={styles.badgesRow}>
                            {studyRoom.servizi.some(s => s.toLowerCase().includes('h24') || s.includes('24 ore')) && (
                                <View style={[styles.badge, { backgroundColor: '#dcfce7' }]}>
                                    <Text style={[styles.badgeLabel, { color: '#15803d' }]}>🌙 H24</Text>
                                </View>
                            )}
                            {studyRoom.orarioChiusura >= '23:00' && !studyRoom.servizi.some(s => s.toLowerCase().includes('h24')) && (
                                <View style={[styles.badge, { backgroundColor: '#e0e7ff' }]}>
                                    <Text style={[styles.badgeLabel, { color: '#4338ca' }]}>Fino alle {studyRoom.orarioChiusura}</Text>
                                </View>
                            )}
                            {studyRoom.extendedHours && (
                                <View style={[styles.badge, { backgroundColor: '#eff6ff' }]}>
                                    <Text style={[styles.badgeLabel, { color: '#1d4ed8' }]}>⏰ Esteso</Text>
                                </View>
                            )}
                            {studyRoom.servizi.includes('Aperto Domenica') && (
                                <View style={[styles.badge, { backgroundColor: '#fdf4ff' }]}>
                                    <Text style={[styles.badgeLabel, { color: '#a21caf' }]}>📅 Dom</Text>
                                </View>
                            )}
                            {studyRoom.servizi.some(s => s.toLowerCase().includes('affluences')) && (
                                <View style={[styles.badge, { backgroundColor: '#fff7ed' }]}>
                                    <Text style={[styles.badgeLabel, { color: '#c2410c' }]}>📋 Prenota</Text>
                                </View>
                            )}
                            {studyRoom.tags?.find(tag => tag.includes('Fermata Sirio:')) && (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={[styles.badge, { backgroundColor: '#f3e8ff', flexDirection: 'row', alignItems: 'center' }]}
                                    onPress={() => alert(`🚊 ${studyRoom.tags?.find(tag => tag.includes('Fermata Sirio:'))}\nLa metropolitana di superficie Sirio ti porta direttamente qui!`)}
                                >
                                    <Text style={[styles.badgeLabel, { color: '#7e22ce' }]}>🚊 {studyRoom.tags?.find(tag => tag.includes('Fermata Sirio:'))?.replace('Fermata Sirio: ', '')}</Text>
                                </TouchableOpacity>
                            )}
                            {studyRoom.tags?.includes('✈️ Airport Mode') && (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={[styles.badge, { backgroundColor: '#e0f2fe', flexDirection: 'row', alignItems: 'center' }]}
                                    onPress={() => alert(`✈️ Airport Mode Olbia\n\nMostra la tessera studenti Uniss ai bar dell'aeroporto per gli sconti universitari! ☕🥐\nPuoi controllare i maxischermi per lo stato del tuo volo.`)}
                                >
                                    <Text style={[styles.badgeLabel, { color: '#0369a1' }]}>✈️ Airport Lounge</Text>
                                </TouchableOpacity>
                            )}
                            {studyRoom.occupancy_rate && (
                                <View style={[styles.badge, {
                                    backgroundColor: studyRoom.occupancy_rate === 'Molto Alto' || studyRoom.occupancy_rate === 'Altissimo' ? '#fef2f2' :
                                        studyRoom.occupancy_rate === 'Alto' ? '#fff7ed' : '#f0fdf4'
                                }]}>
                                    <Text style={[styles.badgeLabel, {
                                        color: studyRoom.occupancy_rate === 'Molto Alto' || studyRoom.occupancy_rate === 'Altissimo' ? '#b91c1c' :
                                            studyRoom.occupancy_rate === 'Alto' ? '#c2410c' : '#15803d'
                                    }]}>📊 {studyRoom.occupancy_rate}</Text>
                                </View>
                            )}
                        </View>
                    )}

                {/* ─── Tags as Soft Pills ─── */}
                {studyRoom.tags && studyRoom.tags.filter(t => !t.includes('Fermata Sirio:') && !t.includes('Airport Mode')).length > 0 && (
                    <View style={styles.tagsContainer}>
                        {studyRoom.tags.filter(t => !t.includes('Fermata Sirio:') && !t.includes('Airport Mode')).map((tag, idx) => (
                            <View key={idx} style={styles.tagPill}>
                                <Text style={styles.tagPillText}>{tag}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {/* ─── Services as Mini Tags ─── */}
                <View style={styles.servicesContainer}>
                    {studyRoom.servizi.map((servizio, idx) => (
                        <View key={idx} style={styles.servicePill}>
                            <Text style={styles.servicePillText} numberOfLines={1}>{servizio}</Text>
                        </View>
                    ))}
                </View>

                {/* ─── Action Button ─── */}
                <TouchableOpacity
                    style={[styles.actionButton, { backgroundColor: primaryColor }]}
                    onPress={handleOpenMaps}
                    activeOpacity={0.85}
                >
                    <Ionicons name="navigate-outline" size={16} color="#ffffff" />
                    <Text style={styles.actionButtonText}>Come Arrivare</Text>
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

/* ────────────────────────────────────────────────────────
 *  Styles — Premium Design System
 *  · Consistent 16px border radius
 *  · Soft, layered shadows
 *  · Generous 18-20px padding
 *  · Typography: 1e293b (dark), 64748b (muted), 94a3b8 (subtle)
 * ──────────────────────────────────────────────────────── */
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 18,
        marginBottom: 14,
        marginHorizontal: 16,
        // Layered shadow for depth
        shadowColor: '#64748b',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 3,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    nameBlock: {
        flex: 1,
        marginRight: 14,
    },
    name: {
        fontSize: 17,
        fontWeight: '700',
        color: '#1e293b',
        lineHeight: 22,
        letterSpacing: -0.2,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginTop: 4,
    },
    locationText: {
        fontSize: 13,
        color: '#64748b',
        flex: 1,
    },
    addressText: {
        fontSize: 12,
        color: '#94a3b8',
        marginTop: 2,
        marginLeft: 17,
    },
    topActions: {
        alignItems: 'flex-end',
        gap: 8,
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        gap: 5,
    },
    statusDot: {
        width: 7,
        height: 7,
        borderRadius: 3.5,
    },
    statusLabel: {
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.2,
    },
    favButton: {
        padding: 2,
    },
    divider: {
        height: 1,
        backgroundColor: '#f1f5f9',
        marginVertical: 14,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    infoSeparator: {
        width: 1,
        height: 14,
        backgroundColor: '#e2e8f0',
        marginHorizontal: 12,
    },
    infoText: {
        fontSize: 13,
        color: '#64748b',
        fontWeight: '500',
    },
    badgesRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        marginBottom: 12,
    },
    badge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
    },
    badgeLabel: {
        fontSize: 11,
        fontWeight: '700',
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        marginBottom: 10,
    },
    tagPill: {
        backgroundColor: '#f0f4ff',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#dbeafe',
    },
    tagPillText: {
        fontSize: 11,
        color: '#3b5998',
        fontWeight: '600',
    },
    servicesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        marginBottom: 14,
    },
    servicePill: {
        backgroundColor: '#f8fafc',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    servicePillText: {
        fontSize: 11,
        color: '#64748b',
        fontWeight: '500',
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 12,
        gap: 8,
    },
    actionButtonText: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 14,
        letterSpacing: 0.3,
    },
});
