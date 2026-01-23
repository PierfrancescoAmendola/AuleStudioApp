import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
    SELECTED_UNIVERSITY: '@selected_university',
};

export const StorageService = {
    /**
     * Get the selected university ID
     */
    async getSelectedUniversity(): Promise<string | null> {
        try {
            const value = await AsyncStorage.getItem(KEYS.SELECTED_UNIVERSITY);
            return value;
        } catch (error) {
            console.error('Error getting selected university:', error);
            return null;
        }
    },

    /**
     * Set the selected university ID
     */
    async setSelectedUniversity(universityId: string): Promise<void> {
        try {
            await AsyncStorage.setItem(KEYS.SELECTED_UNIVERSITY, universityId);
        } catch (error) {
            console.error('Error setting selected university:', error);
        }
    },

    /**
     * Clear all stored data
     */
    async clearAll(): Promise<void> {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.error('Error clearing storage:', error);
        }
    },
};
