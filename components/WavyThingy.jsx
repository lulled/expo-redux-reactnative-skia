// WavyThingy.js
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MotiView } from 'moti';
import { Easing, timing } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const _color = 'rgb(255 44 210)';
const _size = 35;

export default function WavyThingy({ style }) {
    const navigation = useNavigation();
  return (
    <View style={[style, { borderRadius: 16 }]} className='bg-white p-28'>
     
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map((index)=>{
            return(
                <MotiView
                from={{opacity:0.7,scale:1}}
                animate={{opacity:0,scale:4}}
                transition={{
                    type:'timing',
                    duration:1000,
                    easing:Easing.out(Easing.ease),
                    delay:index*200,
                    repeatReverse:false,
                    loop:true
                }
                }
                key={index}
                style={[StyleSheet.absoluteFillObject,styles.dot]}/>
            )
        })}
        <TouchableOpacity onPress={()=>navigation.navigate('Skia')}>
        <Ionicons name="notifications" size={18} color="black" />
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
