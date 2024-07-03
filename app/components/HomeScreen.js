import { View, Text, StyleSheet } from "react-native";
import Main_header from "./main_header";
import Main_title from "./main_title";
import main_item_card from "./main_item_card";
import Main_item_card from "./main_item_card";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Main_header />
        <Main_title />
        <Main_item_card />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f5f2',
        flex: 1,
        paddingHorizontal: 20,
    },
});