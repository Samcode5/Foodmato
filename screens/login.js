import { SafeAreaView, View, Text, TouchableOpacity,TextInput } from "react-native";
import React ,{useState} from "react";
import InputText from "../component/InputText";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function Login() {
    const [username,setUserName]=useState("");
    const [userpassword,setUserPassword]=useState("");
    const navigation=useNavigation()
    const Pressed=(()=>{

        try {
            axios({
                method:'POST',
                url:'http://10.0.2.2:8000/login',
                data:{
                    name:username,
                    password:userpassword
                }
            })
            
        } catch (error) {
    
            console.log(error)
            
        }
    
            navigation.navigate('Home')
        })
  return (
    <View className="mt-6 flex-1 bg-white p-10 h-full">
      <View className="items-center mt-5 mb-20">
        <Text className="text-3xl font-semibold">Login</Text>
      </View>
      <View>
        <Text>USERNAME</Text>
        <TextInput  onChangeText={value=>setUserName(value)} className="p-2 pl-3 mt-1 mb-5 bg-gray-50 border-2 border-gray-100 rounded-xl "/>
        <Text>PASSWORD</Text>
        <TextInput  onChangeText={value=>setUserPassword(value)} className="p-2 pl-3 mt-1 mb-5 bg-gray-50 border-2 border-gray-100 rounded-xl "/>
        <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" onPress={(Pressed)}>
        <View className="w-11/12 pt-4 pb-4 mt-5 mb-5 ml-4 bg-black rounded-lg">
          <Text className="text-center text-base text-white font-bold">
            Login
          </Text>
        </View>
      </TouchableOpacity>
      </View>
      <View className="self-center flex-row">
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text className="underline">Sign up here</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}