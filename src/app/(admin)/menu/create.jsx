import React, { useState } from 'react'
import { Text, View, StyleSheet,TextInput, Image } from 'react-native'
import Button from '../../../components/Button'
import Colors from '../../../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { Stack } from 'expo-router';

export default function CreateProductScreen() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState('');
    const [image, setImage] = useState(null);

    const validateInputs =() =>{
        setErrors('')
        if (!name){
            setErrors('Name is required');
            return false;
        } else if (!price){
            setErrors('Price is required');
            return false;
        } else if (isNaN(parseFloat(price))){
            setErrors('Price is not a number');
            return false;
        } else return true; 
    }

    const resetFields =()=>{
        setName('');
        setPrice('');
    }

    const onCreate = () =>{
        if(!validateInputs()){
            return;
        }
        console.warn('creating');
        resetFields();
        
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

  return (
    <View style={styles.container}>
        <Stack.Screen options={{title:'Create product'}}/>
        <Image style={styles.image} source={{uri: image || 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/extravaganzza.png'}}  />
        <Text onPress={pickImage} style={styles.textButton}>Select Image</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput value={name} onChangeText={setName} placeholder='Name' style={styles.input} />

        <Text style={styles.label}>Price ($)</Text>
        <TextInput value={price} onChangeText={setPrice} keyboardType='numeric' placeholder='9.99' style={styles.input} />
        <Text style={styles.errors}>{errors}</Text>
        <Button text='create' onPress={onCreate}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    label:{
        color: 'gray',
        fontSize: 16
    },
    input:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    errors:{
        color: 'red',
        fontSize: 12
    },
    image:{
        width: '50%',
        aspectRatio: 1,
        alignSelf:'center'
    },
    textButton:{
        fontWeight:'bold',
        color: Colors.light.tint,
        alignSelf:'center',
        marginVertical: 10
    }
})