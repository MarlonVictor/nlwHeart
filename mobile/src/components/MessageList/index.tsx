import React from 'react'
import { ScrollView } from 'react-native'

import { Message } from '../Message'

import { styles } from './styles'


export function MessageList() {
    const testMessage = {
        id: '1',
        text: 'Mensagem de teste!',
        user: {
            name: 'Marlon Victor',
            avatar_url: 'http://github.com/MarlonVictor.png',
        }
    }

    return (
        <ScrollView 
            style={styles.container} 
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps='never'
        >
            <Message data={testMessage} />
            <Message data={testMessage} />
            <Message data={testMessage} />
            <Message data={testMessage} />
            <Message data={testMessage} />
            <Message data={testMessage} />
            <Message data={testMessage} />
            <Message data={testMessage} />
            <Message data={testMessage} />
            <Message data={testMessage} />
        </ScrollView>
    )
}