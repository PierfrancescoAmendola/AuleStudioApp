import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StudyRoom, CoordinateRegion } from '../../types';

interface StudyRoomMapProps {
    rooms: StudyRoom[];
    region: CoordinateRegion;
    selectedRoom?: StudyRoom;
    onMarkerPress: (room: StudyRoom) => void;
}

export const StudyRoomMap: React.FC<StudyRoomMapProps> = ({
    rooms,
    region,
    selectedRoom,
    onMarkerPress,
}) => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
                initialRegion={region}
                showsUserLocation
                showsMyLocationButton
                loadingEnabled
            >
                {rooms.map((room) => (
                    <Marker
                        key={room.id}
                        coordinate={{
                            latitude: room.latitude,
                            longitude: room.longitude,
                        }}
                        title={room.nome}
                        description={room.edificio}
                        onPress={() => onMarkerPress(room)}
                        pinColor={selectedRoom?.id === room.id ? '#EC4899' : '#6366F1'}
                    />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
