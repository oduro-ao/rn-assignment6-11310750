import { View, Text, TouchableOpacity, Image } from 'react-native'
import { router } from 'expo-router'

export default CartScreen = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => router.push("./HomeScreen")}>
          <Image
            source={require("../../assets/images/shoppingBag.png")}
          />
        </TouchableOpacity>
    </View>
  )
}

 
