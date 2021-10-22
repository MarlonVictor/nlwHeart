import React, { useState } from 'react'
import { TextInput, View } from 'react-native'

import { Button } from '../Button'

import { styles } from './styles'
import { COLORS } from '../../theme'


export function SendMessageForm() {
    const [message, setMessage] = useState('')
    const [sendingMessage, setSendingMessage] = useState(false)

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
            />
        </View>
    )
}