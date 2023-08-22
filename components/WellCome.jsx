import { View, Text,TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import AuthButtons from './AuthButtons'
import WellComeAnime from './WellComeAnime'
import { useNavigation } from '@react-navigation/native'


export default function WellCome() {
    const navigation =useNavigation();
  return (
    <View className='flex-1 bg-indigo-900'>
      <TouchableOpacity className=' justify-between ml-10 mt-20  mr-6 items-end' onPress={()=>navigation.navigate('Shop',{})}>
      <Text className='w-[80px] bg-white text-black text-center font-medium text-[18px] p-2 rounded-[50px]'>By Lule</Text>
      </TouchableOpacity>
      <WellComeAnime />
      <AuthButtons />
    </View>
  )
}