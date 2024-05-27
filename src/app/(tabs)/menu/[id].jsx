import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function ProductDetailScreen() {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{title:'Details'}} />
      <Text>ProductDetailScreen for id: {id}</Text>
    </View>
  )
}
