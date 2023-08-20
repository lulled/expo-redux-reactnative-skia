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
const {data:productsData,status}  = useSelector(state=>state.products);
        useEffect(()=>{
            dispatch(getProducts());
        },[])

     if(status === 'loading'){
        return(
            <Text className ='text-center  text-black font-meduim text-2xl py-6 '>Loading.....</Text>
        )
     }
    const addToCart =(product)=>{
        // dispatch  to add action 
        dispatch(add(product));


    }
        
    const product =({ item }) => (
        <View className='h-[300px] rounded-lg  shadow-sm shadow-slate-400  ml-2 mt-2 mb-10 bg-white px-4 py-4' style={{width:p_width,}}>
            <Image
                resizeMode='contain'
                className='w-full h-full rounded-lg '
                source={{ uri: item.image }}
            />
            <Text className=' text-left text-black font-meduim '>usd {item.price}</Text>
            <View className=' bg-white ' >
            <TouchableOpacity className=' bg-white pt-4' onPress={()=>addToCart(item)}>
                <Text className='bg-blue-500 text-center mx-2   text-[10px] rounded-md p-1 '>Add To Cart</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
  return (
    <SafeAreaView className='pt-12 flex-1 mx-2  justify-center items-center pb-20'>
    <View className=' w-full px-2 mb-10'>
        <CartItems />
        <Text className='  text-black font-bold text-3xl items-left text=left py-4 px-4'>List of products</Text>
        <FlatList
            data={productsData}
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