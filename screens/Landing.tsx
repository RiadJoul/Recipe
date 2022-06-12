import React from "react";
import { View, StyleSheet } from "react-native";
import Theme from "../constants/Theme";

import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import ScreenTitle from "../components/ScreenTitle";



const Landing = () => {
  const navigation = useNavigation<any>();
  return (
    <>
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.footer}>
        <Button text="start" onClick={() => navigation.navigate("Recipes")} />
      </View>
    </View>
    </>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.COLORS.LIGHTGRAY,
  },
  header: {
    flex: 4,
  },
  footer: {
    flex: 1,
    backgroundColor: Theme.COLORS.GRAY,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
