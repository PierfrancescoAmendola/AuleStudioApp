import { StudyRoom, CoordinateRegion } from '../types';

/**
 * Calculate map region that encompasses all study rooms
 */
export const calculateRegionFromRooms = (rooms: StudyRoom[]): CoordinateRegion => {
    if (rooms.length === 0) {
        return {
            latitude: 40.8359,
            longitude: 14.2488,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
        };
    }

    const latitudes = rooms.map((room) => room.latitude);
    const longitudes = rooms.map((room) => room.longitude);

    const minLat = Math.min(...latitudes);
    const maxLat = Math.max(...latitudes);
    const minLng = Math.min(...longitudes);
    const maxLng = Math.max(...longitudes);

    const centerLat = (minLat + maxLat) / 2;
    const centerLng = (minLng + maxLng) / 2;
    const latDelta = (maxLat - minLat) * 1.3; // Add 30% padding
    const lngDelta = (maxLng - minLng) * 1.3;

    return {
        latitude: centerLat,
        longitude: centerLng,
        latitudeDelta: Math.max(latDelta, 0.05), // Minimum delta for zoom
        longitudeDelta: Math.max(lngDelta, 0.05),
    };
};

/**
 * Check if a room is currently open based on current time
 */
export const isRoomOpenNow = (room: StudyRoom): boolean => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Minutes since midnight

    const [openHour, openMin] = room.orarioApertura.split(':').map(Number);
    const [closeHour, closeMin] = room.orarioChiusura.split(':').map(Number);

    const openTime = openHour * 60 + openMin;
    const closeTime = closeHour * 60 + closeMin;

    return currentTime >= openTime && currentTime <= closeTime;
};


