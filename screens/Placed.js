import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Placed() {
  return (
    <SafeAreaView className="flex-row  justify-center mt-10">
      <Text className="text-2xl">Placed</Text>
    </SafeAreaView>
  )
}