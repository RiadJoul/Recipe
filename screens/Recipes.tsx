import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Theme from "../constants/Theme";

import Button from "../components/Button";
import ScreenTitle from "../components/ScreenTitle";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const removeTag = (index: number) => {
    setTags([...tags.slice(0, index), ...tags.slice(index + 1, tags.length)]);
  };

  const searchRecipe = () => {
    const ingredients = tags.join(',')
    
  }
  return (
    <>
      <ScreenTitle title="Recipes" />
      <View style={styles.searchSection}>
        <TextInput
          style={styles.search}
          placeholder="Search by tags"
          value={tag}
          onChangeText={(newText) => setTag(newText)}
          onSubmitEditing={(e) => {
            setTags([...tags, tag]), setTag("");
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => searchRecipe()}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tags}>
        {tags.map((tag) => (
          <TouchableOpacity
          key={tag}
            style={styles.tag}
            onPress={() => removeTag(tags.indexOf(tag))}
          >
            <Text style={styles.tagText}>{tag} X</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView style={styles.container}>
        {/* <Text style={styles.title}>Here's some delicious meals you can make with your ingridients</Text> */}
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </ScrollView>
    </>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.COLORS.BG,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    marginVertical: 15,
    marginHorizontal: 10,
    fontSize: 18,
    fontFamily: "font-semiBold",
  },
  searchSection: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Theme.COLORS.BG,
  },
  search: {
    marginLeft: 30,
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: "font-semiBold",
    backgroundColor: Theme.COLORS.LIGHTGRAY,
    width: "70%",
  },
  button: {
    backgroundColor: Theme.COLORS.BLACK,
    paddingTop: 11,
    borderRadius: 10,
    paddingHorizontal: 8,
    fontFamily: "font-semiBold",
  },
  tags: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 30,
    paddingVertical: 8,
  },
  buttonText: {
    fontFamily: "font-semiBold",
    color: Theme.COLORS.WHITE,
  },
  tag: {
    backgroundColor: Theme.COLORS.PRIMARYFOCUS,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 8,
    marginHorizontal: 4,
    marginVertical: 2,
  },
  tagText: {
    color: Theme.COLORS.WHITE,
    fontFamily: "font-semiBold",
    paddingBottom: 2,
  },
});
