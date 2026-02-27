module.exports = {
    preset: 'jest-expo',
    roots: ['<rootDir>/src/__tests__'],
    testMatch: ['**/*.test.ts', '**/*.test.tsx'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: [],
    moduleNameMapper: {
        '^../types$': '<rootDir>/src/types/index.ts',
    },
    collectCoverageFrom: [
        'src/utils/**/*.{ts,tsx}',
        'src/components/**/*.{ts,tsx}',
        'src/services/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
    ],
};
