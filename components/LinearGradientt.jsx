import React from "react";
import { Dimensions,View,Text } from "react-native";
import {
  Canvas,
  Rect,
  LinearGradient,
  Skia,
  Shader,
  vec,
  RoundedRect
} from "@shopify/react-native-skia";
import WavyThingy from "./WavyThingy";
 


const {width,height} = Dimensions.get('window');
console.log(width,height);
export default function LinearGradientt(){
  return (
    <Canvas style={{ flex: 1 }}>
      <Rect x={0} y={0} width={width} height={height}>
        <LinearGradient
          start={vec(200,-180)}
          end={vec(width,height )}
          colors={["magenta", "yellow"]}
        />
       
      </Rect>
      
    </Canvas>
  );
};