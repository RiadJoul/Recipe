import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import CookTab from "../components/CookTab";
import InformationTab from "../components/InformationTab";

import IngredientsTab from "../components/IngredientsTab";
import RecipeCard from "../components/RecipeCard";
import Tabs from "../components/Tabs";
import Theme from "../constants/Theme";

interface Props {
  id: number;
}

const Recipe = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const imageSource = {
    uri: "https://assets.bonappetit.com/photos/5e46caf4baec0e000820349c/1:1/w_2560%2Cc_limit/0220-French-Onion-Soup-single-lede.jpg",
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={imageSource} />
      </View>
      <View style={styles.footer}>
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
        <Tabs activeTab={activeTab} setTab={setActiveTab} />
        {activeTab == 0 && <InformationTab />}
        {activeTab == 1 && <IngredientsTab />}
        {activeTab == 2 && <CookTab />}
      </View>
    </View>
  );
};

export default Recipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.COLORS.WHITE,
  },
  header: {
    flex: 4,
  },
  //info section
  recipeInfo: {
    marginVertical: 2,
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
  image: {
    width: "100%",
    height: "100%",
  },
  footer: {
    flex: 5,
    backgroundColor: Theme.COLORS.BG,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
