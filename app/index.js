import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./components/HomeScreen";
import { StatusBar } from 'expo-status-bar';


export default function Page() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="black" />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  
});
