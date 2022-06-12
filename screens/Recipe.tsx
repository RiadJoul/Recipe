import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import CookTab from "../components/CookTab";
import InformationTab from "../components/InformationTab";
import IngredientsTab from "../components/IngredientsTab";
import Tabs from "../components/Tabs";
import Theme from "../constants/Theme";

import { RouteProp, useRoute } from "@react-navigation/native";
import axios from "axios";

const Recipe = () => {
  const route = useRoute<RouteProp<Record<string, any>, string>>();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [recipe, setRecipe] = useState<any>();

  useEffect(() => {}, []);

  const getRecipe = async () => {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/${
          route.params!.recipeId
        }/information?includeNutrition=false`,
        {
          params: {
            apiKey: "072bbf010d094175906e3fa4c29a38ab",
            includeNutrition: false,
          },
        }
      )
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRecipe();
  }, []);
  return (
    <View style={styles.container}>
      {recipe && (
        <>
          <View style={styles.header}>
            <Image style={styles.image} source={{uri: recipe.image}} />
          </View>
          <View style={styles.footer}>
            <View style={styles.recipeInfo}>
              <Text style={styles.text}>{route.params!.recipeName}</Text>
              <View style={styles.info}>
                <Text style={{ color: Theme.COLORS.GRAY, marginRight: 20 }}>
                  🔪 {recipe.extendedIngredients.length} Ingredients
                </Text>
                <Text style={{ color: Theme.COLORS.GRAY, marginLeft: 20 }}>
                  ⏱️  {recipe.readyInMinutes < 1 ? '> 1min' : recipe.readyInMinutes + ' min'}
                </Text>
              </View>
            </View>
            <Tabs activeTab={activeTab} setTab={setActiveTab} />
            {activeTab == 0 && <InformationTab recipe={recipe} />}
            {activeTab == 1 && <IngredientsTab recipe={recipe} />}
            {activeTab == 2 && <CookTab recipe={recipe}/>}
          </View>
        </>
      )}
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
