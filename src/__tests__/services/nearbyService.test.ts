/**
 * Unit Tests for NearbyService
 *
 * Verifica la logica interna del servizio:
 * - Generazione e persistenza session ID
 * - Ordine critico startDiscovery → startAdvertise (bug iOS)
 * - Stop radar idempotente
 * - Permessi iOS vs Android
 * - Wrapper degli event listener
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// ----- Mock del modulo nativo -----
const mockNative = {
    startAdvertise: jest.fn().mockResolvedValue('peer-abc'),
    stopAdvertise: jest.fn().mockResolvedValue(undefined),
    startDiscovery: jest.fn().mockResolvedValue('peer-abc'),
    stopDiscovery: jest.fn().mockResolvedValue(undefined),
    requestConnection: jest.fn().mockResolvedValue(undefined),
    acceptConnection: jest.fn().mockResolvedValue(undefined),
    rejectConnection: jest.fn().mockResolvedValue(undefined),
    disconnect: jest.fn().mockResolvedValue(undefined),
    sendText: jest.fn().mockResolvedValue(undefined),
    onInvitationReceived: jest.fn().mockReturnValue(jest.fn()),
    onConnected: jest.fn().mockReturnValue(jest.fn()),
    onDisconnected: jest.fn().mockReturnValue(jest.fn()),
    onPeerFound: jest.fn().mockReturnValue(jest.fn()),
    onPeerLost: jest.fn().mockReturnValue(jest.fn()),
    onTextReceived: jest.fn().mockReturnValue(jest.fn()),
};

jest.mock('expo-nearby-connections', () => mockNative);
jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: jest.fn(() => Promise.resolve()),
    getItem: jest.fn(() => Promise.resolve(null)),
    clear: jest.fn(() => Promise.resolve()),
    removeItem: jest.fn(() => Promise.resolve()),
}));

// Import AFTER mocks
// We need a fresh instance for each test group
let nearbyService: any;

function loadFreshService() {
    // Clear module cache so we get a fresh NearbyService singleton
    jest.resetModules();

    // Re-apply mocks after resetModules
    jest.mock('expo-nearby-connections', () => mockNative);
    jest.mock('@react-native-async-storage/async-storage', () => ({
        setItem: jest.fn(() => Promise.resolve()),
        getItem: jest.fn(() => Promise.resolve(null)),
        clear: jest.fn(() => Promise.resolve()),
        removeItem: jest.fn(() => Promise.resolve()),
    }));

    const mod = require('../../services/nearbyService');
    nearbyService = mod.nearbyService;
}

describe('NearbyService', () => {

    beforeEach(() => {
        jest.clearAllMocks();
        loadFreshService();
    });

    // ================================================================
    // SESSION ID
    // ================================================================
    describe('Session ID management', () => {

        it('generates a 12-char alphanumeric session ID when none exists', async () => {
            const id = await nearbyService.getOrCreateSessionId();
            expect(typeof id).toBe('string');
            expect(id.length).toBe(12);
            expect(/^[0-9a-z]{12}$/.test(id)).toBe(true);
        });

        it('persists the session ID to AsyncStorage', async () => {
            const AsyncStorageMock = require('@react-native-async-storage/async-storage');
            await nearbyService.getOrCreateSessionId();
            expect(AsyncStorageMock.setItem).toHaveBeenCalledWith(
                '@nearby_device_id',
                expect.stringMatching(/^[0-9a-z]{12}$/)
            );
        });

        it('reuses existing short ID from AsyncStorage', async () => {
            const AsyncStorageMock = require('@react-native-async-storage/async-storage');
            AsyncStorageMock.getItem.mockResolvedValueOnce('abc123def456');

            const id = await nearbyService.getOrCreateSessionId();
            expect(id).toBe('abc123def456');
            expect(AsyncStorageMock.setItem).not.toHaveBeenCalled();
        });

        it('regenerates if stored ID is a legacy UUID (> 16 chars)', async () => {
            const AsyncStorageMock = require('@react-native-async-storage/async-storage');
            AsyncStorageMock.getItem.mockResolvedValueOnce('550e8400-e29b-41d4-a716-446655440000');

            const id = await nearbyService.getOrCreateSessionId();
            expect(id.length).toBe(12);
            expect(AsyncStorageMock.setItem).toHaveBeenCalled();
        });

        it('returns cached ID on second call (no extra AsyncStorage read)', async () => {
            const AsyncStorageMock = require('@react-native-async-storage/async-storage');
            const id1 = await nearbyService.getOrCreateSessionId();
            const id2 = await nearbyService.getOrCreateSessionId();
            expect(id1).toBe(id2);
            // Only one getItem call (the second call is from cache)
            expect(AsyncStorageMock.getItem).toHaveBeenCalledTimes(1);
        });

        it('falls back to in-memory ID if AsyncStorage throws', async () => {
            const AsyncStorageMock = require('@react-native-async-storage/async-storage');
            AsyncStorageMock.getItem.mockRejectedValueOnce(new Error('storage crash'));

            const id = await nearbyService.getOrCreateSessionId();
            expect(typeof id).toBe('string');
            expect(id.length).toBe(12);
        });

        it('getMySessionId returns "uninitialized" before first call', () => {
            expect(nearbyService.getMySessionId()).toBe('uninitialized');
        });
    });

    // ================================================================
    // START RADAR — ordine critico iOS
    // ================================================================
    describe('startRadar', () => {

        it('calls startDiscovery BEFORE startAdvertise (critical iOS order)', async () => {
            const callOrder: string[] = [];
            mockNative.startDiscovery.mockImplementation(async () => {
                callOrder.push('discovery');
                return 'peer-1';
            });
            mockNative.startAdvertise.mockImplementation(async () => {
                callOrder.push('advertise');
                return 'peer-1';
            });

            await nearbyService.startRadar('Analisi I');

            expect(callOrder).toEqual(['discovery', 'advertise']);
        });

        it('formats the identifier as UC|sessionId|examName (max 60 chars)', async () => {
            await nearbyService.startRadar('Analisi Matematica');

            const discoverCall = mockNative.startDiscovery.mock.calls[0];
            const advertiseCall = mockNative.startAdvertise.mock.calls[0];

            // Both should receive the same identifier
            expect(discoverCall[0]).toBe(advertiseCall[0]);
            expect(discoverCall[0]).toMatch(/^UC\|[0-9a-z]{12}\|Analisi Matematica$/);
            expect(discoverCall[0].length).toBeLessThanOrEqual(60);
        });

        it('truncates very long exam names to 60 chars total', async () => {
            const longExam = 'A'.repeat(100);
            await nearbyService.startRadar(longExam);

            const identifier = mockNative.startDiscovery.mock.calls[0][0];
            expect(identifier.length).toBeLessThanOrEqual(60);
        });

        it('uses P2P_STAR strategy (value 2)', async () => {
            await nearbyService.startRadar('Fisica I');

            expect(mockNative.startDiscovery).toHaveBeenCalledWith(
                expect.any(String),
                2 // P2P_STAR
            );
            expect(mockNative.startAdvertise).toHaveBeenCalledWith(
                expect.any(String),
                2
            );
        });

        it('returns true on success', async () => {
            const result = await nearbyService.startRadar('Chimica');
            expect(result).toBe(true);
        });

        it('saves peerId from startAdvertise', async () => {
            mockNative.startAdvertise.mockResolvedValueOnce('my-unique-peer');
            await nearbyService.startRadar('Chimica');
            expect(nearbyService.getMyPeerId()).toBe('my-unique-peer');
        });

        it('returns false and does not crash if startDiscovery throws', async () => {
            mockNative.startDiscovery.mockRejectedValueOnce(new Error('BLE off'));

            const result = await nearbyService.startRadar('Algebra');
            expect(result).toBe(false);
            // startAdvertise should NOT have been called
            expect(mockNative.startAdvertise).not.toHaveBeenCalled();
        });

        it('returns false if startAdvertise throws (after discovery started)', async () => {
            mockNative.startAdvertise.mockRejectedValueOnce(new Error('session error'));

            const result = await nearbyService.startRadar('Geometria');
            expect(result).toBe(false);
        });
    });

    // ================================================================
    // STOP RADAR
    // ================================================================
    describe('stopRadar', () => {

        it('calls stopAdvertise and stopDiscovery after startRadar', async () => {
            await nearbyService.startRadar('Analisi I');
            await nearbyService.stopRadar();

            expect(mockNative.stopAdvertise).toHaveBeenCalledTimes(1);
            expect(mockNative.stopDiscovery).toHaveBeenCalledTimes(1);
        });

        it('is idempotent: calling stopRadar twice does not call stop twice', async () => {
            await nearbyService.startRadar('Analisi I');
            await nearbyService.stopRadar();
            await nearbyService.stopRadar();

            expect(mockNative.stopAdvertise).toHaveBeenCalledTimes(1);
            expect(mockNative.stopDiscovery).toHaveBeenCalledTimes(1);
        });

        it('does nothing if startRadar was never called', async () => {
            await nearbyService.stopRadar();

            expect(mockNative.stopAdvertise).not.toHaveBeenCalled();
            expect(mockNative.stopDiscovery).not.toHaveBeenCalled();
        });

        it('does not throw if stopAdvertise fails', async () => {
            await nearbyService.startRadar('Test');
            mockNative.stopAdvertise.mockRejectedValueOnce(new Error('already stopped'));

            await expect(nearbyService.stopRadar()).resolves.not.toThrow();
        });
    });

    // ================================================================
    // PERMISSIONS
    // ================================================================
    describe('requestPermissions', () => {

        it('returns true immediately on iOS (no runtime permissions needed)', async () => {
            (Platform as any).OS = 'ios';
            const result = await nearbyService.requestPermissions();
            expect(result).toBe(true);
        });
    });

    // ================================================================
    // CONNECTION METHODS
    // ================================================================
    describe('Connection methods', () => {

        it('connectToPeer delegates to native requestConnection', async () => {
            await nearbyService.connectToPeer('peer-xyz');
            expect(mockNative.requestConnection).toHaveBeenCalledWith('peer-xyz');
        });

        it('acceptConnection delegates to native acceptConnection', async () => {
            await nearbyService.acceptConnection('peer-xyz');
            expect(mockNative.acceptConnection).toHaveBeenCalledWith('peer-xyz');
        });

        it('rejectConnection delegates to native rejectConnection', async () => {
            await nearbyService.rejectConnection('peer-xyz');
            expect(mockNative.rejectConnection).toHaveBeenCalledWith('peer-xyz');
        });

        it('disconnectPeer delegates to native disconnect', async () => {
            await nearbyService.disconnectPeer('peer-xyz');
            expect(mockNative.disconnect).toHaveBeenCalledWith('peer-xyz');
        });

        it('rejectConnection swallows errors silently', async () => {
            mockNative.rejectConnection.mockRejectedValueOnce(new Error('fail'));
            await expect(nearbyService.rejectConnection('peer-xyz')).resolves.not.toThrow();
        });

        it('disconnectPeer swallows errors silently', async () => {
            mockNative.disconnect.mockRejectedValueOnce(new Error('fail'));
            await expect(nearbyService.disconnectPeer('peer-xyz')).resolves.not.toThrow();
        });
    });

    // ================================================================
    // MESSAGING
    // ================================================================
    describe('sendMessage', () => {

        it('delegates to native sendText with peerId and text', async () => {
            await nearbyService.sendMessage('peer-1', 'Ciao!');
            expect(mockNative.sendText).toHaveBeenCalledWith('peer-1', 'Ciao!');
        });

        it('propagates errors to the caller', async () => {
            mockNative.sendText.mockRejectedValueOnce(new Error('disconnected'));
            await expect(nearbyService.sendMessage('peer-1', 'test')).rejects.toThrow('disconnected');
        });
    });

    // ================================================================
    // EVENT LISTENER WRAPPERS
    // ================================================================
    describe('Event listener wrappers', () => {

        it('onPeerFound returns an unsubscribe function', () => {
            const mockUnsub = jest.fn();
            mockNative.onPeerFound.mockReturnValueOnce(mockUnsub);

            const unsub = nearbyService.onPeerFound(() => {});
            expect(unsub).toBe(mockUnsub);
        });

        it('onPeerLost delegates to native', () => {
            const cb = jest.fn();
            nearbyService.onPeerLost(cb);
            expect(mockNative.onPeerLost).toHaveBeenCalledWith(cb);
        });

        it('onInvitationReceived delegates to native', () => {
            const cb = jest.fn();
            nearbyService.onInvitationReceived(cb);
            expect(mockNative.onInvitationReceived).toHaveBeenCalledWith(cb);
        });

        it('onConnected delegates to native', () => {
            const cb = jest.fn();
            nearbyService.onConnected(cb);
            expect(mockNative.onConnected).toHaveBeenCalledWith(cb);
        });

        it('onDisconnected delegates to native', () => {
            const cb = jest.fn();
            nearbyService.onDisconnected(cb);
            expect(mockNative.onDisconnected).toHaveBeenCalledWith(cb);
        });

        it('onTextReceived delegates to native', () => {
            const cb = jest.fn();
            nearbyService.onTextReceived(cb);
            expect(mockNative.onTextReceived).toHaveBeenCalledWith(cb);
        });
    });
});
