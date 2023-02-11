import react from "react";
import { View, Text, StyleSheet } from "react-native";
import { Cards } from "./card";

export const RestaurantInfo = () => {
    return(
        <View>
            <Text>Restaurant List</Text>
            <Cards />
        </View>
    );
};