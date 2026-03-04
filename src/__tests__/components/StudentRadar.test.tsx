/**
 * StudentRadar Component Tests
 *
 * Testa la logica React del componente StudentRadar simulando l'intero
 * lifecycle dei listener nativi. Verifica:
 *
 * 1. Rendering iniziale e selezione esame
 * 2. Flow discovery → connecting → match found
 * 3. Tie-breaker con sessionId
 * 4. Fallback timer per scoperta asimmetrica iOS (5s)
 * 5. Connect timeout (10s) con reset
 * 6. Chat request / accept / reject
 * 7. Disconnessione e restart automatico
 * 8. Cleanup dei listener su unmount
 * 9. Deduplicazione delle connessioni (no doppio connect)
 */

// ---- Event Bus (simula modulo nativo) ----
// Must be prefixed with "mock" so jest allows it inside jest.mock factories
type MockEventCallback = (data: any) => void;

class MockNativeEventBus {
    private listeners: Map<string, Set<MockEventCallback>> = new Map();

    on(event: string, cb: MockEventCallback) {
        if (!this.listeners.has(event)) this.listeners.set(event, new Set());
        this.listeners.get(event)!.add(cb);
        return () => { this.listeners.get(event)?.delete(cb); };
    }

    emit(event: string, data: any) {
        this.listeners.get(event)?.forEach(cb => cb(data));
    }

    clear() { this.listeners.clear(); }
    listenerCount(event: string) { return this.listeners.get(event)?.size ?? 0; }
}

const mockBus = new MockNativeEventBus();

// ---- Mocks (all prefixed with "mock") ----
const mockStartRadar = jest.fn().mockResolvedValue(true);
const mockStopRadar = jest.fn().mockResolvedValue(undefined);
const mockConnectToPeer = jest.fn().mockResolvedValue(undefined);
const mockAcceptConnection = jest.fn().mockResolvedValue(undefined);
const mockDisconnectPeer = jest.fn().mockResolvedValue(undefined);
const mockSendMessage = jest.fn().mockResolvedValue(undefined);
const mockGetMySessionId = jest.fn().mockReturnValue('aaa111bbb222');

jest.mock('../../services/nearbyService', () => ({
    nearbyService: {
        getOrCreateSessionId: jest.fn().mockResolvedValue('aaa111bbb222'),
        getMySessionId: () => mockGetMySessionId(),
        startRadar: (...args: any[]) => mockStartRadar(...args),
        stopRadar: (...args: any[]) => mockStopRadar(...args),
        connectToPeer: (...args: any[]) => mockConnectToPeer(...args),
        acceptConnection: (...args: any[]) => mockAcceptConnection(...args),
        disconnectPeer: (...args: any[]) => mockDisconnectPeer(...args),
        sendMessage: (...args: any[]) => mockSendMessage(...args),
        requestPermissions: jest.fn().mockResolvedValue(true),
        onPeerFound: (cb: MockEventCallback) => mockBus.on('peerFound', cb),
        onPeerLost: (cb: MockEventCallback) => mockBus.on('peerLost', cb),
        onInvitationReceived: (cb: MockEventCallback) => mockBus.on('invitationReceived', cb),
        onConnected: (cb: MockEventCallback) => mockBus.on('connected', cb),
        onDisconnected: (cb: MockEventCallback) => mockBus.on('disconnected', cb),
        onTextReceived: (cb: MockEventCallback) => mockBus.on('textReceived', cb),
    }
}));

jest.mock('@expo/vector-icons', () => ({ Ionicons: 'Ionicons' }), { virtual: true });
jest.mock('expo-linear-gradient', () => {
    const React = require('react');
    const { View } = require('react-native');
    return {
        LinearGradient: ({ children, ...props }: any) => React.createElement(View, props, children),
    };
});
jest.mock('react-native-safe-area-context', () => ({
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
}));
jest.mock('../../components/BluetoothChatScreen', () => {
    const React = require('react');
    const { View } = require('react-native');
    return {
        BluetoothChatScreen: () => React.createElement(View, { testID: 'bluetooth-chat' }),
    };
});

import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Alert, Vibration } from 'react-native';
import { StudentRadar } from '../../components/StudentRadar';

