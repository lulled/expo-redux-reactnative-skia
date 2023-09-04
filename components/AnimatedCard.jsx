import { View, Text, Dimensions } from 'react-native'
import Animated ,{Transition,useAnimatedGestureHandler,useAnimatedStyle, useSharedValue} from 'react-native-reanimated'
import React from 'react'
import Card from './Card' 
import { PanGestureHandler } from 'react-native-gesture-handler';
import  { PanGestureHandlerGestureEvent } from "react-native-gesture-handler";

const{width,height} = Dimensions.get('window');
 
export default function AnimatedCard({ width, height }) {
    const translateX = useSharedValue(0);
    const translateY =useSharedValue(0);
    
    const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
        onStart:(event,ctx)=>{
            translateX.value = event.translationX;
            translateY.value = event.translationY;
            console.log(event);
        },
        onActive:(event,ctx)=>{},
        onEnd :(event,ctx)=>{}
    })
    const animatedStyle = useAnimatedStyle(()=>{
        return {
          transform:[
            {translateX:translateX.value},
            {translateY:translateY.value}
          ]
        }
  })
    return (
    <View style={{flex:1}}>
     <PanGestureHandler onGestureEvent={onGestureEvent} >
      <Animated.View {...{animatedStyle}} className='bg-blue-300'>
      <Card />
      </Animated.View>
      </PanGestureHandler>
    </View>
  )
}