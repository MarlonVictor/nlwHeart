import React, { useState } from 'react'
import { Alert, Keyboard, TextInput, View } from 'react-native'

import { Button } from '../Button'

import { api } from '../../services/api'

import { styles } from './styles'
import { COLORS } from '../../theme'


export function SendMessageForm() {
    const [message, setMessage] = useState('')
    const [sendingMessage, setSendingMessage] = useState(false)

    async function handleMessageSubmit() {
        const messageFormatted = message.trim()

        if (messageFormatted.length > 0) {
            setSendingMessage(true)
            await api.post('messages', { message: messageFormatted })

            setMessage('')
            setSendingMessage(false)

            Keyboard.dismiss()
            Alert.alert('Mensagem enviada com sucesso!')

        } else {
            Alert.alert('Escreva a mensagem para enviar')
        }
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                multiline
                maxLength={140}
                value={message}
                onChangeText={setMessage}
                placeholder="Qual sua expectativa para o evento"
                placeholderTextColor={COLORS.GRAY_PRIMARY}
                editable={!sendingMessage}
            />

            <Button 
                title="ENVIAR MENSAGEM"
                color={COLORS.WHITE}
                backgroundColor={COLORS.PINK}
                isLoading={sendingMessage}
                onPress={handleMessageSubmit}
            />
        </View>
    )
}