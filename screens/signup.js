import { SafeAreaView, View, Text, TouchableOpacity,TextInput} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';


export default function Signup() {
    const [username,setUserName]=useState("");
    const [userpassword,setUserPassword]=useState("");

    const navigation=useNavigation()
    const Pressed=(()=>{
      
    try {
        axios({
            method:'POST',
            url:'http://10.0.2.2:8000/',
            data:{
                name:username,
                password:userpassword
            }
        })
        
    } catch (error) {

        console.log(error)
        
    }
      navigation.navigate('Login')})
    
  return (
    <View className="p-10 h-full flex-1 bg-white">
    <View className="items-center mt-5 mb-10">
      <Text className="text-3xl font-semibold">Register</Text>
    </View>
    <View>
      <Text>NAME</Text>
      <TextInput  onChangeText={value=>setUserName(value)} className="p-2 pl-3 mt-1 mb-5 bg-gray-50 border-2 border-gray-100 rounded-xl "/>
      <Text>PASSWORD</Text>
      <TextInput  onChangeText={value=>setUserPassword(value)} className="p-2 pl-3 mt-1 mb-5 bg-gray-50 border-2 border-gray-100 rounded-xl "/>
      <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" onPress={()=> Pressed()}>
      <View className="w-11/12 pt-4 pb-4 mt-5 mb-5 ml-4 bg-black rounded-lg">
        <Text className="text-center text-base text-white font-bold">
           Sign in
        </Text>
      </View>
    </TouchableOpacity>
    </View>
    <View className="self-center flex-row">
      <Text>Have an account already? </Text>
      <TouchableOpacity>                          
        <Text className="underline" onPress={(Pressed)}>Login</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}