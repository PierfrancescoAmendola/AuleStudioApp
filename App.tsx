import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, useColorScheme } from 'react-native';
import * as Font from 'expo-font';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types';
import { HomeScreen } from './src/screens/HomeScreen';
import { StudyRoomsScreen } from './src/screens/StudyRoomsScreen';
import { RoomDetailScreen } from './src/screens/RoomDetailScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { DonationScreen } from './src/screens/DonationScreen';
import { StorageService } from './src/services/storageService';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [hasSelectedUniversity, setHasSelectedUniversity] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const colorScheme = useColorScheme();

  useEffect(() => {
    loadResources();
  }, []);

  const loadResources = async () => {
    try {
      // Load fonts
      await Font.loadAsync({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
        Montserrat_400Regular,
        Montserrat_700Bold,
      });
      setFontsLoaded(true);

      // Check if university is selected
      const universityId = await StorageService.getSelectedUniversity();
      setHasSelectedUniversity(!!universityId);
    } catch (error) {
      console.error('Error loading resources:', error);
    } finally {
      setIsChecking(false);
    }
  };

  if (isChecking || !fontsLoaded) {
    return <View style={styles.container} />;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: 'transparent' },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StudyRooms"
            component={StudyRoomsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RoomDetail"
            component={RoomDetailScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Donation"
            component={DonationScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

