import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DishRow from '../component/dishRow';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';




export default function Restaurant() {
 const {params}= useRoute();
 const navigation=useNavigation();
 let item=params;
 console.log(item);
  return (
    <>
     
        <ScrollView  >
            <View className="relative">
                <Image className="w-full h-72" source={item.image}/>
                <TouchableOpacity 
                    onPress={()=>navigation.goBack()} 
                    className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
                    <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
                </TouchableOpacity>
            </View>
            <View 
                style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} 
                className="bg-white -mt-12 pt-6">
                <View className="px-5">
                    <Text className="text-3xl font-bold">{item.name}</Text>
                    {/* copy this code from restaurant card */}
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center space-x-1">
                            <Image 
                                source={require('../assets/images/fullStar.png')} 
                                className="h-4 w-4" />
                            <Text className="text-xs">
                                <Text className="text-green-700">{item.rating}</Text>
                                <Text className="text-gray-700"> (4.6k review)</Text> · <Text className="font-semibold text-gray-700">{item.type}</Text>
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <Icon.MapPin color="gray" width={15} height={15} />
                            <Text className="text-gray-800 text-xs"> Nearby · {item.address}</Text>
                        </View>
                    </View>
                    <Text className="text-gray-500 mt-2">{item.description}</Text>
                    
                    
                </View>
                
            </View>
            <View className="pb-36 bg-white">
                <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                {/* dishes */}
                {
                    item.dishes.map((dish,index)=>{
                        return (
                            <DishRow 
                              item={{...dish}}
                              key={index}
                            />
                        )
                    })
                }
            </View>
      
        </ScrollView>
    </>
  )
}
