import React from 'react'
import { View, Text } from 'react-native'

import { Header } from '../../components/Header'

import { styles } from './styles'


export function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <Text>Hello World</Text>
        </View>
    )
}