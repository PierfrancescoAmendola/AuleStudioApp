import { StudyRoom } from '../types';

export const haversineDistance = (
    coords1: { latitude: number; longitude: number },
    coords2: { latitude: number; longitude: number }
): number => {
    const toRad = (value: number) => (value * Math.PI) / 180;

    const R = 6371; // Raggio della Terra in km
    const dLat = toRad(coords2.latitude - coords1.latitude);
    const dLon = toRad(coords2.longitude - coords1.longitude);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(coords1.latitude)) *
        Math.cos(toRad(coords2.latitude)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return Math.round(distance * 10) / 10; // Arrotonda a 1 decimale
};

export const isRoomOpen = (apertura: string, chiusura: string): boolean => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const [aperturaOre, aperturaMin] = apertura.split(':').map(Number);
    const [chiusuraOre, chiusuraMin] = chiusura.split(':').map(Number);

    const aperturaMinuti = aperturaOre * 60 + aperturaMin;
    const chiusuraMinuti = chiusuraOre * 60 + chiusuraMin;

    return currentTime >= aperturaMinuti && currentTime <= chiusuraMinuti;
};
