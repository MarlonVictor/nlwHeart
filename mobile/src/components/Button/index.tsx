import React from 'react'
import { ColorValue, Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { styles } from './styles'


type Props = TouchableOpacityProps & {
    title: string,
    color: ColorValue,
    icon?: React.ComponentProps<typeof AntDesign>['name'],
    isLoading: boolean,
    backgroundColor: ColorValue
}

export function Button({ title, color, icon, isLoading, backgroundColor, ...rest }: Props) {
    return (
        <TouchableOpacity 
            activeOpacity={0.8} 
            disabled={isLoading}
            style={[ styles.button, { backgroundColor }]} 
            {...rest}
        >
            {isLoading
                ? <ActivityIndicator color={color} />
                : (
                    <>
                        <AntDesign 
                            name={icon}
                            size={24} 
                            style={styles.icon} 
                        />
                        <Text style={[ styles.title, { color }]}>
                            {title}
                        </Text>
                    </>
                )
            }

        </TouchableOpacity>
    )
}