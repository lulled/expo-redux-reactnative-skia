// LInear.js
import { View, Dimensions } from 'react-native';
import React from 'react';
import LinearGradientt from './LinearGradientt';
import WavyThingy from './WavyThingy';

const { width, height } = Dimensions.get('window');

export default function LInear() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <LinearGradientt />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width,
          height,
        }}
      >
        <WavyThingy />
      </View>
    </View>
  );
}
