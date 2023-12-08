import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorBackgroundTheme } from '../theme';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorBackgroundTheme.bg }}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/amazing-spiderman-text.png')} style={styles.logoImage} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/spideyvsvenom-login.png')} style={styles.welcomeImage} />
        </View>
        
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 300,
    height: 100,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeImage: {
    width: 600,
    height: 300,
  },
});

export default HomeScreen;