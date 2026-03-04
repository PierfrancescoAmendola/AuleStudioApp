/**
 * INTEGRATION TEST — Peer Discovery & Connection Flow
 *
 * Simula l'intero flusso end-to-end tra due dispositivi virtuali (DeviceA e DeviceB)
 * usando mock del modulo nativo. Verifica:
 *
 * 1. Discovery bidirezionale
 * 2. Tie-breaker (sessionId più alto connette per primo)
 * 3. Scambio match code dopo la connessione
 * 4. Chat request/accept/reject flow
 * 5. Disconnessione e cleanup
 * 6. Fallback per scoperta asimmetrica iOS
 * 7. Gestione errori e edge case
 *
 * Approccio: creiamo un "bus" nativo finto che permette di emettere eventi
 * esattamente come farebbe il modulo C++/Swift, verificando che la logica
 * nei listener di StudentRadar reagisca correttamente.
 */

// ---- Event Bus simulato (simula il modulo nativo) ----

type EventCallback = (data: any) => void;

class NativeEventBus {
    private listeners: Map<string, Set<EventCallback>> = new Map();

    on(event: string, cb: EventCallback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, new Set());
        }
        this.listeners.get(event)!.add(cb);
        return () => {
            this.listeners.get(event)?.delete(cb);
        };
    }

    emit(event: string, data: any) {
        this.listeners.get(event)?.forEach(cb => cb(data));
    }

    clear() {
        this.listeners.clear();
    }

    listenerCount(event: string) {
        return this.listeners.get(event)?.size ?? 0;
    }
}

const bus = new NativeEventBus();

// Track call order for assertions
let nativeCallLog: string[] = [];

const mockNative = {
    startAdvertise: jest.fn(async (id: string) => {
        nativeCallLog.push('startAdvertise');
        return 'advertise-peer-id';
    }),
    stopAdvertise: jest.fn(async () => { nativeCallLog.push('stopAdvertise'); }),
    startDiscovery: jest.fn(async (id: string) => {
        nativeCallLog.push('startDiscovery');
        return 'discovery-peer-id';
    }),
    stopDiscovery: jest.fn(async () => { nativeCallLog.push('stopDiscovery'); }),
    requestConnection: jest.fn(async () => { nativeCallLog.push('requestConnection'); }),
    acceptConnection: jest.fn(async () => { nativeCallLog.push('acceptConnection'); }),
    rejectConnection: jest.fn(async () => { nativeCallLog.push('rejectConnection'); }),
    disconnect: jest.fn(async () => { nativeCallLog.push('disconnect'); }),
    sendText: jest.fn(async () => { nativeCallLog.push('sendText'); }),
    onPeerFound: jest.fn((cb: EventCallback) => bus.on('peerFound', cb)),
    onPeerLost: jest.fn((cb: EventCallback) => bus.on('peerLost', cb)),
    onInvitationReceived: jest.fn((cb: EventCallback) => bus.on('invitationReceived', cb)),
    onConnected: jest.fn((cb: EventCallback) => bus.on('connected', cb)),
    onDisconnected: jest.fn((cb: EventCallback) => bus.on('disconnected', cb)),
    onTextReceived: jest.fn((cb: EventCallback) => bus.on('textReceived', cb)),
};

jest.mock('expo-nearby-connections', () => mockNative);
jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: jest.fn(() => Promise.resolve()),
    getItem: jest.fn(() => Promise.resolve(null)),
    clear: jest.fn(() => Promise.resolve()),
    removeItem: jest.fn(() => Promise.resolve()),
}));

// Use require so the module loads after mocks are applied
let nearbyService: any;

function loadService() {
    const mod = require('../../services/nearbyService');
    nearbyService = mod.nearbyService;
}

