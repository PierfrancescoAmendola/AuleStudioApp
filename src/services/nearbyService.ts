import { Platform, PermissionsAndroid, Alert } from 'react-native';
import * as NearbyConnections from 'expo-nearby-connections';

// Using P2P_STAR strategy for 1-to-N or N-to-N topologies
// In expo-nearby-connections: 1 = P2P_CLUSTER, 2 = P2P_STAR, 3 = P2P_POINT_TO_POINT
const STRATEGY = 2; // P2P_STAR

class NearbyService {
    private myPeerId: string | null = null;
    private listeners: Array<() => void> = [];

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
                // If API level >= 31, we need BLUETOOTH_ADVERTISE, BLUETOOTH_CONNECT, BLUETOOTH_SCAN, etc.
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
                    // Lower API levels mainly need Location
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
     * Start the Radar: Both advertises presence and discovers others
     * @param examName The name of the exam to use as identifier
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

        try {
            // Identifier is combined to ensure they find matching exams
            const identifier = `UniChat_${examName}`;

            // Start discovering others
            await NearbyConnections.startDiscovery(identifier, STRATEGY);

            // Start advertising ourselves
            const peerId = await NearbyConnections.startAdvertise(identifier, STRATEGY);
            this.myPeerId = peerId;

            return true;
        } catch (error) {
            console.error("Error starting radar:", error);
            return false;
        }
    }

    /**
     * Stops everything and cleans up
     */
    async stopRadar() {
        try {
            await NearbyConnections.stopAdvertise();
            await NearbyConnections.stopDiscovery();
            this.myPeerId = null;
            this.clearListeners();
        } catch (error) {
            console.error("Error stopping radar:", error);
        }
    }

    /**
     * Request connection to a discovered peer
     */
    async connectToPeer(peerId: string) {
        try {
            await NearbyConnections.requestConnection(peerId);
        } catch (error) {
            console.error("Error requesting connection:", error);
            throw error;
        }
    }

    /**
     * Accept an incoming connection request
     */
    async acceptConnection(peerId: string) {
        try {
            await NearbyConnections.acceptConnection(peerId);
        } catch (error) {
            console.error("Error accepting connection:", error);
            throw error;
        }
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
        try {
            await NearbyConnections.sendText(peerId, text);
        } catch (error) {
            console.error("Error sending text:", error);
            throw error;
        }
    }

    // --- EVENT LISTENERS ---

    onPeerFound(callback: (data: { peerId: string; name: string }) => void) {
        const unsub = NearbyConnections.onPeerFound(callback);
        this.listeners.push(unsub);
        return unsub;
    }

    onPeerLost(callback: (data: { peerId: string }) => void) {
        const unsub = NearbyConnections.onPeerLost(callback);
        this.listeners.push(unsub);
        return unsub;
    }

    onInvitationReceived(callback: (data: { peerId: string; name: string }) => void) {
        const unsub = NearbyConnections.onInvitationReceived(callback);
        this.listeners.push(unsub);
        return unsub;
    }

    onConnected(callback: (data: { peerId: string; name: string }) => void) {
        const unsub = NearbyConnections.onConnected(callback);
        this.listeners.push(unsub);
        return unsub;
    }

    onDisconnected(callback: (data: { peerId: string }) => void) {
        const unsub = NearbyConnections.onDisconnected(callback);
        this.listeners.push(unsub);
        return unsub;
    }

    onTextReceived(callback: (data: { peerId: string; text: string }) => void) {
        const unsub = NearbyConnections.onTextReceived(callback);
        this.listeners.push(unsub);
        return unsub;
    }

    /**
     * Clear all active event listeners
     */
    private clearListeners() {
        this.listeners.forEach(unsub => {
            if (typeof unsub === 'function') {
                unsub();
            }
        });
        this.listeners = [];
    }

    getMyPeerId() {
        return this.myPeerId;
    }
}

export const nearbyService = new NearbyService();
