import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import items from "./allArrays";

export default main_item_card = () => {
  return (
    <View style={styles.container_main}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {items.map((item, index) => {
          // Start a new row for every two items
          if (index % 2 === 0) {
            return (
              <View key={item.key} style={styles.row}>
                <View style={styles.container}>
                  <Image style={styles.image} source={item.image} />
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.disc}>{item.disc}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
                {index + 1 < items.length && (
                  <View style={styles.container}>
                    <Image
                      style={styles.image}
                      source={items[index + 1].image}
                    />
                    <Text style={styles.title}>{items[index + 1].title}</Text>
                    <Text style={styles.disc}>{items[index + 1].disc}</Text>
                    <Text style={styles.price}>{items[index + 1].price}</Text>
                  </View>
                )}
              </View>
            );
          }
          return null;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container_main: {
    flex: 1,
  },
  scrollViewContent: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  container: {
    flex: 1,
  },
  title: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
  },
  disc: {
    fontSize: 13,
    fontWeight: '300',
  },
  price: {
    marginTop: 5,
    fontWeight: '300',
    color: '#de8965',
  },
});
