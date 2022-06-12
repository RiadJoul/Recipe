import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Landing from "./screens/Landing";
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { View, Text } from "react-native";
import StackNavigator from "./StackNavigator";
const getFonts = () =>
  Font.loadAsync({
    "font-regular": require("./assets/fonts/Barlow-Regular.ttf"),
    "font-semiBold": require("./assets/fonts/Barlow-SemiBold.ttf"),
    "font-bold": require("./assets/fonts/Barlow-Bold.ttf"),
  });

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        console.log("start");
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await getFonts();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 600));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
        SplashScreen.hideAsync();
        console.log("finished");
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
