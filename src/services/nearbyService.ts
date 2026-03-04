import { Platform, PermissionsAndroid, Alert } from 'react-native';
import * as NearbyConnections from 'expo-nearby-connections';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Using P2P_STAR strategy for 1-to-N or N-to-N topologies
// In expo-nearby-connections: 1 = P2P_CLUSTER, 2 = P2P_STAR, 3 = P2P_POINT_TO_POINT
const STRATEGY = 2; // P2P_STAR

class NearbyService {
    private myPeerId: string | null = null;
    private mySessionId: string = "uninitialized";
    private _isAdvertising = false;
    private _isDiscovering = false;

    /**
     * Generate a compact 12-char alphanumeric ID.
     * Short enough to fit inside the 60-char Nearby identifier
     * while still providing ~62 bits of entropy (no realistic collision risk).
     */
    private generateCompactId(): string {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < 12; i++) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    }

    async getOrCreateSessionId() {
        if (this.mySessionId !== "uninitialized") {
            return this.mySessionId;
        }
        try {
            let id = await AsyncStorage.getItem('@nearby_device_id');
            // Regenerate if missing or if leftover UUID v4 (too long for 60-char identifier limit)
            if (!id || id.length > 16) {
                id = this.generateCompactId();
                await AsyncStorage.setItem('@nearby_device_id', id);
            }
            this.mySessionId = id;
        } catch (e) {
            this.mySessionId = this.generateCompactId();
        }
        return this.mySessionId;
    }

    getMySessionId() {
        return this.mySessionId;
    }

    /**
     * Request necessary permissions for Nearby Connections
     */
    async requestPermissions(): Promise<boolean> {
        if (Platform.OS === 'ios') {
            // iOS permissions are handled via Info.plist automatically when using the framework
            return true;
        }

        if (Platform.OS === 'android') {
            try {
                if (Platform.Version >= 31) {
                    const granted = await PermissionsAndroid.requestMultiple([
                        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
                        PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE,
                        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                    ]);
                    return Object.values(granted).every(
                        (permission) => permission === PermissionsAndroid.RESULTS.GRANTED
                    );
                } else {
                    const granted = await PermissionsAndroid.requestMultiple([
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                    ]);
                    return Object.values(granted).every(
                        (permission) => permission === PermissionsAndroid.RESULTS.GRANTED
                    );
                }
            } catch (err) {
                console.warn(err);
                return false;
            }
        }

        return false;
    }

    /**
     * Start the Radar: Both advertises presence and discovers others.
     * Does NOT touch listeners -- React useEffect manages their lifecycle.
     */
    async startRadar(examName: string): Promise<boolean> {
        const hasPermissions = await this.requestPermissions();
        if (!hasPermissions) {
            Alert.alert(
                "Permessi mancanti",
                "Per usare il Radar Studenti devi concedere i permessi Bluetooth e Posizione."
            );
            return false;
        }

        // Always stop any previous advertising/discovery first so the native
        // module creates fresh MCPeerID + MCSession objects for this cycle.
        await this.stopRadar();

        try {
            const sessionId = await this.getOrCreateSessionId();

            // Format: UC|sessionId|examName (Limitato a 60 chars per evitare troncamenti iOS)
            const identifier = `UC|${sessionId}|${examName}`.substring(0, 60);

            // Start discovering others first, then advertise.
            // Both now share the same MCPeerID + MCSession in the native module,
            // so the call order no longer matters for session integrity.

            // 1. Start discovering others
            await NearbyConnections.startDiscovery(identifier, STRATEGY);
            this._isDiscovering = true;

            // 2. Start advertising ourselves
            const peerId = await NearbyConnections.startAdvertise(identifier, STRATEGY);
            this.myPeerId = peerId;
            this._isAdvertising = true;

            return true;
        } catch (error) {
            console.error("Error starting radar:", error);
            return false;
        }
    }

    /**
     * Stops advertising and discovery. Does NOT disconnect active connections
     * and does NOT touch event listeners.
     */
    async stopRadar() {
        if (this._isAdvertising) {
            try {
                await NearbyConnections.stopAdvertise();
            } catch (e) {
                console.error("Error stopping advertise:", e);
            }
            this._isAdvertising = false;
        }
        if (this._isDiscovering) {
            try {
                await NearbyConnections.stopDiscovery();
            } catch (e) {
                console.error("Error stopping discovery:", e);
            }
            this._isDiscovering = false;
        }
    }

    /**
     * Request connection to a discovered peer
     */
    async connectToPeer(peerId: string) {
        await NearbyConnections.requestConnection(peerId);
    }

    /**
     * Accept an incoming connection request
     */
    async acceptConnection(peerId: string) {
        await NearbyConnections.acceptConnection(peerId);
    }

    /**
     * Reject an incoming connection request
     */
    async rejectConnection(peerId: string) {
        try {
            await NearbyConnections.rejectConnection(peerId);
        } catch (error) {
            console.error("Error rejecting connection:", error);
        }
    }

    /**
     * Disconnect from a peer
     */
    async disconnectPeer(peerId: string) {
        try {
            await NearbyConnections.disconnect(peerId);
        } catch (error) {
            console.error("Error disconnecting:", error);
        }
    }

    /**
     * Send text message to connected peer
     */
    async sendMessage(peerId: string, text: string) {
        await NearbyConnections.sendText(peerId, text);
    }

    // --- Direct native event subscriptions. Caller owns lifecycle (cleanup via unsub). ---

    onPeerFound(cb: (data: { peerId: string; name: string }) => void) {
        return NearbyConnections.onPeerFound(cb);
    }

    onPeerLost(cb: (data: { peerId: string }) => void) {
        return NearbyConnections.onPeerLost(cb);
    }

    onInvitationReceived(cb: (data: { peerId: string; name: string }) => void) {
        return NearbyConnections.onInvitationReceived(cb);
    }

    onConnected(cb: (data: { peerId: string; name: string }) => void) {
        return NearbyConnections.onConnected(cb);
    }

    onDisconnected(cb: (data: { peerId: string }) => void) {
        return NearbyConnections.onDisconnected(cb);
    }

    onTextReceived(cb: (data: { peerId: string; text: string }) => void) {
        return NearbyConnections.onTextReceived(cb);
    }

    getMyPeerId() {
        return this.myPeerId;
    }
}

export const nearbyService = new NearbyService();
