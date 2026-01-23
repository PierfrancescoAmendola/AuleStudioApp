module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/src/__tests__'],
    testMatch: ['**/*.test.ts'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { useESM: false }],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: [],
    moduleNameMapper: {
        '^../types$': '<rootDir>/src/types/index.ts',
    },
    collectCoverageFrom: [
        'src/utils/**/*.ts',
        'src/services/**/*.ts',
        '!src/**/*.d.ts',
    ],
};
