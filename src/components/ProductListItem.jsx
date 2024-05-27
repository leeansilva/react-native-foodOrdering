import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { Link } from 'expo-router';


export default function ProductListItem({product}) {
    return (
      <Link href={`/menu/${product.id}`} asChild>
          <Pressable style={styles.container}>
  
            <Image resizeMode='contain' source={{uri: product.image}} style={styles.image} />
  
            <Text style={styles.title} >{product.name}</Text>
            <Text style={styles.price} >${product.price}</Text>
   
          </Pressable>
        </Link>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 20,
      maxWidth: '50%'
    },
    image:{
      width: '100%',
      aspectRatio: 1
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      marginVertical: 10
    },
    price: {
      color: Colors.light.tint,
      fontWeight: 'bold'
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });

