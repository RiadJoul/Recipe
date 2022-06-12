import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import Theme from "../constants/Theme";

interface Props {
    activeTab:number,
    setTab:any
}

const Tabs = ({activeTab,setTab}:Props) => {
  return (
    <View style={styles.tabs}>
      <TouchableOpacity style={[styles.tab,activeTab == 0 && styles.activetab]} onPress={() => setTab(0)}>
        <Text style={styles.text}>information</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab,activeTab == 1 && styles.activetab]} onPress={() => setTab(1)}>
        <Text style={styles.text}>ingredients</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab,activeTab == 2 && styles.activetab]} onPress={() => setTab(2)}>
        <Text style={styles.text}>let's cook</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: Theme.COLORS.LIGHTGRAY,
    borderRadius: 30,
    marginVertical:15,
    paddingHorizontal:10
  },
  tab: {
    paddingVertical: 20,
    borderRadius: 30,
  },
  activetab: {
    backgroundColor: Theme.COLORS.WHITE,
  },
  text: {
    color: Theme.COLORS.GRAY,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontFamily: "font-semiBold",
    paddingHorizontal: 20
  },
});
