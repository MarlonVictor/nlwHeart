import React, { useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { UserPhoto } from '../UserPhoto'

import { AuthContext } from '../../contexts/AuthContext'

import LogoSvg from '../../assets/logo.svg'

import { styles } from './styles' 


export function Header() {
    const { user, signOut } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <LogoSvg />

            <View style={styles.logoutButton}>
                
                {user &&
                    <TouchableOpacity onPress={signOut}>
                        <Text style={styles.logoutText}>Sair</Text>
                    </TouchableOpacity>
                }

                <UserPhoto imageUri={user?.avatar_url} />
            </View>
        </View>
    )
}