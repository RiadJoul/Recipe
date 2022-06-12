import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Theme from "../constants/Theme";
import { generateRandomColor } from "../generateColor";

const CookTab = ({ recipe }: any) => {

  const steps:any[] = recipe.analyzedInstructions[0].steps;
  return (
    <>
      <ScrollView style={styles.steps}>
        {steps.map((step: any) => (
          <View key={step.number} style={styles.step}>
            <Text
              style={[
                styles.bullet,
                { backgroundColor: generateRandomColor() },
              ]}
            >
              {step.number}
            </Text>
            <Text style={styles.stepText}>
              {step.step}
            </Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default CookTab;

const styles = StyleSheet.create({
  steps: {},
  step: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  bullet: {
    marginRight: 10,
    marginTop: 2,
    borderRadius: 10,
    height: 20,
    width: 20,
    paddingBottom: 2,
    textAlign: "center",
    opacity: 0.5,
    color: Theme.COLORS.BLACK,
    fontWeight: "600",
  },
  stepText: {
    color: Theme.COLORS.GRAY,
    letterSpacing: 0.5,
    fontSize: 14,
  },
});
