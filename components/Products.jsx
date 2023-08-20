import { View, Text, FlatList, Image, SafeAreaView,Dimensions, TouchableOpacity} from 'react-native'
import React,{useEffect} from 'react'

import { useSelector,useDispatch } from 'react-redux';
import {add } from '../grobal-state/CartSlice'
import CartItems from './CartItems';
import { getProducts } from '../grobal-state/ProductSlice';

const {width} =Dimensions.get('window');
const p_width = width/2-20;

export default function Products() {
const dispatch =useDispatch();
// flatlist expects productData as an array dataType so 
// u have to pass it in explicty like data ={productData.data}
// "data" = the array inside the initialstate object in productSlice.

const productsData = useSelector(state=>state.products);
        useEffect(()=>{
            dispatch(getProducts());
        },[])


    const addToCart =(product)=>{
        // dispatch  to add action 
        dispatch(add(product));


    }
        
    const product =({ item }) => (
        <View className='h-[270px] rounded-lg  shadow-sm shadow-slate-400  ml-2 mt-2 mb-4 bg-white px-4 py-4' style={{width:p_width,}}>
            <Image
                resizeMode='cover'
                className='w-full h-full rounded-lg '
                source={{ uri: item.image }}
            />
            <Text className=' text-left text-black font-meduim '>usd {item.price}</Text>
            <View className=' bg-white ' >
            <TouchableOpacity className=' bg-white ' onPress={()=>addToCart(item)}>
                <Text className='bg-blue-500 text-center mx-2   text-[10px] rounded-md p-1 '>Add To Cart</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
  return (
    <SafeAreaView className='pt-12 flex-1 mx-2  justify-center items-center'>
    <View className=' w-full px-2'>
        <CartItems />
        <Text className='  text-black font-bold text-3xl items-left text=left py-4 px-4'>List of products</Text>
        <FlatList
            data={productsData.data}
            keyExtractor={(item) => item.id.toString()}
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}   
            renderItem={product}
            
        />
    </View>
    </SafeAreaView>
);
}