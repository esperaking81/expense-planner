import "react-native-gesture-handler";

import { useCallback } from "react";
import { View } from "react-native";

import AppContainer from "./src/components/app-container";
import Navigator from "./src/";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "SourceSansPro-Regular": require("./src/assets/fonts/SourceSansPro-Regular.ttf"),
    "SourceSansPro-Light": require("./src/assets/fonts/SourceSansPro-Light.ttf"),
    "SourceSansPro-Bold": require("./src/assets/fonts/SourceSansPro-Bold.ttf"),
    "SourceSansPro-Black": require("./src/assets/fonts/SourceSansPro-Black.ttf"),
    "SourceSansPro-SemiBold": require("./src/assets/fonts/SourceSansPro-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <AppContainer>
        <Navigator />
      </AppContainer>
    </View>
  );
}
