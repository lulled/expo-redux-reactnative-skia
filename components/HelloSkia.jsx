import React,{useEffect} from 'react';
import { Canvas, Circle, Rect, RoundedRect, SweepGradient,vec,BlurMask,useSharedValueEffect,
    useValue, } from '@shopify/react-native-skia';
import { useSharedValue,withRepeat,withTiming } from 'react-native-reanimated';

export default function HelloSkia() {
    const canvaPadding =40 ;
    const Width= 300;
    const Height =220;
    const rSharedValue =useSharedValue(0);
    const skValue = useValue(0);

    useEffect(() => {
        rSharedValue.value = withRepeat(withTiming(10, { duration: 2000 }), -1, true);
      }, [rSharedValue]);
  
      useSharedValueEffect(() => {
        skValue.current = rSharedValue.value;
      }, rSharedValue);
  return (
    
      <Canvas style={{
        width: Width+canvaPadding,
        height: Height+canvaPadding
      }}>
        <RoundedRect
        x={canvaPadding/2}
        y={canvaPadding/2}
         width={300}
         height={220}
         r={25}

        >
        <SweepGradient colors={['cyan','magenta','yellow','cyan']}
        c={vec((Width+canvaPadding)/2,(Height+canvaPadding)/2)}
        />
        </RoundedRect>
        <BlurMask blur={skValue}style={'solid'}/>
      </Canvas>
   
  );
}

