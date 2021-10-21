import { createContext, useEffect, ReactNode, useState } from 'react'

import { api } from '../services/api'


type User = {
    id: string,
    name: string,
    login: string,
    avatar_url: string
}

type AuthResponse = {
    user: User,
    token: string
}

type AuthContextData = {
    user: User | null,
    signInUrl: string
}

type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User | null>(null)

    const clientId = '50a748ec85b7a1839dd7'
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${clientId}`

    async function signIn(githubCode: string) {
        const response = await api.post<AuthResponse>('authenticate', {
            code: githubCode
        })
    
        const { token, user } = response.data
    
        localStorage.setItem('@dowhile:token', token)
        setUser(user)
    }

    useEffect(() => {
        const token = localStorage.getItem('@dowhile:token')

        if (token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`

            api.get<User>('profile').then(res => {
                setUser(res.data)
            })
        }
    }, [])
    
    useEffect(() => {
        const url = window.location.href
    
        if (url.includes('?code=')) {
            const [ urlWithoutCode, githubCode ] = url.split('?code=')
    
            window.history.pushState({}, '', urlWithoutCode)
    
            signIn(githubCode)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, signInUrl }}>
            {children}
        </AuthContext.Provider>
    )
}
