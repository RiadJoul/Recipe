import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Recipes from "./screens/Recipes";
import Recipe from "./screens/Recipe";
const Stack = createNativeStackNavigator<any>();


const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Recipes" component={Recipes} />
      <Stack.Screen name="Recipe" component={Recipe} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
