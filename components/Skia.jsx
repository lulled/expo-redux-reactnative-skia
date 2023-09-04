import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import HelloSkia from './HelloSkia'
import Animated,{useSharedValue,useAnimatedStyle, interpolate, Extrapolate,withTiming} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';


const CardWidth= 300 -5;
const CardHeight =220 -5;
export default function Skia() {
    const rotateX = useSharedValue(0);
    const rotateY = useSharedValue(0);
    const gesture =Gesture.Pan()
    .onBegin(event=>{
        rotateX.value =withTiming(interpolate( event.y,[0,CardHeight],[10,-10],Extrapolate.CLAMP),);
        rotateY.value = withTiming(interpolate( event.x,[0,CardWidth],[-10,10],Extrapolate.CLAMP),);
    })
    .onUpdate(event=>{
        rotateX.value = interpolate( event.y,[0,CardHeight],[10,-10],Extrapolate.CLAMP);
        rotateY.value = interpolate( event.x,[0,CardWidth],[-10,10],Extrapolate.CLAMP);
    })
    .onFinalize(()=>{
        rotateX.value=withTiming(0);
        rotateY,value =withTiming(0);
    }
    );
    //topleft =10deg,-10deg 
    //topright = 10deg,10deg
    //bottomleft = -10deg, -10deg
    //bottomright = -10deg ,10deg
const ReAnimatedStyle = useAnimatedStyle(()=>{
    const rotateXvalue =`${rotateX.value}deg`;
    const rotateYvalue =`${rotateY.value}deg`;
    return{
    transform:[
        {perspective:200},
        {rotateX:rotateXvalue },
        {rotateY:rotateYvalue },
    ]
}
})
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'black'}}>
      <HelloSkia />
      <GestureDetector gesture={gesture}>
      <Animated.View style={[{
        width:CardWidth,
        height:CardHeight,
        backgroundColor:'black',
        position:'absolute',
        borderRadius:25,
        zIndex:300,
       
        }, ReAnimatedStyle]}
        >
          <View className="flex-row ">
          <View className="bg-slate-800  rounded-[50px] w-[60px] h-[60px] mt-6 ml-6 mr-4">
          </View>  
          <View className="flex-col ">
          <View className="bg-slate-800 w-[85px] h-[15px] rounded-full mt-8 mb-4">
          </View>  
          <View className="bg-slate-800 w-[85px] h-[15px] rounded-full ">
          </View>  
          </View>  
          </View>  
        </Animated.View>
        </GestureDetector>
    </View>
  )
}


