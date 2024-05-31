import { FontAwesome } from '@expo/vector-icons'
import { Link, Stack } from 'expo-router'
import React from 'react'
import { Pressable } from 'react-native'

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Orders' }} />
        </Stack>
    )
}
