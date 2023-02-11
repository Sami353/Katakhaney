import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { RestaurantScreen } from './src/features/restaurant/screens/restaurant.screen';

export default function App() {
  return (
    <>
    <RestaurantScreen />
    </>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});