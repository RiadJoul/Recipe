import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Image, View } from "react-native";
import CookTab from "../components/CookTab";

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
        <Tabs activeTab={activeTab} setTab={setActiveTab} />
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