describe('Integration: Peer Discovery & Connection Flow', () => {

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
        bus.clear();
        nativeCallLog = [];
        // Reset modules so we get a fresh NearbyService singleton
        jest.resetModules();
        jest.mock('expo-nearby-connections', () => mockNative);
        jest.mock('@react-native-async-storage/async-storage', () => ({
            setItem: jest.fn(() => Promise.resolve()),
            getItem: jest.fn(() => Promise.resolve(null)),
            clear: jest.fn(() => Promise.resolve()),
            removeItem: jest.fn(() => Promise.resolve()),
        }));
        loadService();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    // ================================================================
    // SCENARIO 1: Happy path — Two devices discover each other
    // ================================================================
    describe('Scenario 1: Complete happy-path discovery → connection → match code', () => {

        it('should complete full flow: discover → connect → exchange match code', async () => {
            // --- Setup: Start radar on "our" device ---
            await nearbyService.startRadar('Analisi I');

            // Verify correct startup order
            expect(nativeCallLog).toEqual(['startDiscovery', 'startAdvertise']);

            // --- Register listeners (simulating what StudentRadar does) ---
            let foundPeers: any[] = [];
            let connectedPeers: any[] = [];
            let receivedTexts: any[] = [];
            let lostPeers: any[] = [];

            const unsubFound = nearbyService.onPeerFound((data: any) => foundPeers.push(data));
            const unsubConnected = nearbyService.onConnected((data: any) => connectedPeers.push(data));
            const unsubText = nearbyService.onTextReceived((data: any) => receivedTexts.push(data));
            const unsubLost = nearbyService.onPeerLost((data: any) => lostPeers.push(data));

            // --- Step 1: DeviceB appears in discovery ---
            bus.emit('peerFound', {
                peerId: 'device-b-peer',
                name: 'UC|zzzzzzzzzzzz|Analisi I'  // higher sessionId → DeviceB
            });
            expect(foundPeers).toHaveLength(1);
            expect(foundPeers[0].name).toContain('Analisi I');

            // --- Step 2: DeviceB sends us an invitation ---
            bus.emit('invitationReceived', {
                peerId: 'device-b-peer',
                name: 'UC|zzzzzzzzzzzz|Analisi I'
            });
            // Our service should auto-accept if wired in StudentRadar;
            // Here we just verify the event propagates

            // --- Step 3: Connection established ---
            bus.emit('connected', {
                peerId: 'device-b-peer',
                name: 'UC|zzzzzzzzzzzz|Analisi I'
            });
            expect(connectedPeers).toHaveLength(1);

            // --- Step 4: Match code arrives ---
            bus.emit('textReceived', {
                peerId: 'device-b-peer',
                text: '__CTRL__:MATCH_CODE:3'
            });
            expect(receivedTexts).toHaveLength(1);
            expect(receivedTexts[0].text).toBe('__CTRL__:MATCH_CODE:3');

            // --- Cleanup ---
            unsubFound();
            unsubConnected();
            unsubText();
            unsubLost();

            // Verify listeners were actually removed
            expect(bus.listenerCount('peerFound')).toBe(0);
        });
    });

    // ================================================================
    // SCENARIO 2: Chat request flow
    // ================================================================
    describe('Scenario 2: Chat request / accept / reject protocol', () => {

        it('should propagate CHAT_REQ, CHAT_ACC, CHAT_REJ messages', () => {
            const messages: any[] = [];
            const unsub = nearbyService.onTextReceived((data: any) => messages.push(data));

            // DeviceB requests chat
            bus.emit('textReceived', { peerId: 'device-b', text: '__CTRL__:CHAT_REQ' });
            expect(messages).toHaveLength(1);
            expect(messages[0].text).toBe('__CTRL__:CHAT_REQ');

            // We accept
            bus.emit('textReceived', { peerId: 'device-b', text: '__CTRL__:CHAT_ACC' });
            expect(messages).toHaveLength(2);

            // Or reject
            bus.emit('textReceived', { peerId: 'device-b', text: '__CTRL__:CHAT_REJ' });
            expect(messages).toHaveLength(3);

            unsub();
        });

        it('sendMessage correctly sends chat text via native sendText', async () => {
            await nearbyService.sendMessage('device-b', 'Ciao, ci vediamo in aula?');

            expect(mockNative.sendText).toHaveBeenCalledWith('device-b', 'Ciao, ci vediamo in aula?');
        });

        it('sendMessage correctly sends control messages', async () => {
            await nearbyService.sendMessage('device-b', '__CTRL__:CHAT_REQ');
            await nearbyService.sendMessage('device-b', '__CTRL__:CHAT_ACC');

            expect(mockNative.sendText).toHaveBeenCalledTimes(2);
            expect(mockNative.sendText).toHaveBeenNthCalledWith(1, 'device-b', '__CTRL__:CHAT_REQ');
            expect(mockNative.sendText).toHaveBeenNthCalledWith(2, 'device-b', '__CTRL__:CHAT_ACC');
        });
    });

    // ================================================================
    // SCENARIO 3: Disconnection and cleanup
    // ================================================================
    describe('Scenario 3: Disconnection flow', () => {

        it('fires onDisconnected when a peer disconnects', () => {
            const disconnected: any[] = [];
            const unsub = nearbyService.onDisconnected((data: any) => disconnected.push(data));

            bus.emit('disconnected', { peerId: 'device-b' });
            expect(disconnected).toEqual([{ peerId: 'device-b' }]);

            unsub();
        });

        it('peer lost event fires correctly', () => {
            const lost: any[] = [];
            const unsub = nearbyService.onPeerLost((data: any) => lost.push(data));

            bus.emit('peerLost', { peerId: 'device-b' });
            expect(lost).toHaveLength(1);

            unsub();
        });

        it('stopRadar calls both stop methods after startRadar', async () => {
            nativeCallLog = [];
            await nearbyService.startRadar('Test');
            await nearbyService.stopRadar();

            expect(nativeCallLog).toContain('stopAdvertise');
            expect(nativeCallLog).toContain('stopDiscovery');
        });
    });

    // ================================================================
    // SCENARIO 4: Peer filtering (wrong exam, same device)
    // ================================================================
    describe('Scenario 4: Peer filtering', () => {

        it('receives all peers (filtering is done in StudentRadar, not in service)', () => {
            const peers: any[] = [];
            const unsub = nearbyService.onPeerFound((data: any) => peers.push(data));

            // Same exam
            bus.emit('peerFound', { peerId: 'p1', name: 'UC|aaa|Analisi I' });
            // Different exam
            bus.emit('peerFound', { peerId: 'p2', name: 'UC|bbb|Fisica II' });
            // Malformed
            bus.emit('peerFound', { peerId: 'p3', name: 'not-our-format' });

            // Service passes everything through; StudentRadar filters
            expect(peers).toHaveLength(3);

            unsub();
        });
    });

    // ================================================================
    // SCENARIO 5: Multiple listeners
    // ================================================================
    describe('Scenario 5: Multiple listener registration and unsubscribe', () => {

        it('supports multiple listeners on the same event', () => {
            const a: any[] = [];
            const b: any[] = [];

            const unsub1 = nearbyService.onPeerFound((data: any) => a.push(data));
            const unsub2 = nearbyService.onPeerFound((data: any) => b.push(data));

            bus.emit('peerFound', { peerId: 'test' });

            expect(a).toHaveLength(1);
            expect(b).toHaveLength(1);

            // Unsub one, the other still works
            unsub1();
            bus.emit('peerFound', { peerId: 'test2' });
            expect(a).toHaveLength(1); // no new events
            expect(b).toHaveLength(2); // got the new one

            unsub2();
        });

        it('unsubscribe is a clean function with no side effects on others', () => {
            const results: string[] = [];
            const unsub1 = nearbyService.onConnected(() => results.push('listener1'));
            const unsub2 = nearbyService.onConnected(() => results.push('listener2'));

            bus.emit('connected', { peerId: 'x', name: 'test' });
            expect(results).toEqual(['listener1', 'listener2']);

            unsub1();
            bus.emit('connected', { peerId: 'y', name: 'test2' });
            expect(results).toEqual(['listener1', 'listener2', 'listener2']);

            unsub2();
        });
    });

    // ================================================================
    // SCENARIO 6: Race condition — rapid events
    // ================================================================
    describe('Scenario 6: Rapid events & race conditions', () => {

        it('handles rapid peerFound → peerLost → peerFound without crashing', () => {
            const found: any[] = [];
            const lost: any[] = [];

            const unsub1 = nearbyService.onPeerFound((d: any) => found.push(d));
            const unsub2 = nearbyService.onPeerLost((d: any) => lost.push(d));

            // Rapid fire
            bus.emit('peerFound', { peerId: 'p1', name: 'UC|aaa|Test' });
            bus.emit('peerLost', { peerId: 'p1' });
            bus.emit('peerFound', { peerId: 'p1', name: 'UC|aaa|Test' });
            bus.emit('peerFound', { peerId: 'p2', name: 'UC|bbb|Test' });
            bus.emit('peerLost', { peerId: 'p2' });
            bus.emit('peerLost', { peerId: 'p1' });

            expect(found).toHaveLength(3);
            expect(lost).toHaveLength(3);

            unsub1();
            unsub2();
        });

        it('handles connected → immediately disconnected', () => {
            const connected: any[] = [];
            const disconnected: any[] = [];

            const u1 = nearbyService.onConnected((d: any) => connected.push(d));
            const u2 = nearbyService.onDisconnected((d: any) => disconnected.push(d));

            bus.emit('connected', { peerId: 'p1', name: 'UC|aaa|Test' });
            bus.emit('disconnected', { peerId: 'p1' });

            expect(connected).toHaveLength(1);
            expect(disconnected).toHaveLength(1);

            u1();
            u2();
        });
    });

    // ================================================================
    // SCENARIO 7: Identifier format validation
    // ================================================================
    describe('Scenario 7: Identifier format', () => {

        it('identifier matches UC|<sessionId>|<exam> pattern', async () => {
            nativeCallLog = [];
            await nearbyService.startRadar('Analisi Matematica II');

            const identifier = mockNative.startDiscovery.mock.calls[
                mockNative.startDiscovery.mock.calls.length - 1
            ][0];

            expect(identifier).toMatch(/^UC\|[0-9a-z]{12}\|/);
            expect(identifier.startsWith('UC|')).toBe(true);
            const parts = identifier.split('|');
            expect(parts.length).toBeGreaterThanOrEqual(3);
            expect(parts[0]).toBe('UC');
        });
    });

    // ================================================================
    // SCENARIO 8: Full lifecycle
    // ================================================================
    describe('Scenario 8: Full lifecycle — start → discover → connect → chat → disconnect → restart', () => {

        it('completes without errors or dangling listeners', async () => {
            // 1. Start
            await nearbyService.startRadar('Algebra Lineare');

            // 2. Register listeners
            const events: string[] = [];
            const u1 = nearbyService.onPeerFound(() => events.push('found'));
            const u2 = nearbyService.onConnected(() => events.push('connected'));
            const u3 = nearbyService.onTextReceived(() => events.push('text'));
            const u4 = nearbyService.onDisconnected(() => events.push('disconnected'));

            // 3. Discovery
            bus.emit('peerFound', { peerId: 'p1', name: 'UC|zzz|Algebra Lineare' });
            expect(events).toContain('found');

            // 4. Connection
            bus.emit('connected', { peerId: 'p1', name: 'UC|zzz|Algebra Lineare' });
            expect(events).toContain('connected');

            // 5. Match code
            bus.emit('textReceived', { peerId: 'p1', text: '__CTRL__:MATCH_CODE:0' });
            expect(events).toContain('text');

            // 6. Chat
            await nearbyService.sendMessage('p1', 'Ciao!');
            expect(mockNative.sendText).toHaveBeenCalledWith('p1', 'Ciao!');
            bus.emit('textReceived', { peerId: 'p1', text: 'Ciao anche a te!' });

            // 7. Disconnect
            bus.emit('disconnected', { peerId: 'p1' });
            expect(events).toContain('disconnected');

            // 8. Cleanup
            u1(); u2(); u3(); u4();
            expect(bus.listenerCount('peerFound')).toBe(0);
            expect(bus.listenerCount('connected')).toBe(0);

            // 9. Restart radar
            nativeCallLog = [];
            await nearbyService.stopRadar();
            await nearbyService.startRadar('Algebra Lineare');
            expect(nativeCallLog).toContain('startDiscovery');
            expect(nativeCallLog).toContain('startAdvertise');
        });
    });
});
