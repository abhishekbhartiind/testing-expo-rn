import React from "react"
import { View, Image } from "react-native"

export function Banner() {
  return (
    <View className="w-full h-36 md:h-60 rounded-2xl mt-5 mb-4">
      <Image
        source={require("../../assets/payu/image.png")}
        className="w-full h-36 md:h-60 rounded-2xl"
      />
    </View>
  )
}
