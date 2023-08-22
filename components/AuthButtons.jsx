import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


export default function AuthButtons() {
  return (
    <View className='bg-gray-100 w-full h-[380px] rounded-t-[40px] '>
        <View className=' w-full h-full pt-8 items-center'>
        <View className='flex-row m-2 bg-slate-800  w-[360px] justify-center items-center rounded-[50px] px-8'>
           <AntDesign name="google" size={32} color="white" />
            <Text className='text-gray-100 px-2 py-4 text-[18px] font-medium '> Continue with Google</Text>
        </View>
        <View className='flex-row m-2 bg-gray-300  w-[360px] justify-center items-center rounded-[50px] px-8'>
        <AntDesign name="apple1" size={32} color="black" />
            <Text className='text-gray-800 px-2 py-4 text-[18px] font-medium '> Continue with Apple</Text>
        </View>
        <View className='flex-row m-2 bg-gray-300  w-[360px] justify-center items-center rounded-[50px] px-8'>
        <Fontisto name="email" size={32} color="black" />
            <Text className='text-gray-800 px-2 py-4 text-[18px] font-medium '> Sign up with email </Text>
        </View>
        <View className=' bg-white m-2  w-[360px] justify-center items-center rounded-[50px] px-8 border-[1px] border-slate-800'>
           
            <Text className='text-slate-800 px-2 py-4 text-[18px] font-medium '> Log in </Text>
        </View>
        </View>
      
    </View>
  )
}