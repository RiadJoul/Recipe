import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Theme from "../constants/Theme";

function generateRandomColor() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


const CookTab = () => {
  return (
    <>
      <View style={styles.recipeInfo}>
        <Text style={styles.text}>Pumpkin Soup</Text>
        <View style={styles.info}>
          <Text style={{ color: Theme.COLORS.GRAY, marginRight: 20 }}>
            🔪 - 8
          </Text>
          <Text style={{ color: Theme.COLORS.GRAY, marginLeft: 20 }}>
            ⏱️ - 15 min
          </Text>
        </View>
      </View>
      <ScrollView style={styles.steps}>

        <View style={styles.step}>
          <Text style={[styles.bullet, { backgroundColor: generateRandomColor() }]}>1</Text>
          <Text style={styles.stepText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            laboriosam ducimus molestiae voluptate temporibus deserunt provident
            ab.
          </Text>
        </View>
        <View style={styles.step}>
          <Text style={[styles.bullet, { backgroundColor: generateRandomColor() }]}>1</Text>
          <Text style={styles.stepText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            laboriosam ducimus molestiae voluptate temporibus deserunt provident
            ab.
          </Text>
        </View>
        <View style={styles.step}>
          <Text style={[styles.bullet, { backgroundColor: generateRandomColor() }]}>1</Text>
          <Text style={styles.stepText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            laboriosam ducimus molestiae voluptate temporibus deserunt provident
            ab.
          </Text>
        </View>
        <View style={styles.step}>
          <Text style={[styles.bullet, { backgroundColor: generateRandomColor() }]}>1</Text>
          <Text style={styles.stepText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            laboriosam ducimus molestiae voluptate temporibus deserunt provident
            ab.
          </Text>
        </View>
        <View style={styles.step}>
          <Text style={[styles.bullet, { backgroundColor: generateRandomColor() }]}>1</Text>
          <Text style={styles.stepText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            laboriosam ducimus molestiae voluptate temporibus deserunt provident
            ab.
          </Text>
        </View>
        
      </ScrollView>
    </>
  );
};

export default CookTab;

const styles = StyleSheet.create({
  //info section
  recipeInfo: {
    marginVertical: 10,
    display: "flex",
    justifyContent: "center",
  },
  text: {
    fontFamily: "font-regular",
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: 18,
    color: "black",
    textAlign: "center",
    textTransform: "uppercase",
  },
  info: {
    marginVertical: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  //steps section
  steps: {},
  step: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    alignItems:'center'
  },
  bullet: {
    marginRight: 10,
    marginTop: 2,
    borderRadius: 10,
    height: 20,
    width: 20,
    paddingBottom: 2,
    textAlign: "center",
    opacity:0.5
  },
  stepText: {
    color: Theme.COLORS.GRAY,
    letterSpacing: 0.5,
  },
});
