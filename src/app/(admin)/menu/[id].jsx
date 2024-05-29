import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { Text, View, StyleSheet, Image, Pressable } from 'react-native'
import products from '../../../../assets/data/products'
import Button from '../../../components/Button'
import { useCart } from '../../../providers/CartProvider'

export default function ProductDetailScreen() {
  const {id} = useLocalSearchParams();
  const sizes = ['S', 'M', 'L', 'XL']

  const { addItem } = useCart();

  const router = useRouter();

  const product = products.find((p) => p.id.toString() === id.toString())

  if (!product) {
    return (
      <Text>Product not found</Text>
    )
  }

  const addToCart = ()=>{
    addItem(product);
    router.push('/cart')
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:product.name}} />
      <Image source={{uri: product.image}} style={styles.image} />
      
  
      <Text style={styles.price}>${product.price}</Text>
      {/* <Button onPress={()=>addToCart()} text='Add to cart' /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      width: '100%',
      backgroundColor: 'white',
      flex: 1,
      padding: 10
    },
    image:{
      width: '100%',
      aspectRatio: 1,
    },
    price:{
      fontSize:18,
      fontWeight: 'bold',

    },
})
