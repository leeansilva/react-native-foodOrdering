import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import products from '../../../../assets/data/products'

export default function ProductDetailScreen() {
  const {id} = useLocalSearchParams();
  const sizes = ['S', 'M', 'L', 'XL']

  const product = products.find((p) => p.id.toString() === id.toString())

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
          <View style={styles.size} key={i}>
             <Text style={styles.sizeText}>{s}</Text>
          </View>
        ))
      }
      </View>
      <Text style={styles.price}>${product.price}</Text>
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
      fontWeight: 'bold'
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
