/**
 * N-SECT Unit Tests for locationHelpers (Pure Functions)
 * Covers cartesian product of equivalence classes for:
 * - haversineDistance: coordinates validity and distance ranges
 * - isRoomOpen: time boundaries and format validation
 */

// Import pure functions directly
import { haversineDistance, isRoomOpen } from '../../utils/locationHelpers';

describe('haversineDistance', () => {
    // ===== EQUIVALENCE CLASSES =====
    // Coords: Valid lat [-90,90], Valid lon [-180,180]
    // Distance types: Same point (0), Short (<1km), Medium (1-100km), Long (>100km)

    describe('Valid coordinates - Distance calculations', () => {
        // EC1: Same point → 0 distance
        it('should return 0 for same coordinates', () => {
            const result = haversineDistance(
                { latitude: 41.9028, longitude: 12.4964 },
                { latitude: 41.9028, longitude: 12.4964 }
            );
            expect(result).toBe(0);
        });

        // EC2: Very short distance (<1km)
        it('should calculate short distance correctly (<1km)', () => {
            const result = haversineDistance(
                { latitude: 41.8902, longitude: 12.4922 },
                { latitude: 41.8912, longitude: 12.4922 }
            );
            expect(result).toBeGreaterThanOrEqual(0);
            expect(result).toBeLessThan(1);
        });

        // EC3: Medium distance (Rome to Naples ~200km)
        it('should calculate medium distance correctly (100-300km)', () => {
            const result = haversineDistance(
                { latitude: 41.9028, longitude: 12.4964 }, // Rome
                { latitude: 40.8518, longitude: 14.2681 }  // Naples
            );
            expect(result).toBeGreaterThan(100);
            expect(result).toBeLessThan(300);
        });

        // EC4: Long distance (Rome to London >1000km)
        it('should calculate long distance correctly (>1000km)', () => {
            const result = haversineDistance(
                { latitude: 41.9028, longitude: 12.4964 },  // Rome
                { latitude: 51.5074, longitude: -0.1278 }   // London
            );
            expect(result).toBeGreaterThan(1000);
            expect(result).toBeLessThan(2000);
        });
    });

    describe('Boundary values - Coordinate limits', () => {
        // EC5: Latitude at boundaries (poles)
        it('should handle extreme latitudes (poles)', () => {
            const result = haversineDistance(
                { latitude: 90, longitude: 0 },   // North Pole
                { latitude: -90, longitude: 0 }   // South Pole
            );
            expect(result).toBeGreaterThan(19000);
            expect(result).toBeLessThan(21000);
        });

        // EC6: Longitude at boundary (dateline)
        it('should handle extreme longitudes (dateline)', () => {
            const result = haversineDistance(
                { latitude: 0, longitude: -180 },
                { latitude: 0, longitude: 180 }
            );
            expect(result).toBe(0);
        });

        // EC7: Negative coordinates (Southern/Western hemispheres)
        it('should handle negative coordinates correctly', () => {
            const result = haversineDistance(
                { latitude: -33.8688, longitude: 151.2093 }, // Sydney
                { latitude: -34.6037, longitude: -58.3816 }  // Buenos Aires
            );
            expect(result).toBeGreaterThan(10000);
            expect(result).toBeLessThan(13000);
        });
    });

    describe('Edge cases', () => {
        // EC8: Zero coordinates (origin)
        it('should handle origin point (0,0)', () => {
            const result = haversineDistance(
                { latitude: 0, longitude: 0 },
                { latitude: 1, longitude: 1 }
            );
            expect(result).toBeGreaterThan(100);
            expect(result).toBeLessThan(200);
        });

        // EC9: Very small differences
        it('should handle very small coordinate differences', () => {
            const result = haversineDistance(
                { latitude: 41.9028, longitude: 12.4964 },
                { latitude: 41.9028001, longitude: 12.4964001 }
            );
            expect(result).toBeGreaterThanOrEqual(0);
            expect(result).toBeLessThan(0.1);
        });
    });
});

describe('isRoomOpen', () => {
    // ===== EQUIVALENCE CLASSES =====
    // Time relative to now: Before opening, During hours, After closing

    const RealDate = Date;

    afterEach(() => {
        global.Date = RealDate;
    });

    const mockDate = (hours: number, minutes: number = 0) => {
        const mockNow = new RealDate(2026, 0, 23, hours, minutes, 0);
        global.Date = class extends RealDate {
            constructor() {
                super();
                return mockNow;
            }
            static now() {
                return mockNow.getTime();
            }
        } as any;
    };

    describe('Standard operating hours (08:00 - 20:00)', () => {
        const apertura = '08:00';
        const chiusura = '20:00';

        // EC1: Before opening
        it('should return false before opening (07:00 < 08:00)', () => {
            mockDate(7, 0);
            expect(isRoomOpen(apertura, chiusura)).toBe(false);
        });

        // EC2: Exactly at opening
        it('should return true exactly at opening time', () => {
            mockDate(8, 0);
            expect(isRoomOpen(apertura, chiusura)).toBe(true);
        });

        // EC3: During hours
        it('should return true during opening hours (14:00)', () => {
            mockDate(14, 0);
            expect(isRoomOpen(apertura, chiusura)).toBe(true);
        });

        // EC4: Exactly at closing
        it('should return true exactly at closing time', () => {
            mockDate(20, 0);
            expect(isRoomOpen(apertura, chiusura)).toBe(true);
        });

        // EC5: After closing
        it('should return false after closing (21:00 > 20:00)', () => {
            mockDate(21, 0);
            expect(isRoomOpen(apertura, chiusura)).toBe(false);
        });
    });

    describe('Edge case hours', () => {
        // EC6: 24h opening
        it('should handle 24h opening correctly', () => {
            mockDate(12, 0);
            expect(isRoomOpen('00:00', '23:59')).toBe(true);
        });

        // EC7: Early morning
        it('should handle early morning hours', () => {
            mockDate(6, 30);
            expect(isRoomOpen('06:00', '22:00')).toBe(true);
        });

        // EC8: Late night
        it('should handle late night hours', () => {
            mockDate(22, 45);
            expect(isRoomOpen('08:00', '23:00')).toBe(true);
        });

        // EC9: Midnight boundary
        it('should handle midnight boundary', () => {
            mockDate(0, 0);
            expect(isRoomOpen('00:00', '06:00')).toBe(true);
        });
    });

    describe('Minute precision', () => {
        // EC10: Just before opening
        it('should return false 1 minute before opening', () => {
            mockDate(7, 59);
            expect(isRoomOpen('08:00', '20:00')).toBe(false);
        });

        // EC11: Just after closing
        it('should return false 1 minute after closing', () => {
            mockDate(20, 1);
            expect(isRoomOpen('08:00', '20:00')).toBe(false);
        });
    });
});
