import React from 'react'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { AuthContextProvider } from './src/contexts/AuthContext'

import { Home } from './src/screens/Home'


export default function App() {
    const [ fontsLoader ] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold
    })

    if (!fontsLoader) {
        return <AppLoading />
    }

    return (
        <AuthContextProvider>
            <StatusBar style='light' translucent backgroundColor="transparent" />
            <Home />
        </AuthContextProvider>
    )
}