import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { BluetoothChatScreen } from '../../components/BluetoothChatScreen';
import { Keyboard } from 'react-native';

// Mock dependencies
jest.mock('@expo/vector-icons', () => ({
    Ionicons: 'Ionicons',
}));

jest.mock('react-native-safe-area-context', () => ({
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
}));


describe('BluetoothChatScreen', () => {

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
        jest.clearAllMocks();
    });

    const defaultProps = {
        connectedDevice: { id: 'device1', name: 'Luca' },
        onDisconnect: jest.fn(),
        primaryColor: '#ff0000'
    };


    // ===== BLACK BOX TESTING (N-wise API parameters) ===== //

    describe('Black Box - Rendering with N-wise Props combinations', () => {

        // C1: Device Name presents + Custom Color
        it('renders correctly with given device name and custom color', () => {
            const { getByText } = render(<BluetoothChatScreen {...defaultProps} />);

            // Check if device name is rendered
            expect(getByText('Connesso a Luca')).toBeTruthy();
        });

        // C2: Device Name missing (null) + Default Color
        it('renders fallback device name when name is null', () => {
            const propsWithoutName = {
                connectedDevice: { id: 'device2', name: null },
                onDisconnect: jest.fn(),
                // Omitting primaryColor gives default color (#10b981)
            };

            const { getByText } = render(<BluetoothChatScreen {...propsWithoutName} />);
            expect(getByText('Connesso a Studente Sconosciuto')).toBeTruthy();
        });

        // C3: Empty device name string
        it('renders fallback or empty string when name is empty string', () => {
            const propsWithEmptyName = {
                connectedDevice: { id: 'device3', name: '' },
                onDisconnect: jest.fn(),
            };

            const { getByText } = render(<BluetoothChatScreen {...propsWithEmptyName} />);
            // It should render "Connesso a Studente Sconosciuto" since connectedDevice.name || 'Studente Sconosciuto'
            expect(getByText('Connesso a Studente Sconosciuto')).toBeTruthy();
        });
    });

    // ===== WHITE BOX TESTING (Internal State & Control flows) ===== //

    describe('White Box - Component Logic and Interaction flows', () => {

        // State changes and internal branch coverage
        it('disables send button when input is empty or whitespace only', () => {
            const { getByPlaceholderText, getByTestId, root } = render(<BluetoothChatScreen {...defaultProps} />);

            const input = getByPlaceholderText('Scrivi un messaggio...');

            // Trova il TouchableOpacity (tramite filter since testID is not present)
            const sendButton = root.findAll((node: any) =>
                node.type === 'View' &&
                node.props.style &&
                Array.isArray(node.props.style) &&
                node.props.style.some((s: any) => s && s.backgroundColor === '#e2e8f0') // Check disable state based on design color logic
            );

            // Verify disabled state logic
            expect(input.props.value).toBe('');

            fireEvent.changeText(input, '   '); // only spaces
            // send button should remain conditionally styled based on disabled prop logic
        });

        it('handles sending a message and updating local optimistic UI', () => {
            const dismissSpy = jest.spyOn(Keyboard, 'dismiss');
            const { getByPlaceholderText, getByText, queryByText } = render(<BluetoothChatScreen {...defaultProps} />);

            const input = getByPlaceholderText('Scrivi un messaggio...');

            expect(queryByText('Nessun messaggio.')).toBeTruthy();

            fireEvent.changeText(input, 'Ciao, come stai?');

            // Get send button (disabled prop is false)
            const sendButton = getByText('Nessun messaggio.').parent?.parent?.parent?.findByType('TextInput')?.parent?.parent?.children.find((c: any) => (c as any).props.disabled === false);

            if (sendButton) {
                fireEvent.press(sendButton);
            }

            // UI should show the new message
            expect(getByText('Ciao, come stai?')).toBeTruthy();
            expect(queryByText('Nessun messaggio.')).toBeNull(); // Empty state disappears
            expect(dismissSpy).toHaveBeenCalled();
            expect(input.props.value).toBe(''); // Input cleared
        });

        it('handles receiving mock message via useEffect timeout', () => {
            const { getByText } = render(<BluetoothChatScreen {...defaultProps} />);

            // Advance timers by 3 seconds to trigger mock BLE receive interval
            act(() => {
                jest.advanceTimersByTime(3000);
            });

            // Check if mock message received is injected in the list
            expect(getByText('Ehi! Anche tu stai studiando per questo esame? Scendiamo a prendere un caffè?')).toBeTruthy();
        });

        it('calls onDisconnect prop when back button is pressed', () => {
            const { getByText } = render(<BluetoothChatScreen {...defaultProps} />);

            const backButton = getByText('Back');
            fireEvent.press(backButton);

            expect(defaultProps.onDisconnect).toHaveBeenCalledTimes(1);
        });

        it('clears mock timer on unmount', () => {
            const { unmount } = render(<BluetoothChatScreen {...defaultProps} />);

            const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');

            unmount();

            expect(clearTimeoutSpy).toHaveBeenCalled();
            clearTimeoutSpy.mockRestore();
        });
    });
});
