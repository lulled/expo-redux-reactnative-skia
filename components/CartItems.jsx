import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function CartItems() {
    const navigation = useNavigation();
    const cartState = useSelector(state=>state.cart);
    console.log(cartState);
  return (
    <View className= 'pt-12 justify-right   items-center bg-white pb-6'>
        <TouchableOpacity onPress={()=>navigation.navigate('Cart',{})}>
      <Text className='text-blue-500 text-2xl px-2'>cart:<Text className='text-red-600  text-2xl px-2'>{cartState.length}</Text></Text>
      </TouchableOpacity>
    </View>
  )
}