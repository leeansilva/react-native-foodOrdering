import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { FlatList, Platform, Text, View } from 'react-native'
import { useCart } from '../providers/CartProvider'
import CartListItem from '../components/CartListItem'
import Button from '../components/Button'

export default function cart() {
  const { items, total } = useCart()


  return (
    <View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <FlatList 
        data={items} 
        renderItem={({item}) => <CartListItem cartItem={item}/>}
        contentContainerStyle={{padding: 10, gap: 10}}
      />
      <Text style={{fontWeight:500, fontSize: 20}}>Total: ${total}</Text>
      <Button text='Checkout' />
    </View>
  )
}
