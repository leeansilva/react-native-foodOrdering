import {  Stack } from 'expo-router'
import React from 'react'


export default function _layout() {
    return (
        <Stack>
            {/* <Stack.Screen name="index" options={{ title: 'Orders' }} /> */}
            <Stack.Screen name="list" options={{ title: 'List', headerShown:false }} />
        </Stack>
    )
}
