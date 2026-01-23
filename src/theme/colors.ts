// Modern, vibrant color palette with dark mode support
export const Colors = {
    light: {
        primary: '#6366F1',        // Indigo
        secondary: '#EC4899',      // Pink
        accent: '#8B5CF6',         // Purple
        background: '#F9FAFB',     // Light Gray
        card: '#FFFFFF',
        text: '#111827',
        textSecondary: '#6B7280',
        border: '#E5E7EB',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        shadow: 'rgba(0, 0, 0, 0.1)',
    },
    dark: {
        primary: '#818CF8',
        secondary: '#F472B6',
        accent: '#A78BFA',
        background: '#111827',
        card: '#1F2937',
        text: '#F9FAFB',
        textSecondary: '#9CA3AF',
        border: '#374151',
        success: '#34D399',
        warning: '#FBBF24',
        error: '#F87171',
        shadow: 'rgba(0, 0, 0, 0.3)',
    },
};

export type ColorScheme = typeof Colors.light;
