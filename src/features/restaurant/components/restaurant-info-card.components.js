import react from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
padding: ${(props) => props.theme.space[3]};
padding-left: ${(props) => props.theme.space[4]};
color: ${(props) => props.theme.colors.ui.primary}  ;
`;

const RestaurantCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
margin:${(props) => props.theme.space[4]};
`;

const RestaurantCardCover= styled(Card.Cover)`
padding: ${(props) => props.theme.space[4]};
background-color:${(props) => props.theme.colors.bg.primary};
`

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Hari dai ko Tarkari Pasal",
    icon,
    photos = [
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    ],
    address = "pul muni bato side ma",
    rating = 4,
    openingHours,
    isClosedTemporaroily,
  } = restaurant;
  return (
    <RestaurantCard elvation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
