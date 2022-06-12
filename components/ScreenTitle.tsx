import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Theme from "../constants/Theme";
interface Props {
  title: string;
}
const ScreenTitle = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:Theme.COLORS.BG,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 50,
  },
  title: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    fontFamily: "font-bold",
    color: Theme.COLORS.GRAY,
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: 1,
    fontSize: 18,
  },
});

export default ScreenTitle;
