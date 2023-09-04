import { View, Text, Dimensions } from 'react-native'
import React from 'react'

const {width ,height} = Dimensions.get('window');
const Card_Height =200;
const Card_width = width-60;

export default function Card() {
  return (
    <View className ='bg-teal-400 justify-center items-center rounded-[40px]' style={{width:Card_width,height:Card_Height}}>
      <Text className=' text-center text-2xl text-black '>Animated.Card</Text>
    </View>
  )
}