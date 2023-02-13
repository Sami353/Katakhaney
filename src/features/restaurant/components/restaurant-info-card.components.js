import react from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
padding: 16px;
color: red;
`;

const RestaurantCard = styled(Card)`
background-color: white;
margin:20px;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Hari dai ko Coffee Pasal",
    icon,
    photos = [
      "https://www.pexels.com/photo/group-of-people-gathering-inside-bar-1058277/",
    ],
    address = "pul muni bato side ma",
    rating = 4,
    openingHours,
    isClosedTemporaroily,
  } = restaurant;
  return (
    <Card style={styles.card} elvation={5}>
      <Card.Cover style={{ padding: 12 }} source={{ uri: photos[0] }} />
      <Text>{name}</Text>
    </Card>
  );
};

const style = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    paddingBottom: 0,
    backgroundColor: "white",
  },
  title: {
    padding: 12,
  }
});
