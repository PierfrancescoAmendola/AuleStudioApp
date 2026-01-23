/**
 * N-SECT Unit Tests for StorageService
 * Mock-based tests for async storage operations
 */

// Mock AsyncStorage before import
const mockAsyncStorage = {
    setItem: jest.fn(() => Promise.resolve()),
    getItem: jest.fn(() => Promise.resolve(null as string | null)),
    clear: jest.fn(() => Promise.resolve()),
    removeItem: jest.fn(() => Promise.resolve()),
};

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// Now import after mock
import { StorageService } from '../../services/storageService';

describe('StorageService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('setSelectedUniversity', () => {
        // EC1: Valid university ID
        it('should store a valid university ID', async () => {
            await StorageService.setSelectedUniversity('federico-ii');
            expect(mockAsyncStorage.setItem).toHaveBeenCalledWith(
                '@selected_university',
                'federico-ii'
            );
        });

        // EC2: Empty string
        it('should handle empty string ID', async () => {
            await StorageService.setSelectedUniversity('');
            expect(mockAsyncStorage.setItem).toHaveBeenCalledWith(
                '@selected_university',
                ''
            );
        });

        // EC3: ID with special characters
        it('should handle ID with special characters', async () => {
            await StorageService.setSelectedUniversity('uni_test-123');
            expect(mockAsyncStorage.setItem).toHaveBeenCalledWith(
                '@selected_university',
                'uni_test-123'
            );
        });

        // EC4: Very long ID
        it('should handle very long ID string', async () => {
            const longId = 'a'.repeat(500);
            await StorageService.setSelectedUniversity(longId);
            expect(mockAsyncStorage.setItem).toHaveBeenCalledWith(
                '@selected_university',
                longId
            );
        });

        // EC5: Error handling
        it('should handle storage errors gracefully', async () => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
            mockAsyncStorage.setItem.mockRejectedValueOnce(new Error('Storage full'));

            await StorageService.setSelectedUniversity('test-id');

            expect(consoleSpy).toHaveBeenCalled();
            consoleSpy.mockRestore();
        });
    });

    describe('getSelectedUniversity', () => {
        // EC1: Value exists
        it('should return stored university ID when exists', async () => {
            mockAsyncStorage.getItem.mockResolvedValueOnce('polimi');

            const result = await StorageService.getSelectedUniversity();

            expect(result).toBe('polimi');
            expect(mockAsyncStorage.getItem).toHaveBeenCalledWith('@selected_university');
        });

        // EC2: No value stored (null)
        it('should return null when no university is stored', async () => {
            mockAsyncStorage.getItem.mockResolvedValueOnce(null);

            const result = await StorageService.getSelectedUniversity();

            expect(result).toBeNull();
        });

        // EC3: Empty string stored
        it('should return empty string if empty string was stored', async () => {
            mockAsyncStorage.getItem.mockResolvedValueOnce('');

            const result = await StorageService.getSelectedUniversity();

            expect(result).toBe('');
        });

        // EC4: Error handling
        it('should return null and log error on storage failure', async () => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
            mockAsyncStorage.getItem.mockRejectedValueOnce(new Error('Read error'));

            const result = await StorageService.getSelectedUniversity();

            expect(result).toBeNull();
            expect(consoleSpy).toHaveBeenCalled();
            consoleSpy.mockRestore();
        });
    });

    describe('clearAll', () => {
        // EC1: Successful clear
        it('should call AsyncStorage.clear', async () => {
            await StorageService.clearAll();
            expect(mockAsyncStorage.clear).toHaveBeenCalled();
        });

        // EC2: Error handling during clear
        it('should handle clear errors gracefully', async () => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
            mockAsyncStorage.clear.mockRejectedValueOnce(new Error('Clear failed'));

            await StorageService.clearAll();

            expect(consoleSpy).toHaveBeenCalled();
            consoleSpy.mockRestore();
        });
    });
});
