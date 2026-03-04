import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Keyboard,
    ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { nearbyService } from '../services/nearbyService';

interface ConnectedDevice {
    id: string; // Peer ID from expo-nearby-connections
    name: string | null;
}

interface Message {
    id: string;
    text: string;
    isSender: boolean;
    timestamp: Date;
    status?: 'sent' | 'delivered' | 'read';
}

interface BluetoothChatScreenProps {
    connectedDevice: ConnectedDevice;
    onDisconnect: () => void;
    primaryColor?: string;
}

export const BluetoothChatScreen: React.FC<BluetoothChatScreenProps> = ({
    connectedDevice,
    onDisconnect,
    primaryColor = '#10b981'
}) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const flatListRef = useRef<FlatList>(null);
    const insets = useSafeAreaInsets();

    const deviceName = connectedDevice.name || 'Studente Sconosciuto';

    useEffect(() => {
        // Setup real listeners for incoming messages and disconnections
        const unsubText = nearbyService.onTextReceived(({ peerId, text }) => {
            if (peerId === connectedDevice.id) {
                if (text.startsWith('__CTRL__:')) {
                    const parts = text.split(':');
                    if (parts.length >= 3) {
                        const ctrlType = parts[1];
                        const msgId = parts.slice(2).join(':');

                        if (ctrlType === 'DELIVERED') {
                            setMessages(prev => prev.map(m => m.id === msgId && m.status === 'sent' ? { ...m, status: 'delivered' } : m));
                        } else if (ctrlType === 'READ') {
                            setMessages(prev => prev.map(m => m.id === msgId && (m.status === 'sent' || m.status === 'delivered') ? { ...m, status: 'read' } : m));
                        }
                    }
                } else {
                    let finalId = Date.now().toString() + Math.random().toString();
                    let finalText = text;

                    if (text.startsWith('__MSG__:')) {
                        const firstColon = text.indexOf(':', 8);
                        if (firstColon !== -1) {
                            finalId = text.substring(8, firstColon);
                            finalText = text.substring(firstColon + 1);
                        }
                    }

                    const newMessage: Message = {
                        id: finalId,
                        text: finalText,
                        isSender: false,
                        timestamp: new Date()
                    };
                    setMessages(prev => [...prev, newMessage]);

                    // Send DELIVERED receipt immediately
                    nearbyService.sendMessage(peerId, `__CTRL__:DELIVERED:${finalId}`).catch(() => { });

                    // Simulate READ receipt after a short delay for the "wow" visual effect
                    setTimeout(() => {
                        nearbyService.sendMessage(peerId, `__CTRL__:READ:${finalId}`).catch(() => { });
                    }, 800);
                }
            }
        });

        // Event listener is already managed in StudentRadar, but just in case we need strict local cleanup
        // Note: Disconnection is handled upstream in StudentRadar which drops the chat modal.

        return () => {
            unsubText();
        };
    }, [connectedDevice.id]);

    const sendMessage = async () => {
        if (!inputText.trim()) return;

        const messageToSend = inputText.trim();

        // 1. Aggiorno SUBITO la UI locale per una sensazione di reattività (Optimistic UI)
        const messageId = Date.now().toString();
        const newMessage: Message = {
            id: messageId,
            text: messageToSend,
            isSender: true,
            timestamp: new Date(),
            status: 'sent'
        };

        setMessages(prev => [...prev, newMessage]);
        setInputText('');
        Keyboard.dismiss();

        // 2. LOGICA REALE INVIO TESTO P2P (Formato strutturato)
        try {
            await nearbyService.sendMessage(connectedDevice.id, `__MSG__:${messageId}:${messageToSend}`);
        } catch (error) {
            console.error("Errore nell'invio del messaggio P2P", error);
        }
    };

    const formatTimestamp = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const renderMessage = ({ item }: { item: Message }) => {
        const isMe = item.isSender;

        return (
            <View style={[styles.messageRow, isMe ? styles.messageRowSender : styles.messageRowReceiver]}>
                <View style={[
                    styles.messageBubble,
                    isMe ? [styles.messageBubbleSender, { backgroundColor: primaryColor }] : styles.messageBubbleReceiver,
                    isMe ? styles.bubbleTailSender : styles.bubbleTailReceiver
                ]}>
                    <Text style={[styles.messageText, isMe ? styles.messageTextSender : styles.messageTextReceiver]}>
                        {item.text}
                    </Text>
                </View>
                <View style={styles.messageMetaContainer}>
                    <Text style={styles.timestamp}>
                        {formatTimestamp(item.timestamp)}
                    </Text>
                    {isMe && item.status && (
                        <Ionicons
                            name={item.status === 'sent' ? 'checkmark' : 'checkmark-done'}
                            size={16}
                            color={item.status === 'read' ? '#3b82f6' : '#94a3b8'}
                            style={styles.ticks}
                        />
                    )}
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={[
                styles.header,
                {
                    backgroundColor: primaryColor,
                    paddingTop: Math.max(insets.top, Platform.OS === 'android' ? 40 : 12) + 12
                }
            ]}>
                <TouchableOpacity onPress={onDisconnect} style={styles.disconnectBtn}>
                    <Ionicons name="chevron-back" size={24} color="#ffffffff" />
                    <Text style={styles.disconnectText}>Back</Text>
                </TouchableOpacity>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle} numberOfLines={1}>Chat Segreta</Text>
                    <View style={styles.headerSubtitleContainer}>
                        <View style={styles.onlineDot} />
                        <Text style={styles.headerSubtitle} numberOfLines={1}>
                            Connesso a {deviceName}
                        </Text>
                    </View>
                </View>
                <View style={{ width: 80 }} />
            </View>

            <KeyboardAvoidingView
                style={styles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <FlatList
                    ref={flatListRef}
                    data={messages}
                    keyExtractor={item => item.id}
                    renderItem={renderMessage}
                    contentContainerStyle={styles.messagesList}
                    onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
                    onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
                    ListEmptyComponent={
                        <View style={styles.emptyContainer}>
                            <Ionicons name="chatbubbles-outline" size={48} color="#cbd5e1" />
                            <Text style={styles.emptyText}>Nessun messaggio.</Text>
                            <Text style={styles.emptySubText}>Inizia a chattare!</Text>
                        </View>
                    }
                />

                <View style={[styles.inputContainer, { paddingBottom: Math.max(insets.bottom, Platform.OS === 'ios' ? 20 : 12) + 8 }]}>
                    <View style={styles.textInputWrapper}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Scrivi un messaggio..."
                            placeholderTextColor="#94a3b8"
                            value={inputText}
                            onChangeText={setInputText}
                            multiline
                            maxLength={200}
                        />
                    </View>
                    <TouchableOpacity
                        style={[
                            styles.sendButton,
                            { backgroundColor: inputText.trim() ? primaryColor : '#e2e8f0' }
                        ]}
                        onPress={sendMessage}
                        disabled={!inputText.trim()}
                    >
                        <Ionicons
                            name="send"
                            size={18}
                            color={inputText.trim() ? '#ffffff' : '#94a3b8'}
                            style={{ marginLeft: 2 }} // Aggiusto il centro visivo dell'icona send
                        />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 12,
        paddingHorizontal: 8,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        zIndex: 10, // Per far cadere l'ombra sulla lista
    },
    disconnectBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        width: 100,
    },
    disconnectText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 2,
    },
    headerTitleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 2,
    },
    headerSubtitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    onlineDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#4ade80', // Verde fluo acceso
        marginRight: 4,
    },
    headerSubtitle: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 11,
        fontWeight: '500',
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    messagesList: {
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 20,
    },
    messageRow: {
        marginBottom: 16,
        width: '100%',
        flexDirection: 'column',
    },
    messageRowSender: {
        alignItems: 'flex-end',
    },
    messageRowReceiver: {
        alignItems: 'flex-start',
    },
    messageBubble: {
        maxWidth: '75%',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
    },
    messageBubbleSender: {
        // Background color è gestito via prop inline
        borderBottomRightRadius: 4,
    },
    messageBubbleReceiver: {
        backgroundColor: '#e2e8f0', // Grigio chiaro
        borderBottomLeftRadius: 4,
    },
    bubbleTailSender: {},
    bubbleTailReceiver: {},
    messageText: {
        fontSize: 15,
        lineHeight: 20,
    },
    messageTextSender: {
        color: '#ffffff',
    },
    messageTextReceiver: {
        color: '#1e293b',
    },
    timestamp: {
        fontSize: 11,
        color: '#94a3b8',
    },
    messageMetaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        marginHorizontal: 4,
    },
    ticks: {
        marginLeft: 4,
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#94a3b8',
        marginTop: 12,
    },
    emptySubText: {
        fontSize: 14,
        color: '#cbd5e1',
        marginTop: 6,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 12,
        paddingBottom: Platform.OS === 'ios' ? 20 : 12,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#f1f5f9',
    },
    textInputWrapper: {
        flex: 1,
        backgroundColor: '#f1f5f9',
        borderRadius: 24,
        minHeight: 40,
        maxHeight: 120,
        paddingHorizontal: 16,
        paddingTop: Platform.OS === 'ios' ? 10 : 8,
        paddingBottom: Platform.OS === 'ios' ? 10 : 8,
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        fontSize: 15,
        color: '#1e293b',
    },
    sendButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2, // Allineamento con il wrapper testuale se espanso
    },
});
