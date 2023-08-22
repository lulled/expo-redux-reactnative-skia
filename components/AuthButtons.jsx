import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const{width,height} = Dimensions.get('window');
const innerWidth = width-20 ;
const buttonWidth = width-42;
export default function AuthButtons() {
  return (
    <View className='bg-white h-[270px] rounded-t-[35px]  justify-center items-center ' style ={{width:width,justifyContent:'center', alignContent:'center',}}>
        <View className='   pt-2 items-center'style={{width:innerWidth,}}>
        <View className='flex-row m-1 bg-black  justify-center items-center rounded-[50px] px-8' style={{width:buttonWidth,}}>
           <AntDesign name="google" size={25} color="white" />
            <Text className='text-gray-100 px-2 py-3 text-[18px] font-medium '> Continue with Google</Text>
        </View>
        <View className='flex-row m-[10px] bg-orange-100   justify-center items-center rounded-[50px] px-8'style={{width:buttonWidth,}}>
        <AntDesign name="apple1" size={25} color="black" />
            <Text className='text-gray-800 px-2 py-3 text-[18px] font-medium '> Continue with Apple</Text>
        </View>
        <View className='flex-row m-[5px] bg-orange-100   justify-center items-center rounded-[50px] px-8'style={{width:buttonWidth,}}>
        <Fontisto name="email" size={25} color="black" />
            <Text className='text-gray-800 px-2 py-3 text-[18px] font-medium '> Sign up with email </Text>
        </View>
        <View className=' bg-white m-[10px]  justify-center items-center rounded-[50px] px-8 border-[1px] border-slate-800'style={{width:buttonWidth,}}>
           
            <Text className='text-slate-800 px-2 py-3 text-[18px] font-medium '> Log in </Text>
        </View>
        </View>
      
    </View>
  )
}