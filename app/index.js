import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./components/HomeScreen";

export default function Page() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
