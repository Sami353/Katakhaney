import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { RestaurantScreen } from "./src/features/restaurant/screens/restaurant.screen";
import { theme } from "./src/infrastructure/theme/index";

import { useFonts as useOswald, Oswald_400Regular } from "expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "expo-google-fonts/lato";
console.log(StatusBar.currentHeight);

export default function App() {
  let[oswaldLoaded]=useFonts({
    Oswald_400Regular,
  });
  let[latoLoaded]=useFonts({
    Lato_400Regular,
  });
  
  if(!oswaldLoaded || !latoLoaded){
    return null;
  

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
}