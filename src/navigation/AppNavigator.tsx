import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { StudyRoomsScreen } from '../screens/StudyRoomsScreen';
import { RoomDetailScreen } from '../screens/RoomDetailScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Onboarding"
                screenOptions={{
                    headerShown: false,
                    cardStyle: { backgroundColor: 'transparent' },
                }}
            >
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="StudyRooms" component={StudyRoomsScreen} />
                <Stack.Screen
                    name="RoomDetail"
                    component={RoomDetailScreen}
                    options={{
                        presentation: 'modal',
                    }}
                />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