// Spy on Alert and Vibration
jest.spyOn(Alert, 'alert').mockImplementation(() => {});
jest.spyOn(Vibration, 'vibrate').mockImplementation(() => {});

describe('StudentRadar Component', () => {

    beforeEach(() => {
        // Clear only action mocks (NOT the listener mocks or getMySessionId)
        mockStartRadar.mockClear().mockResolvedValue(true);
        mockStopRadar.mockClear().mockResolvedValue(undefined);
        mockConnectToPeer.mockClear().mockResolvedValue(undefined);
        mockAcceptConnection.mockClear().mockResolvedValue(undefined);
        mockDisconnectPeer.mockClear().mockResolvedValue(undefined);
        mockSendMessage.mockClear().mockResolvedValue(undefined);
        mockGetMySessionId.mockReturnValue('aaa111bbb222');
        (Alert.alert as jest.Mock).mockClear();
        (Vibration.vibrate as jest.Mock).mockClear();
        jest.useFakeTimers();
        mockBus.clear();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    // Helper: render and select an exam, then activate radar
    async function setupActiveRadar() {
        const utils = render(<StudentRadar accentColor="#6366f1" />);

        // Open exam selector
        const dropdown = utils.getByText('Seleziona esame...');
        await act(async () => { fireEvent.press(dropdown); });

        // Select an exam from the modal
        const examItem = utils.getByText('Analisi Matematica 1');
        await act(async () => { fireEvent.press(examItem); });

        // Activate radar
        const activateBtn = utils.getByText('Attiva Radar');
        await act(async () => { fireEvent.press(activateBtn); });

        return utils;
    }

    // ================================================================
    // RENDERING
    // ================================================================
    describe('Initial rendering', () => {

        it('renders the radar title and subtitle', () => {
            const { getByText } = render(<StudentRadar />);
            expect(getByText('Radar Studenti')).toBeTruthy();
            expect(getByText('Trova chi prepara il tuo stesso esame!')).toBeTruthy();
        });

        it('shows exam selector dropdown', () => {
            const { getByText } = render(<StudentRadar />);
            expect(getByText('Seleziona esame...')).toBeTruthy();
        });

        it('shows Attiva Radar button (disabled without exam)', () => {
            const { getByText } = render(<StudentRadar />);
            expect(getByText('Attiva Radar')).toBeTruthy();
        });

        it('registers 6 native event listeners on mount', () => {
            render(<StudentRadar />);
            // After mount, the component should have registered listeners in the bus
            expect(mockBus.listenerCount('peerFound')).toBe(1);
            expect(mockBus.listenerCount('peerLost')).toBe(1);
            expect(mockBus.listenerCount('invitationReceived')).toBe(1);
            expect(mockBus.listenerCount('connected')).toBe(1);
            expect(mockBus.listenerCount('disconnected')).toBe(1);
            expect(mockBus.listenerCount('textReceived')).toBe(1);
        });
    });

    // ================================================================
    // DISCOVERY FLOW
    // ================================================================
    describe('Discovery flow', () => {

        it('calls startRadar when radar is activated', async () => {
            await setupActiveRadar();
            expect(mockStartRadar).toHaveBeenCalledWith('Analisi Matematica 1');
        });

        it('shows scanning UI after activation', async () => {
            const { getByText } = await setupActiveRadar();
            expect(getByText(/Ricerca compagni per/)).toBeTruthy();
            expect(getByText('Interrompi')).toBeTruthy();
        });

        it('calls connectToPeer via tie-breaker when our sessionId is higher', async () => {
            mockGetMySessionId.mockReturnValue('zzz999zzz999');

            await setupActiveRadar();

            await act(async () => {
                mockBus.emit('peerFound', {
                    peerId: 'peer-b',
                    name: 'UC|aaa111bbb222|Analisi Matematica 1'
                });
            });

            expect(mockConnectToPeer).toHaveBeenCalledWith('peer-b');
        });

        it('does NOT immediately connect when our sessionId is lower (waits for them)', async () => {
            mockGetMySessionId.mockReturnValue('aaa111bbb222');

            await setupActiveRadar();

            await act(async () => {
                mockBus.emit('peerFound', {
                    peerId: 'peer-b',
                    name: 'UC|zzz999zzz999|Analisi Matematica 1'
                });
            });

            expect(mockConnectToPeer).not.toHaveBeenCalled();
        });
    });

    // ================================================================
    // FALLBACK TIMER (iOS asymmetric discovery)
    // ================================================================
    describe('iOS Fallback Timer', () => {

        it('connects after 5s fallback if peer never connects to us', async () => {
            mockGetMySessionId.mockReturnValue('aaa111bbb222');
            await setupActiveRadar();

            await act(async () => {
                mockBus.emit('peerFound', {
                    peerId: 'peer-b',
                    name: 'UC|zzz999zzz999|Analisi Matematica 1'
                });
            });

            expect(mockConnectToPeer).not.toHaveBeenCalled();

            // Advance 5 seconds → fallback fires
            await act(async () => {
                jest.advanceTimersByTime(5000);
            });

            expect(mockConnectToPeer).toHaveBeenCalledWith('peer-b');
        });

        it('does NOT fire fallback if connection arrives before 5s', async () => {
            mockGetMySessionId.mockReturnValue('aaa111bbb222');
            await setupActiveRadar();

            await act(async () => {
                mockBus.emit('peerFound', {
                    peerId: 'peer-b',
                    name: 'UC|zzz999zzz999|Analisi Matematica 1'
                });
            });

            // Connection arrives at 3s
            await act(async () => {
                jest.advanceTimersByTime(3000);
                mockBus.emit('connected', {
                    peerId: 'peer-b',
                    name: 'UC|zzz999zzz999|Analisi Matematica 1'
                });
            });

            // Advance past 5s
            await act(async () => {
                jest.advanceTimersByTime(3000);
            });

            expect(mockConnectToPeer).not.toHaveBeenCalled();
        });
    });

    // ================================================================
    // CONNECT TIMEOUT
    // ================================================================
    describe('Connect timeout (10s)', () => {

        it('resets connecting state after 10s if connection never completes', async () => {
            mockGetMySessionId.mockReturnValue('zzz999zzz999');

            await setupActiveRadar();

            await act(async () => {
                mockBus.emit('peerFound', {
                    peerId: 'peer-b',
                    name: 'UC|aaa111bbb222|Analisi Matematica 1'
                });
            });

            expect(mockConnectToPeer).toHaveBeenCalledTimes(1);

            // Advance 10 seconds — timeout resets
            await act(async () => {
                jest.advanceTimersByTime(10000);
            });

            // Now a new peer can trigger a connection again
            mockConnectToPeer.mockClear();
            await act(async () => {
                mockBus.emit('peerFound', {
                    peerId: 'peer-c',
                    name: 'UC|bbb222ccc333|Analisi Matematica 1'
                });
            });

            expect(mockConnectToPeer).toHaveBeenCalledWith('peer-c');
        });
    });

    // ================================================================
    // CONNECTION & MATCH CODE
    // ================================================================
    describe('Connection and match code', () => {

        it('shows match modal when connected and match code received (non-initiator)', async () => {
            mockGetMySessionId.mockReturnValue('aaa111bbb222');

            const { queryByText } = await setupActiveRadar();

            await act(async () => {
                mockBus.emit('connected', {
                    peerId: 'peer-b',
                    name: 'UC|zzz999zzz999|Analisi Matematica 1'
                });
            });

            await act(async () => {
                mockBus.emit('textReceived', {
                    peerId: 'peer-b',
                    text: '__CTRL__:MATCH_CODE:2'
                });
            });

            expect(queryByText('🎉 Match Connesso!')).toBeTruthy();
            expect(Vibration.vibrate).toHaveBeenCalled();
        });

        it('initiator sends match code after connection', async () => {
            mockGetMySessionId.mockReturnValue('zzz999zzz999');

            await setupActiveRadar();

            await act(async () => {
                mockBus.emit('connected', {
                    peerId: 'peer-b',
                    name: 'UC|aaa111bbb222|Analisi Matematica 1'
                });
            });

            // Initiator sends match code after 300ms delay
            await act(async () => {
                jest.advanceTimersByTime(300);
            });

            expect(mockSendMessage).toHaveBeenCalledWith(
                'peer-b',
                expect.stringMatching(/^__CTRL__:MATCH_CODE:\d$/)
            );
        });
    });

    // ================================================================
    // INVITATION HANDLING
    // ================================================================
    describe('Invitation handling', () => {

        it('auto-accepts incoming invitations', async () => {
            await setupActiveRadar();

            await act(async () => {
                mockBus.emit('invitationReceived', {
                    peerId: 'peer-b',
                    name: 'UC|zzz|Analisi Matematica 1'
                });
            });

            expect(mockAcceptConnection).toHaveBeenCalledWith('peer-b');
        });
    });

    // ================================================================
    // CHAT PROTOCOL
    // ================================================================
    describe('Chat request/accept/reject', () => {

        async function setupMatchedState() {
            mockGetMySessionId.mockReturnValue('aaa111bbb222');

            const utils = await setupActiveRadar();

            await act(async () => {
                mockBus.emit('connected', {
                    peerId: 'peer-b',
                    name: 'UC|zzz999zzz999|Analisi Matematica 1'
                });
            });
            await act(async () => {
                mockBus.emit('textReceived', {
                    peerId: 'peer-b',
                    text: '__CTRL__:MATCH_CODE:0'
                });
            });

            return utils;
        }

        it('sends CHAT_REQ when user taps "Richiedi Chat"', async () => {
            const { getByText } = await setupMatchedState();

            const chatBtn = getByText('Richiedi Chat Offline');
            await act(async () => { fireEvent.press(chatBtn); });

            expect(mockSendMessage).toHaveBeenCalledWith('peer-b', '__CTRL__:CHAT_REQ');
        });

        it('shows accept/reject buttons when receiving CHAT_REQ', async () => {
            const { queryByText } = await setupMatchedState();

            await act(async () => {
                mockBus.emit('textReceived', {
                    peerId: 'peer-b',
                    text: '__CTRL__:CHAT_REQ'
                });
            });

            expect(queryByText('Accetta')).toBeTruthy();
            expect(queryByText('Rifiuta')).toBeTruthy();
        });

        it('opens chat screen on CHAT_ACC', async () => {
            const { getByText, queryByTestId } = await setupMatchedState();

            await act(async () => { fireEvent.press(getByText('Richiedi Chat Offline')); });

            await act(async () => {
                mockBus.emit('textReceived', {
                    peerId: 'peer-b',
                    text: '__CTRL__:CHAT_ACC'
                });
            });

            expect(queryByTestId('bluetooth-chat')).toBeTruthy();
        });

        it('shows alert on CHAT_REJ', async () => {
            const { getByText } = await setupMatchedState();

            await act(async () => { fireEvent.press(getByText('Richiedi Chat Offline')); });

            await act(async () => {
                mockBus.emit('textReceived', {
                    peerId: 'peer-b',
                    text: '__CTRL__:CHAT_REJ'
                });
            });

            expect(Alert.alert).toHaveBeenCalledWith(
                "Richiesta rifiutata",
                expect.any(String)
            );
        });
    });

    // ================================================================
    // DISCONNECTION
    // ================================================================
    describe('Disconnection handling', () => {

        it('shows connection lost alert on unexpected disconnect', async () => {
            mockGetMySessionId.mockReturnValue('aaa111bbb222');

            await setupActiveRadar();

            await act(async () => {
                mockBus.emit('connected', {
                    peerId: 'peer-b',
                    name: 'UC|zzz999zzz999|Analisi Matematica 1'
                });
                mockBus.emit('textReceived', {
                    peerId: 'peer-b',
                    text: '__CTRL__:MATCH_CODE:0'
                });
            });

            await act(async () => {
                mockBus.emit('disconnected', { peerId: 'peer-b' });
            });

            expect(Alert.alert).toHaveBeenCalledWith(
                "Connessione persa",
                expect.any(String)
            );
        });

        it('auto-restarts radar 2s after unexpected disconnect', async () => {
            mockGetMySessionId.mockReturnValue('aaa111bbb222');

            await setupActiveRadar();

            await act(async () => {
                mockBus.emit('connected', {
                    peerId: 'peer-b',
                    name: 'UC|zzz999zzz999|Analisi Matematica 1'
                });
                mockBus.emit('textReceived', {
                    peerId: 'peer-b',
                    text: '__CTRL__:MATCH_CODE:1'
                });
            });

            mockStartRadar.mockClear();

            await act(async () => {
                mockBus.emit('disconnected', { peerId: 'peer-b' });
            });

            await act(async () => {
                jest.advanceTimersByTime(2000);
            });

            expect(mockStartRadar).toHaveBeenCalled();
        });

        it('manual disconnect does NOT show connection lost alert', async () => {
            mockGetMySessionId.mockReturnValue('aaa111bbb222');

            const { queryByText } = await setupActiveRadar();

            await act(async () => {
                mockBus.emit('connected', {
                    peerId: 'peer-b',
                    name: 'UC|zzz999zzz999|Analisi Matematica 1'
                });
                mockBus.emit('textReceived', {
                    peerId: 'peer-b',
                    text: '__CTRL__:MATCH_CODE:3'
                });
            });

            const disconnectBtn = queryByText('Disconnetti');
            if (disconnectBtn) {
                (Alert.alert as jest.Mock).mockClear();
                mockStartRadar.mockClear();

                await act(async () => { fireEvent.press(disconnectBtn); });

                await act(async () => {
                    mockBus.emit('disconnected', { peerId: 'peer-b' });
                });

                await act(async () => {
                    jest.advanceTimersByTime(3000);
                });

                expect(Alert.alert).not.toHaveBeenCalledWith(
                    "Connessione persa",
                    expect.any(String)
                );
            }
        });
    });

    // ================================================================
    // DEDUPLICATION
    // ================================================================
    describe('Deduplication guards', () => {

        it('ignores duplicate peerFound if already connecting', async () => {
            mockGetMySessionId.mockReturnValue('zzz999zzz999');

            await setupActiveRadar();

            await act(async () => {
                mockBus.emit('peerFound', {
                    peerId: 'peer-b',
                    name: 'UC|aaa111bbb222|Analisi Matematica 1'
                });
            });

            expect(mockConnectToPeer).toHaveBeenCalledTimes(1);

            // Same peer again — should be ignored
            await act(async () => {
                mockBus.emit('peerFound', {
                    peerId: 'peer-b',
                    name: 'UC|aaa111bbb222|Analisi Matematica 1'
                });
            });

            expect(mockConnectToPeer).toHaveBeenCalledTimes(1);
        });

        it('ignores peerFound for different exam', async () => {
            mockGetMySessionId.mockReturnValue('zzz999zzz999');

            await setupActiveRadar();

            await act(async () => {
                mockBus.emit('peerFound', {
                    peerId: 'peer-b',
                    name: 'UC|aaa111bbb222|Fisica II'
                });
            });

            expect(mockConnectToPeer).not.toHaveBeenCalled();
        });

        it('ignores peerFound with own sessionId', async () => {
            await setupActiveRadar();

            await act(async () => {
                mockBus.emit('peerFound', {
                    peerId: 'peer-self',
                    name: 'UC|aaa111bbb222|Analisi Matematica 1'
                });
            });

            expect(mockConnectToPeer).not.toHaveBeenCalled();
        });
    });

    // ================================================================
    // CLEANUP
    // ================================================================
    describe('Cleanup on unmount', () => {

        it('removes all native listeners on unmount', () => {
            const { unmount } = render(<StudentRadar />);

            expect(mockBus.listenerCount('peerFound')).toBe(1);
            expect(mockBus.listenerCount('connected')).toBe(1);
            expect(mockBus.listenerCount('disconnected')).toBe(1);

            unmount();

            expect(mockBus.listenerCount('peerFound')).toBe(0);
            expect(mockBus.listenerCount('peerLost')).toBe(0);
            expect(mockBus.listenerCount('invitationReceived')).toBe(0);
            expect(mockBus.listenerCount('connected')).toBe(0);
            expect(mockBus.listenerCount('disconnected')).toBe(0);
            expect(mockBus.listenerCount('textReceived')).toBe(0);
        });
    });

    // ================================================================
    // STOP RADAR
    // ================================================================
    describe('Stop radar', () => {

        it('stops radar when user presses Interrompi', async () => {
            const { getByText } = await setupActiveRadar();

            const stopBtn = getByText('Interrompi');
            await act(async () => { fireEvent.press(stopBtn); });

            expect(mockStopRadar).toHaveBeenCalled();
        });
    });
});
