import React, { useContext } from 'react'
import { View, KeyboardAvoidingView, Platform } from 'react-native'

import { Header } from '../../components/Header'
import { MessageList } from '../../components/MessageList'
import { SendMessageForm } from '../../components/SendMessageForm'
import { SignInBox } from '../../components/SigInBox'

import { AuthContext } from '../../contexts/AuthContext'

import { styles } from './styles'


export function Home() {
    const { user } = useContext(AuthContext)

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.container}>
                <Header />
                <MessageList />

                { user ? <SendMessageForm /> : <SignInBox /> }
            </View>
        </KeyboardAvoidingView>
    )
}