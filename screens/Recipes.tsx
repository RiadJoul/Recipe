import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Theme from "../constants/Theme";

import Button from "../components/Button";
import ScreenTitle from "../components/ScreenTitle";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  
  return (
    <>
      <ScreenTitle title="Recipes" />
      <ScrollView style={styles.container}>
      <Text style={styles.title}>Here's some delicious meals you can make with your ingridients</Text>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
      </ScrollView>
    </>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.COLORS.WHITE,
    textAlign: "center",
    
  },
  title:{
    
      textAlign:'center',
      marginVertical:15,
      marginHorizontal:10,
      fontSize:18,
      fontFamily: 'font-semiBold'
  }
});