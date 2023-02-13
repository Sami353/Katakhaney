import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.components";

export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Searchbar />
      </View>
      <View style={{ flex: 1, padding: 16, backgroundColor: "red" }}>
        <RestaurantInfo />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
