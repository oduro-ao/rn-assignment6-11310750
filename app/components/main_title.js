import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default main_title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OUR STORY</Text>
      <View style={styles.icon_container_main}>
        <TouchableOpacity
          style={styles.icon_container}
        >
          <Image
            style={styles.icons}
            source={require("../../assets/images/Listview.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon_container}
        >
          <Image
            style={styles.icons}
            source={require("../../assets/images/Filter.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
  },
  icon_container_main: {
    flexDirection: "row",
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon_container: {
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 40,
    width: 40,
  },
});
