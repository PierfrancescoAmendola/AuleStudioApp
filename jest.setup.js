// Jest setup file - minimal for node environment

// Mock react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => ({}));

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => ({
    default: {
        call: () => { },
    },
    useSharedValue: jest.fn(),
    useAnimatedStyle: jest.fn(() => ({})),
    withTiming: jest.fn(),
    withSpring: jest.fn(),
}));

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: jest.fn(() => Promise.resolve()),
    getItem: jest.fn(() => Promise.resolve(null)),
    clear: jest.fn(() => Promise.resolve()),
    removeItem: jest.fn(() => Promise.resolve()),
}));

// Silence console warnings
const originalConsoleError = console.error;
console.error = (...args) => {
    if (args[0]?.includes?.('Warning:')) return;
    originalConsoleError(...args);
};
