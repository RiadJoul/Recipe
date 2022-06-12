import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Theme from "../constants/Theme";
import { generateRandomColor } from "../generateColor";

const IngredientsTab = ({ recipe }: any) => {
  const ingredients: any[] = recipe.extendedIngredients;
  return (
    <ScrollView style={styles.card}>
      {ingredients.map((ingredient) => (
        <View key={ingredient.name} style={styles.ingredient}>
          <Text
            style={[styles.bullet, { backgroundColor: generateRandomColor() }]}
          ></Text>
          <Text style={styles.element}>{ingredient.name}</Text>
          <Text style={styles.amount}>{ingredient.amount}</Text>
          <Text style={styles.unit}>{ingredient.unit}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default IngredientsTab;

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    display: "flex",
    backgroundColor: Theme.COLORS.WHITE,
    borderRadius: 20,
    width: "100%",
  },
  ingredient: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomColor: Theme.COLORS.LIGHTGRAY,
    borderBottomWidth: 0.3,
    alignItems: "center",
  },
  bullet: {
    borderRadius: 10,
    height: 6,
    width: 6,
    paddingBottom: 2,
    textAlign: "center",
    marginHorizontal: 15,
  },
  element: {
    color: Theme.COLORS.GRAY,
    letterSpacing: 0.5,
    fontFamily: "font-semiBold",
    fontSize: 16,
  },
  amount: {
    marginLeft: 25,
    color: Theme.COLORS.BLACK,
    letterSpacing: 0.5,
    fontFamily: "font-semiBold",
  },
  unit: {
    marginLeft: 2,
    color: Theme.COLORS.GRAY,
    fontFamily: "font-regular",
  },
});
