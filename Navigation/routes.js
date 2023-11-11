import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Restaurant from "../screens/Restaurant";
import React from 'react'
import Login from "../screens/login.js";
import Signup from "../screens/signup.js";
import Cart from "../screens/Cart.js";
import Placed from "../screens/Placed.js";
const Stack=createNativeStackNavigator()




export default function routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {headerShown:false}
      }>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Restaurant" component={Restaurant}/>
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="Placed" component={Placed}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
