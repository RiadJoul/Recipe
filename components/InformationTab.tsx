import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import Theme from "../constants/Theme";
import { generateRandomColor } from "../generateColor";

const InformationTab = () => {
  return (
    <ScrollView style={styles.informations}>
         <View style={styles.information}>
        <Text style={[styles.bullet, { backgroundColor: "#D2EBC1" }]}>
        😎😎😎
        </Text>
        <Text style={styles.text}>Very popular</Text>
      </View>
        <View style={styles.information}>
        <Text style={[styles.bullet, { backgroundColor: "#D2EBC1" }]}>
        🥛🥛🥛
        </Text>
        <Text style={styles.text}>Dairy Free</Text>
      </View>
      <View style={styles.information}>
        <Text style={[styles.bullet, { backgroundColor: "#D2EBC1" }]}>
        🌱🌱🌱
        </Text>
        <Text style={styles.text}>Vegetarian</Text>
      </View>
      <View style={styles.information}>
        <Text style={[styles.bullet, { backgroundColor: "#2BCA7A" }]}>
          🥬🥕🥦
        </Text>
        <Text style={styles.text}>Healthy</Text>
      </View>
      <View style={styles.information}>
        <Text style={[styles.bullet, { backgroundColor: "#F7EDCA" }]}>
          🌾🌾🌾
        </Text>
        <Text style={styles.text}>Gluten Free</Text>
      </View>
      <View style={styles.information}>
        <Text style={[styles.bullet, { backgroundColor: "#FFCF33" }]}>
          💰💰💰
        </Text>
        <Text style={styles.text}>Cheap</Text>
      </View>
      <View style={styles.information}>
        <Text style={[styles.bullet, { backgroundColor: "#DDF0D1" }]}>
        🧑‍🤝‍🧑🧑‍🤝‍🧑🧑‍🤝‍🧑
        </Text>
        <Text style={styles.text}>Servings 10 people</Text>
      </View>
    </ScrollView>
  );
};

export default InformationTab;

const styles = StyleSheet.create({
  informations: {
    marginTop: 10,
    display: "flex",
    backgroundColor: Theme.COLORS.WHITE,
    borderRadius: 20,
    width: "100%",
  },
  information: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  bullet: {
    borderRadius: 5,
    height: 40,
    width: 40,
    paddingBottom: 2,
    textAlign: "center",
    marginHorizontal: 15,
    opacity: 0.8,
  },
  text: {
    color: Theme.COLORS.GRAY,
    fontFamily: "font-semiBold",
    letterSpacing: 0.5,
    fontSize:16
  },
});
