import { View, Text,FlatList,Dimensions, Image ,TouchableOpacity,} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../grobal-state/CartSlice';

const {width} =Dimensions.get('window');
const p_width = width/2-20;

export default function Cart() {
    const cartState = useSelector(state=>state.cart);
    const dispatch = useDispatch();
    const removeFromCart =(id)=>{
      dispatch(remove(id));
    }
    const product =({ item }) => (
        <View className='h-[270px] rounded-lg  shadow-sm shadow-slate-400  ml-2 mt-2 mb-10 bg-white px-4 py-4' style={{width:p_width,}}>
            <Image
                resizeMode='cover'
                className='w-full h-full rounded-lg '
                source={{ uri: item.image }}
            />
            <Text className=' text-left text-black font-meduim '>usd {item.price}</Text>
            <View className=' bg-white ' >
            <TouchableOpacity className=' bg-white' onPress={()=>removeFromCart(item.id)}>
                <Text className='bg-red-500 text-center mx-2   text-[10px] rounded-md p-1 '>remove from cart</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
  return (
    <View className= 'pt-12 justify-right  pb-20 items-center'>
      <Text className='  text-black font-bold text-3xl items-left text=left py-4 px-4'> products in cart </Text>
        <FlatList
            data={cartState}
            keyExtractor={(item) => String(item.id)}
            verticle
            showsVerticalScrollIndicator={false}
            numColumns={2}   
            renderItem={product}
            
        />
    </View>
  )
}