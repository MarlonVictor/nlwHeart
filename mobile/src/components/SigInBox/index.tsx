import React, { useContext } from 'react'
import { View } from 'react-native'

import { Button } from '../Button'

import { AuthContext } from '../../contexts/AuthContext'

import { styles } from './styles'
import { COLORS } from '../../theme'


export function SignInBox() {
    const { signIn, isSigningIn } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Button 
                icon="github"
                title="ENTRAR COM O GITHUB"
                onPress={signIn}
                color={COLORS.BLACK_PRIMARY}
                backgroundColor={COLORS.YELLOW}
                isLoading={isSigningIn}
            />
        </View>
    )
}