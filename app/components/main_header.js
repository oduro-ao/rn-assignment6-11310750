import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import HomeScreen from "./HomeScreen";


export default main_header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.icons}
          source={require("../../assets/images/Menu.png")}
        />
      </TouchableOpacity>
      <Image
        style={styles.logo}
        source={require("../../assets/images/Logo.png")}
      />
      <View style={styles.searchAndBag}>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={require("../../assets/images/Search.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("./components/CartScreen")}>
          <Image
            style={styles.icons}
            source={require("../../assets/images/shoppingBag.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchAndBag: {
    flexDirection: "row",
    gap: 10,
  },
  logo: {
    marginLeft: 30,
  },
  icons: {
    height: 30,
    width: 30,
  }
});
