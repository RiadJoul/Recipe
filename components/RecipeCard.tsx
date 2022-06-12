import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import Theme from "../constants/Theme";

interface Props {}

const RecipeCard = () => {
  const navigation = useNavigation<any>();
  const imageSource = {
    uri: "https://assets.bonappetit.com/photos/5e46caf4baec0e000820349c/1:1/w_2560%2Cc_limit/0220-French-Onion-Soup-single-lede.jpg",
  };
  return (
    <TouchableOpacity style={styles.wrapper} onPress={() => navigation.navigate("Recipe")}>
      <View style={styles.container}>
        <Image style={styles.image} source={imageSource} />
      </View>
      <View style={styles.recipeInfo}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Pumpkin Soup</Text>
        </View>
        <View style={styles.info}>
          <Text style={{ color: Theme.COLORS.GRAY, marginRight: 20 }}>
            🔪 - 8
          </Text>
          <Text style={{ color: Theme.COLORS.GRAY, marginLeft: 20 }}>
            ⏱️ - 15 min
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 25,
    marginVertical: 15,
    borderRadius: 25,
  },
  container: {
    width: "100%",
    height: 300,
    marginBottom: 15,

    overflow: "hidden",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontFamily: "font-regular",
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: 18,
    color: "black",
    textTransform: "uppercase",
  },
  info: {
    marginVertical: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  recipeInfo: {
    elevation: 50,
    backgroundColor: "white",
    padding: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});

export default RecipeCard;
