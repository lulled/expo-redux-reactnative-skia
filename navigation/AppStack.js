import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from '../components/Products'
import ProductsDetails from '../components/ProductsDetails'
import Cart from '../components/Cart';
import CartItems from '../components/CartItems'
import { NavigationContainer } from '@react-navigation/native'
import WellCome from '../components/WellCome'
import AnimatedCard from'../components/AnimatedCard';
import Linear from '../components/Linear'
import Skia from '../components/Skia';


const AppStackNav = createNativeStackNavigator()

export default function AppStack() {
  return (
    
    <AppStackNav.Navigator>
        <AppStackNav.Screen name='WellCome' component={WellCome} options={{headerShown:false,}}/>
        <AppStackNav.Screen name='Shop' component={Products}/>
        <AppStackNav.Screen name='details' component={ProductsDetails}/>
        <AppStackNav.Screen name='Cart' component={Cart}/>  
        <AppStackNav.Screen name='CartItems' component={CartItems}/>  
        <AppStackNav.Screen name='AnimatedCard' component={AnimatedCard}/> 
        <AppStackNav.Screen name='Skia' component={Skia}/>   
        <AppStackNav.Screen name='Linear' component={Linear}/>   
   </AppStackNav.Navigator>
   
  )
}