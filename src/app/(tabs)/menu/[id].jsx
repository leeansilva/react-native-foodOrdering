import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { Text, View, StyleSheet, Image, Pressable } from 'react-native'
import products from '../../../../assets/data/products'
import Button from '../../../components/Button'

export default function ProductDetailScreen() {
  const {id} = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = React.useState('M')
  const sizes = ['S', 'M', 'L', 'XL']

  const product = products.find((p) => p.id.toString() === id.toString())
  
  const addToCart = ()=>{
    console.warn('adding to cart')
  }

  if (!product) {
    return (
      <Text>Product not found</Text>
    )
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:product.name}} />
      <Image source={{uri: product.image}} style={styles.image} />
      <Text>Select size</Text>
      <View style={styles.sizeContainer}>
      {
        sizes.map((s, i)=>(
          <Pressable
           onPress={()=>setSelectedSize(s)}
           style={[
            styles.size,
            { backgroundColor: selectedSize === s ? 'gainsboro' : 'white'}
            ]} 
           key={i}>
             <Text 
             style={[
              styles.sizeText,
              { color: selectedSize === s ? 'black' : 'gray'}
             ]}>{s}</Text>
          </Pressable>
        ))
      }
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={()=>addToCart()} text='Add to cart' />
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
      marginTop: 'auto'
    },
    sizeContainer:{
      flexDirection:'row',
      justifyContent:'space-around'
    },
    size: {
      backgroundColor:'#ccc',
      width: 50,
      aspectRatio: 1,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center'
    },
    sizeText:{
      fontSize: 20,
      fontWeight: '500'
    }
})
