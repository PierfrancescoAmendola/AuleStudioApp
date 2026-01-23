import React from 'react';
import { View, StyleSheet, ViewStyle, useColorScheme } from 'react-native';
import { Colors } from '../../theme/colors';
import { BorderRadius, Spacing } from '../../theme/spacing';

interface CardProps {
    children: React.ReactNode;
    style?: ViewStyle;
    elevation?: number;
}

export const Card: React.FC<CardProps> = ({ children, style, elevation = 2 }) => {
    const colorScheme = useColorScheme();
    const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const shadowStyle: ViewStyle = {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: elevation,
        },
        shadowOpacity: 0.1,
        shadowRadius: elevation * 2,
        elevation: elevation * 2,
    };

    return (
        <View
            style={[
                styles.card,
                { backgroundColor: colors.card },
                shadowStyle,
                style,
            ]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: BorderRadius.lg,
        padding: Spacing.md,
    },
});
