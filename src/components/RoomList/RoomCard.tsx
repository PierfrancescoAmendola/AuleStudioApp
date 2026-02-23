import React, { memo } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    useColorScheme,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StudyRoom } from '../../types';
import { Card } from '../UI/Card';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';
import { isRoomOpenNow } from '../../utils/mapHelpers';

interface RoomCardProps {
    room: StudyRoom;
    onPress: () => void;
    isSelected?: boolean;
}

export const RoomCard = memo<RoomCardProps>(
    ({ room, onPress, isSelected = false }) => {
        const colorScheme = useColorScheme();
        const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;
        const isOpen = isRoomOpenNow(room);

        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.container}>
                <Card
                    style={{
                        ...styles.card,
                        ...(isSelected && {
                            borderWidth: 2,
                            borderColor: colors.primary,
                        }),
                    }}
                >
                    {/* Header with Name and Status */}
                    <View style={styles.header}>
                        <View style={styles.titleContainer}>
                            <Text style={[styles.name, { color: colors.text }]} numberOfLines={1}>
                                {room.nome}
                            </Text>
                            <View style={styles.locationRow}>
                                <Ionicons name="location" size={14} color={colors.textSecondary} />
                                <Text style={[styles.locationText, { color: colors.textSecondary }]} numberOfLines={1}>
                                    {room.edificio}
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.statusBadge, { backgroundColor: isOpen ? `${colors.success}20` : `${colors.error}20` }]}>
                            <View style={[styles.statusDot, { backgroundColor: isOpen ? colors.success : colors.error }]} />
                            <Text style={[styles.statusText, { color: isOpen ? colors.success : colors.error }]}>
                                {isOpen ? 'Aperto' : 'Chiuso'}
                            </Text>
                        </View>
                    </View>

                    {/* Info Row: Hours & Capacity */}
                    <View style={styles.infoRow}>
                        <View style={styles.infoItem}>
                            <Ionicons name="time-outline" size={16} color={colors.primary} />
                            <Text style={[styles.infoText, { color: colors.textSecondary }]}>
                                {room.orarioApertura} - {room.orarioChiusura}
                            </Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Ionicons name="people-outline" size={16} color={colors.secondary} />
                            <Text style={[styles.infoText, { color: colors.textSecondary }]}>
                                {room.postiTotali} posti
                            </Text>
                        </View>
                    </View>

                    {/* Services */}
                    {room.servizi.length > 0 && (
                        <View style={styles.servicesContainer}>
                            <View style={styles.servicesList}>
                                {room.servizi.map((servizio, index) => {
                                    let iconName: string = 'checkmark-circle';
                                    if (servizio.toLowerCase().includes('wifi')) iconName = 'wifi';
                                    else if (servizio.toLowerCase().includes('pres')) iconName = 'flash';
                                    else if (servizio.toLowerCase().includes('silenzio')) iconName = 'volume-mute';
                                    else if (servizio.toLowerCase().includes('climatizz')) iconName = 'snow';

                                    return (
                                        <View key={index} style={[styles.serviceTag, { backgroundColor: colors.background }]}>
                                            <Ionicons name={iconName as any} size={12} color={colors.textSecondary} />
                                            <Text style={[styles.serviceText, { color: colors.textSecondary }]} numberOfLines={1}>
                                                {servizio}
                                            </Text>
                                        </View>
                                    );
                                })}
                            </View>
                        </View>
                    )}

                    {/* Call to Action hint */}
                    <View style={styles.ctaContainer}>
                        <Text style={[styles.ctaText, { color: colors.primary }]}>Vedi dettagli & indicazioni</Text>
                        <Ionicons name="arrow-forward" size={14} color={colors.primary} />
                    </View>
                </Card>
            </TouchableOpacity>
        );
    },
    (prevProps, nextProps) => {
        return (
            prevProps.room.id === nextProps.room.id && prevProps.isSelected === nextProps.isSelected
        );
    }
);

RoomCard.displayName = 'RoomCard';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Spacing.md,
    },
    card: {
        marginBottom: Spacing.md,
        padding: Spacing.md,
        borderRadius: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: Spacing.md,
        alignItems: 'flex-start',
    },
    titleContainer: {
        flex: 1,
        marginRight: Spacing.sm,
    },
    name: {
        fontSize: Typography.fontSize.lg,
        fontFamily: Typography.fontFamily.bold,
        marginBottom: 4,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    locationText: {
        fontSize: Typography.fontSize.sm,
        fontFamily: Typography.fontFamily.medium,
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        gap: 6,
    },
    statusDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
    },
    statusText: {
        fontSize: Typography.fontSize.xs,
        fontFamily: Typography.fontFamily.bold,
        textTransform: 'uppercase',
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.lg,
        marginBottom: Spacing.md,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    infoText: {
        fontSize: Typography.fontSize.sm,
        fontFamily: Typography.fontFamily.medium,
    },
    servicesContainer: {
        marginBottom: Spacing.md,
        paddingTop: Spacing.sm,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.05)',
    },
    servicesList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    serviceTag: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        gap: 4,
    },
    serviceText: {
        fontSize: Typography.fontSize.xs,
        fontFamily: Typography.fontFamily.regular,
    },
    ctaContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 4,
    },
    ctaText: {
        fontSize: Typography.fontSize.xs,
        fontFamily: Typography.fontFamily.bold,
    },
});
