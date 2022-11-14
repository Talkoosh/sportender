import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Map from "../components/Map";

import genericStyles from "../style/generic.js";
const MainPage = () => {
  return (
    <View style={genericStyles.pageContainer}>
      <Header></Header>
      <View style={mainStyles.main}>
        <Map></Map>
      </View>
      <BottomNav />
    </View>
  );
};

export default MainPage;

const mainStyles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
