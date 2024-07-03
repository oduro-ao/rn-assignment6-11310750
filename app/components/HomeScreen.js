import { View, Text, StyleSheet } from "react-native";
import Main_header from "./main_header";
import Main_title from "./main_title";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Main_header />
        <Main_title />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f5f2',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
});