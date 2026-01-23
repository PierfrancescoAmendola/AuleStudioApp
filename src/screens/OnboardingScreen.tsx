import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../types';
import { universities } from '../data/universities';
import { StorageService } from '../services/storageService';
import { Button } from '../components/UI/Button';
import { Card } from '../components/UI/Card';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { Spacing } from '../theme/spacing';

type OnboardingScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Onboarding'
>;

interface Props {
    navigation: OnboardingScreenNavigationProp;
    onUniversitySelected?: () => void;
}

export const OnboardingScreen: React.FC<Props> = ({
    navigation,
    onUniversitySelected,
}) => {
    const colorScheme = useColorScheme();
    const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const [selectedUniversity, setSelectedUniversity] = useState<string | null>(
        null
    );
    const [loading, setLoading] = useState(false);

    const handleContinue = async () => {
        if (!selectedUniversity) return;

        setLoading(true);
        await StorageService.setSelectedUniversity(selectedUniversity);
        setLoading(false);

        if (onUniversitySelected) {
            onUniversitySelected();
        } else {
            navigation.replace('Home');
        }
    };

    return (
        <LinearGradient
            colors={
                colorScheme === 'dark'
                    ? ['#1F2937', '#111827']
                    : ['#6366F1', '#EC4899']
            }
            style={styles.container}
        >
            <View style={styles.content}>
                {/* Header */}
                <View style={styles.header}>
                    <Ionicons name="school" size={64} color="#FFFFFF" />
                    <Text style={styles.title}>UniStudy Italia</Text>
                    <Text style={styles.subtitle}>
                        Trova aule studio universitarie ovunque tu sia
                    </Text>
                </View>

                {/* University Selection */}
                <View style={styles.selectionContainer}>
                    <Text
                        style={[
                            styles.selectionTitle,
                            { color: colorScheme === 'dark' ? colors.text : '#FFFFFF' },
                        ]}
                    >
                        Seleziona la tua Università
                    </Text>

                    <FlatList
                        data={universities}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => setSelectedUniversity(item.id)}
                                activeOpacity={0.7}
                            >
                                <Card
                                    style={{
                                        ...styles.universityCard,
                                        ...(selectedUniversity === item.id && {
                                            borderWidth: 2,
                                            borderColor: colors.primary,
                                        }),
                                    }}
                                >
                                    <View style={styles.universityContent}>
                                        <View style={styles.universityInfo}>
                                            <Text style={[styles.universityName, { color: colors.text }]}>
                                                {item.name}
                                            </Text>
                                            <Text
                                                style={[styles.universityCity, { color: colors.textSecondary }]}
                                            >
                                                {item.city}
                                            </Text>
                                        </View>
                                        {selectedUniversity === item.id && (
                                            <Ionicons
                                                name="checkmark-circle"
                                                size={28}
                                                color={colors.primary}
                                            />
                                        )}
                                    </View>
                                </Card>
                            </TouchableOpacity>
                        )}
                        contentContainerStyle={styles.listContent}
                    />
                </View>

                {/* Continue Button */}
                <View style={styles.footer}>
                    <Button
                        title="Continua"
                        onPress={handleContinue}
                        disabled={!selectedUniversity}
                        loading={loading}
                        size="large"
                        style={styles.continueButton}
                    />
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingTop: Spacing['3xl'],
    },
    header: {
        alignItems: 'center',
        paddingHorizontal: Spacing.xl,
        marginBottom: Spacing.xl,
    },
    title: {
        fontSize: Typography.fontSize['4xl'],
        fontFamily: Typography.fontFamily.bold,
        color: '#FFFFFF',
        marginTop: Spacing.md,
        marginBottom: Spacing.sm,
    },
    subtitle: {
        fontSize: Typography.fontSize.base,
        fontFamily: Typography.fontFamily.regular,
        color: '#FFFFFF',
        textAlign: 'center',
        opacity: 0.9,
    },
    selectionContainer: {
        flex: 1,
        paddingHorizontal: Spacing.lg,
    },
    selectionTitle: {
        fontSize: Typography.fontSize.xl,
        fontFamily: Typography.fontFamily.semiBold,
        marginBottom: Spacing.md,
    },
    listContent: {
        paddingBottom: Spacing.xl,
    },
    universityCard: {
        marginBottom: Spacing.md,
    },
    universityContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    universityInfo: {
        flex: 1,
    },
    universityName: {
        fontSize: Typography.fontSize.base,
        fontFamily: Typography.fontFamily.semiBold,
        marginBottom: 4,
    },
    universityCity: {
        fontSize: Typography.fontSize.sm,
        fontFamily: Typography.fontFamily.regular,
    },
    footer: {
        paddingHorizontal: Spacing.xl,
        paddingBottom: Spacing.xl,
    },
    continueButton: {
        width: '100%',
    },
});
