import React from 'react'
import { Text, View } from 'react-native'
import { MotiView } from 'moti'

import { UserPhoto } from '../UserPhoto'

import { styles } from './styles'


export type MessageProps = {
    id: string,
    text: string,
    user: {
        name: string,
        avatar_url: string,
    }
}

type Props = {
    data: MessageProps
}

export function Message({ data }: Props) {
    return (
        <MotiView 
            style={styles.container}
            from={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 700 }}
        >
            <View style={styles.footer}>
                <UserPhoto sizes="SMALL" imageUri={data.user.avatar_url} />
                
                <Text style={styles.userName}>
                    {data.user.name}
                </Text>
            </View>

            <Text style={styles.message}>
                {data.text}
            </Text>
        </MotiView>
    )
}