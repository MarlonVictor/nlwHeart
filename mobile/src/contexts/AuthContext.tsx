import React, { createContext, ReactNode, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSessions from 'expo-auth-session'

import { api } from '../services/api'


type User = {
    id: string,
    name: string,
    login: string,
    avatar_url: string
}

type AuthContextData = {
    user: User | null,
    isSigningIn: boolean,
    signIn: () => void,
    signOut: () => void
}

type AuthResponse = {
    token: string,
    user: User
}

type AuthorizationResponse = {
    params: {
        code?: string,
        error?: string
    },
    type?: string
}

type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User | null>(null)
    const [isSigningIn, setIsSigningIn] = useState(true)

    async function signIn() {
        try {
            setIsSigningIn(true)

            const authUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=read:user`
            const authSessionResponse = await AuthSessions.startAsync({ authUrl }) as AuthorizationResponse

            if (authSessionResponse.type === 'success' && authSessionResponse.params.error !== 'access_denied') {
                const authResponse = await api.post('authenticate', { code: authSessionResponse.params.code })
                const { user, token } = authResponse.data as AuthResponse

                api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                await AsyncStorage.setItem('@nlwheat:user', JSON.stringify(user));
                await AsyncStorage.setItem('@nlwheat:token', token);

                setUser(user)
            }
            
        } catch (error) {
            console.log(error)

        } finally {
            setIsSigningIn(false)
        }
    }
    
    async function signOut() {
        setUser(null)
        await AsyncStorage.removeItem('@nlwheat:user')
        await AsyncStorage.removeItem('@nlwheat:token')
    }

    useEffect(() => {
        async function loadUserStorageData() {
            const userStorage = await AsyncStorage.getItem('@nlwheat:user')
            const tokenStorage = await AsyncStorage.getItem('@nlwheat:token')
    
            if (userStorage && tokenStorage) {
                api.defaults.headers.common['Authorization'] = `Bearer ${tokenStorage}`
                setUser(JSON.parse(userStorage))
            }
    
            setIsSigningIn(false)
        }
    
        loadUserStorageData()
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, signOut, user, isSigningIn }}>
            {children}
        </AuthContext.Provider>
    )
}