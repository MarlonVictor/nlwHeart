import React, { useContext } from 'react'
import { View } from 'react-native'

import { Button } from '../Button'

import { AuthContext } from '../../contexts/AuthContext'

import { styles } from './styles'
import { COLORS } from '../../theme'


export function SignInBox() {
    const { signIn } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Button 
                title="ENTRAR COM O GITHUB"
                color={COLORS.BLACK_PRIMARY}
                icon="github"
                backgroundColor={COLORS.YELLOW}
                isLoading={false}
                onPress={signIn}
            />
        </View>
    )
}