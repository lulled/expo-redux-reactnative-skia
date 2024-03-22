import { View, Text, TouchableOpacity, Platform, Button } from 'react-native';
import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import ViewShot from 'react-native-view-shot';
// Import your other components like AuthButtons, WellComeAnime
import WellComeAnime from './WellComeAnime';
import AuthButtons from './AuthButtons'

export default function WellCome() {
  const navigation = useNavigation();
  const viewRef = useRef(); 

  const takeScreenshot = async () => {
    if (viewRef.current) {
      // Capture the screenshot
      const uri = await ViewShot.captureRef(viewRef, {
        format: 'jpg',
        quality: 0.9,
      });

      // Request permission to access the media library
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === 'granted') {
        // Save the screenshot to the media library
        const asset = await MediaLibrary.createAssetAsync(uri);

        if (Platform.OS === 'android') {
          const album = await MediaLibrary.getAlbumAsync('Screenshots');
          if (album === null) {
            await MediaLibrary.createAlbumAsync('Screenshots', asset, false);
          } else {
            await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
          }
        }

        console.log(`Image has been saved to ${asset.uri}`);
      } else {
        console.log('Permission not granted. Image could not be saved.');
      }
    }
  };

  return (
    <View className='flex-1 bg-indigo-900' ref={viewRef}>
      <TouchableOpacity  className='justify-between ml-10 mt-14 mr-6 items-end' onPress={() => navigation.navigate('Shop', {})}>
        <Text className='w-[150px] bg-white text-black text-center font-medium text-[18px] p-2 rounded-[50px]'>Redux-cart</Text>
      </TouchableOpacity>
      
      <TouchableOpacity  className='justify-between ml-10 mt-2  mr-6 items-end' onPress={() => navigation.navigate('AnimatedCard', {})}>
        <Text className='w-[150px] bg-white text-black text-center font-medium text-[18px] p-2 rounded-[50px]'>Pan-gesture</Text>
      </TouchableOpacity>
      <TouchableOpacity  className='justify-between ml-10 mt-2  mr-6 items-end' onPress={() => navigation.navigate('Skia', {})}>
        <Text className='w-[150px] bg-orange-500 text-black text-center font-medium text-[18px] p-2 rounded-[50px]'>Hello-Skia</Text>
      </TouchableOpacity>
      <TouchableOpacity  className='justify-between ml-10 mt-2  mr-6 items-end' onPress={() => navigation.navigate('Linear', {})}>
        <Text className='w-[150px] bg-fuchsia-500 text-black text-center font-medium text-[18px] p-2 rounded-[50px]'>Gradient</Text>
      </TouchableOpacity>
      
      <TouchableOpacity  className='justify-between ml-10 mt-2  mr-6 items-end' onPress={takeScreenshot}>
        <Text className='w-[150px] bg-white text-black text-center font-medium text-[18px] p-2 rounded-[50px]'>Screen-shot</Text>
      </TouchableOpacity>
      <TouchableOpacity  className='justify-between ml-10 mt-2  mr-6 items-end' onPress={() => navigation.navigate('Spinner', {})}>
        <Text className='w-[150px] bg-white text-black text-center font-medium text-[18px] p-2 rounded-[50px]'>Spinner</Text>
      </TouchableOpacity>
      
      {/* Assuming these are your other components */}
       <WellComeAnime />
      <AuthButtons /> 
    </View>
  );
}
