import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colorBackgroundTheme } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: colorBackgroundTheme.bg}}>
        <View className="flex-1 flex justify-around my-12">

            <View className="flex-row justify-center">
                <Image source={require("../assets/images/amazing-spiderman-text.png")}
                    style={{width: 325, height: 100}} />
            </View>
            <View className="flex-row justify-center">
                <Image source={require("../assets/images/spidey-welcome-photo.png")}
                    style={{width: 450, height: 350}} />
            </View>
            <View className="space-y-4">
                <TouchableOpacity
                    onPress={()=> navigation.navigate('SignUp')}
                    className="py-3 bg-red-500 mx-7 rounded-xl">
                        <Text 
                            className="text-xl font-bold text-center text-white"
                        >
                            Sign Up
                        </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <Text className="text-white font-semibold">Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text className="font-bold text-red-400"> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}