import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
    useColorScheme,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { BorderRadius, Spacing } from '../../theme/spacing';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    loading?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    icon?: string;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    size = 'medium',
    loading = false,
    disabled = false,
    style,
    icon,
}) => {
    const colorScheme = useColorScheme();
    const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const getButtonStyle = (): ViewStyle => {
        const baseStyle: ViewStyle = {
            borderRadius: BorderRadius.md,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
        };

        // Size
        const sizeStyles: Record<string, ViewStyle> = {
            small: { paddingVertical: Spacing.sm, paddingHorizontal: Spacing.md },
            medium: { paddingVertical: Spacing.md, paddingHorizontal: Spacing.lg },
            large: { paddingVertical: Spacing.lg, paddingHorizontal: Spacing.xl },
        };

        // Variant
        const variantStyles: Record<string, ViewStyle> = {
            primary: { backgroundColor: colors.primary },
            secondary: { backgroundColor: colors.secondary },
            outline: {
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderColor: colors.primary,
            },
        };

        return {
            ...baseStyle,
            ...sizeStyles[size],
            ...variantStyles[variant],
            opacity: disabled ? 0.5 : 1,
        };
    };

    const getTextStyle = (): TextStyle => {
        const sizeStyles: Record<string, TextStyle> = {
            small: { fontSize: Typography.fontSize.sm },
            medium: { fontSize: Typography.fontSize.base },
            large: { fontSize: Typography.fontSize.lg },
        };

        const variantStyles: Record<string, TextStyle> = {
            primary: { color: '#FFFFFF' },
            secondary: { color: '#FFFFFF' },
            outline: { color: colors.primary },
        };

        return {
            fontFamily: Typography.fontFamily.semiBold,
            ...sizeStyles[size],
            ...variantStyles[variant],
        };
    };

    const getIconColor = () => {
        if (variant === 'outline') return colors.primary;
        return '#FFFFFF';
    };

    return (
        <TouchableOpacity
            style={[getButtonStyle(), style]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
        >
            {loading ? (
                <ActivityIndicator
                    color={variant === 'outline' ? colors.primary : '#FFFFFF'}
                />
            ) : (
                <>
                    {icon && (
                        <Ionicons
                            name={icon as any}
                            size={size === 'small' ? 16 : 20}
                            color={getIconColor()}
                            style={{ marginRight: Spacing.sm }}
                        />
                    )}
                    <Text style={getTextStyle()}>{title}</Text>
                </>
            )}
        </TouchableOpacity>
    );
};
