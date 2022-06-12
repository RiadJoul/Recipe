import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Theme from "../constants/Theme";

interface Props {
  text: string;
  onClick: any;
}

const Button = ({ text ,onClick}: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {onClick()}}>
      <Text style={[styles.buttonText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.COLORS.PRIMARYFOCUS,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 55,
    paddingVertical: 8,
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    paddingVertical: 2,
    paddingBottom: 2,
    fontWeight: "600",
    textTransform: "uppercase",
    fontFamily: 'font-bold',
    fontStyle:"normal",
    letterSpacing: 1,
  },
});

export default Button;
