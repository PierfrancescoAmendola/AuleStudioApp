import React from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity,
    Switch,
    useColorScheme,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FilterOptions } from '../../types';
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

interface FilterModalProps {
    visible: boolean;
    filters: FilterOptions;
    onClose: () => void;
    onApply: (filters: FilterOptions) => void;
    onReset: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
    visible,
    filters,
    onClose,
    onApply,
    onReset,
}) => {
    const colorScheme = useColorScheme();
    const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const [localFilters, setLocalFilters] = React.useState<FilterOptions>(filters);

    React.useEffect(() => {
        setLocalFilters(filters);
    }, [filters]);

    const toggleFilter = (key: keyof FilterOptions) => {
        setLocalFilters((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleApply = () => {
        onApply(localFilters);
        onClose();
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={[styles.modalContainer, { backgroundColor: colors.background }]}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={[styles.title, { color: colors.text }]}>Filtri</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Ionicons name="close" size={28} color={colors.text} />
                        </TouchableOpacity>
                    </View>

                    {/* Filter Options */}
                    <View style={styles.content}>
                        <FilterOption
                            icon="flash"
                            label="Prese elettriche"
                            value={localFilters.hasPrese}
                            onToggle={() => toggleFilter('hasPrese')}
                            colors={colors}
                        />
                        <FilterOption
                            icon="volume-mute"
                            label="Silenzio richiesto"
                            value={localFilters.hasSilenzio}
                            onToggle={() => toggleFilter('hasSilenzio')}
                            colors={colors}
                        />
                        <FilterOption
                            icon="wifi"
                            label="WiFi disponibile"
                            value={localFilters.hasWiFi}
                            onToggle={() => toggleFilter('hasWiFi')}
                            colors={colors}
                        />
                        <FilterOption
                            icon="time"
                            label="Aperto ora"
                            value={localFilters.openNow}
                            onToggle={() => toggleFilter('openNow')}
                            colors={colors}
                        />
                    </View>

                    {/* Actions */}
                    <View style={styles.actions}>
                        <Button
                            title="Resetta"
                            onPress={() => {
                                onReset();
                                onClose();
                            }}
                            variant="outline"
                            style={{ flex: 1 }}
                        />
                        <View style={{ width: Spacing.md }} />
                        <Button
                            title="Applica"
                            onPress={handleApply}
                            variant="primary"
                            style={{ flex: 1 }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

// Helper component for filter options
interface FilterOptionProps {
    icon: string;
    label: string;
    value: boolean;
    onToggle: () => void;
    colors: any;
}

const FilterOption: React.FC<FilterOptionProps> = ({
    icon,
    label,
    value,
    onToggle,
    colors,
}) => {
    return (
        <TouchableOpacity
            style={[styles.filterOption, { borderBottomColor: colors.border }]}
            onPress={onToggle}
            activeOpacity={0.7}
        >
            <View style={styles.filterLeft}>
                <Ionicons name={icon as any} size={24} color={colors.primary} />
                <Text style={[styles.filterLabel, { color: colors.text }]}>{label}</Text>
            </View>
            <Switch
                value={value}
                onValueChange={onToggle}
                trackColor={{ false: colors.border, true: colors.primary }}
                thumbColor="#FFFFFF"
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingTop: Spacing.lg,
        paddingBottom: Spacing.xl,
        paddingHorizontal: Spacing.lg,
        maxHeight: '80%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.lg,
    },
    title: {
        fontSize: Typography.fontSize['2xl'],
        fontFamily: Typography.fontFamily.bold,
    },
    content: {
        marginBottom: Spacing.xl,
    },
    filterOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: Spacing.md,
        borderBottomWidth: 1,
    },
    filterLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.md,
    },
    filterLabel: {
        fontSize: Typography.fontSize.base,
        fontFamily: Typography.fontFamily.medium,
    },
    actions: {
        flexDirection: 'row',
    },
});
