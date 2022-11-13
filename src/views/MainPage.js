import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import genericStyles from "../style/generic.js";
const MainPage = () => {
  return (
    <View style={genericStyles.pageContainer}>
      <Header></Header>
      <BottomNav />
    </View>
  );
};

export default MainPage;
