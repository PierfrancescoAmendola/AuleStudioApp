import React from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';

export const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            {/* 
        We use the same icon and background color as the native splash screen 
        to ensure a seamless transition.
      */}
            <Image
                source={require('../../assets/icon.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <ActivityIndicator size="large" color="#ffffff" style={styles.loader} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10B981', // Matching native splash screen background color
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    loader: {
        marginTop: 40,
    },
});
