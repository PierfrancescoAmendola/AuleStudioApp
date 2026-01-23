/**
 * N-SECT Validation Tests for Universities Data
 * Validates structural integrity and data consistency
 * Covers equivalence classes for all university fields
 */

import { universities } from '../../data/universities';
import { University, StudyRoom } from '../../types';

describe('Universities Data Validation', () => {
    describe('University Registry Structure', () => {
        // EC1: Non-empty registry
        it('should have at least one university', () => {
            expect(universities.length).toBeGreaterThan(0);
        });

        // EC2: Minimum expected count (based on current data)
        it('should have universities from multiple regions', () => {
            const regions = new Set(universities.map(u => u.regionName));
            expect(regions.size).toBeGreaterThanOrEqual(5);
        });
    });

    describe('University ID Validation', () => {
        // EC1: All IDs are non-empty strings
        it('should have non-empty ID for every university', () => {
            universities.forEach(uni => {
                expect(uni.id).toBeDefined();
                expect(typeof uni.id).toBe('string');
                expect(uni.id.length).toBeGreaterThan(0);
            });
        });

        // EC2: All IDs are unique
        it('should have unique IDs across all universities', () => {
            const ids = universities.map(u => u.id);
            const uniqueIds = new Set(ids);
            expect(uniqueIds.size).toBe(ids.length);
        });

        // EC3: IDs follow naming convention (lowercase, hyphens/underscores)
        it('should have IDs following naming convention', () => {
            universities.forEach(uni => {
                expect(uni.id).toMatch(/^[a-z0-9_-]+$/);
            });
        });
    });

    describe('University Name Validation', () => {
        // EC1: Name and fullName present
        it('should have name and fullName for every university', () => {
            universities.forEach(uni => {
                expect(uni.name).toBeDefined();
                expect(uni.name.length).toBeGreaterThan(0);
                expect(uni.fullName).toBeDefined();
                expect(uni.fullName.length).toBeGreaterThan(0);
            });
        });

        // EC2: Name is shorter than fullName (acronym vs full)
        it('should have name shorter than fullName', () => {
            universities.forEach(uni => {
                expect(uni.name.length).toBeLessThanOrEqual(uni.fullName.length);
            });
        });
    });

    describe('Geographic Validation', () => {
        // EC1: Valid latitude range [-90, 90]
        it('should have valid latitude for every university', () => {
            universities.forEach(uni => {
                expect(uni.region.latitude).toBeGreaterThanOrEqual(-90);
                expect(uni.region.latitude).toBeLessThanOrEqual(90);
            });
        });

        // EC2: Valid longitude range [-180, 180]
        it('should have valid longitude for every university', () => {
            universities.forEach(uni => {
                expect(uni.region.longitude).toBeGreaterThanOrEqual(-180);
                expect(uni.region.longitude).toBeLessThanOrEqual(180);
            });
        });

        // EC3: Italian coordinates range (roughly lat 35-47, lon 6-19)
        it('should have coordinates within Italy bounds', () => {
            universities.forEach(uni => {
                expect(uni.region.latitude).toBeGreaterThanOrEqual(35);
                expect(uni.region.latitude).toBeLessThanOrEqual(48);
                expect(uni.region.longitude).toBeGreaterThanOrEqual(5);
                expect(uni.region.longitude).toBeLessThanOrEqual(20);
            });
        });

        // EC4: City is non-empty
        it('should have city defined for every university', () => {
            universities.forEach(uni => {
                expect(uni.city).toBeDefined();
                expect(uni.city.length).toBeGreaterThan(0);
            });
        });

        // EC5: Region name is valid Italian region
        it('should have valid Italian region name', () => {
            const validRegions = [
                'Abruzzo', 'Basilicata', 'Calabria', 'Campania', 'Emilia-Romagna',
                'Friuli-Venezia Giulia', 'Lazio', 'Liguria', 'Lombardia', 'Marche',
                'Molise', 'Piemonte', 'Puglia', 'Sardegna', 'Sicilia', 'Toscana',
                'Trentino-Alto Adige', 'Umbria', "Valle d'Aosta", 'Veneto'
            ];
            universities.forEach(uni => {
                expect(validRegions).toContain(uni.regionName);
            });
        });
    });

    describe('Study Rooms Validation', () => {
        // EC1: Every university has study rooms
        it('should have at least one study room per university', () => {
            universities.forEach(uni => {
                expect(uni.studyRooms).toBeDefined();
                expect(Array.isArray(uni.studyRooms)).toBe(true);
                expect(uni.studyRooms.length).toBeGreaterThan(0);
            });
        });

        // EC2: Study rooms have required fields
        it('should have required fields in every study room', () => {
            universities.forEach(uni => {
                uni.studyRooms.forEach(room => {
                    expect(room.id).toBeDefined();
                    expect(room.nome).toBeDefined();
                    expect(room.postiTotali).toBeDefined();
                    expect(room.orarioApertura).toBeDefined();
                    expect(room.orarioChiusura).toBeDefined();
                });
            });
        });

        // EC3: Valid capacity (postiTotali > 0)
        it('should have positive capacity for every room', () => {
            universities.forEach(uni => {
                uni.studyRooms.forEach(room => {
                    expect(room.postiTotali).toBeGreaterThan(0);
                });
            });
        });

        // EC4: Valid time format (HH:MM)
        it('should have valid time format for opening hours', () => {
            const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
            universities.forEach(uni => {
                uni.studyRooms.forEach(room => {
                    expect(room.orarioApertura).toMatch(timeRegex);
                    expect(room.orarioChiusura).toMatch(timeRegex);
                });
            });
        });

        // EC5: Room IDs are unique within university
        it('should have unique room IDs within each university', () => {
            universities.forEach(uni => {
                const roomIds = uni.studyRooms.map(r => r.id);
                const uniqueIds = new Set(roomIds);
                expect(uniqueIds.size).toBe(roomIds.length);
            });
        });
    });

    describe('Color Validation', () => {
        // EC1: Valid hex color format
        it('should have valid hex color format', () => {
            const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
            universities.forEach(uni => {
                expect(uni.color).toMatch(hexRegex);
                expect(uni.darkColor).toMatch(hexRegex);
            });
        });

        // EC2: Dark color is different from main color
        it('should have different color and darkColor', () => {
            universities.forEach(uni => {
                expect(uni.color.toLowerCase()).not.toBe(uni.darkColor.toLowerCase());
            });
        });
    });

    describe('Filters Validation', () => {
        // EC1: Every university has filters
        it('should have available filters for every university', () => {
            universities.forEach(uni => {
                expect(uni.availableFilters).toBeDefined();
                expect(Array.isArray(uni.availableFilters)).toBe(true);
                expect(uni.availableFilters.length).toBeGreaterThan(0);
            });
        });

        // EC2: "Tutti" filter is present
        it('should have "Tutti" filter in every university', () => {
            universities.forEach(uni => {
                expect(uni.availableFilters).toContain('Tutti');
            });
        });
    });
});
