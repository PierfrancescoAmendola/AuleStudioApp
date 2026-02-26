import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface GuideCarouselProps {
    isVisible: boolean;
    onClose: () => void;
    topic: string;
}

export const GuideCarousel: React.FC<GuideCarouselProps> = ({ isVisible, onClose, topic }) => {
    return (
        <Modal visible={isVisible} transparent animationType="fade">
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Guida Rapida</Text>
                    <Text style={styles.text}>
                        Usa la mappa per esplorare le aule studio o la lista per vederle in dettaglio.
                        Puoi filtrare per edificio e cercare per nome.
                    </Text>
                    <Text style={styles.text}>
                        Sfrutta gli strumenti smart: il banner meteo ti suggerisce se studiare all'aperto o al chiuso, mentre il Radar Studenti ti permette di trovare compagni che preparano il tuo stesso esame!
                    </Text>
                    <TouchableOpacity onPress={onClose} style={styles.button}>
                        <Text style={styles.buttonText}>Ho capito</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    content: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
        width: '100%',
        maxWidth: 300,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#333'
    },
    button: {
        backgroundColor: '#10b981',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});
