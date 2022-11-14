import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import genericStyles from "../style/generic";

const Header = () => {
  return (
    <View style={headerStyles.headerContainer}>
      <Text style={headerStyles.text}>Header</Text>
    </View>
  );
};

export default Header;

const headerStyles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: 1,
    marginBottom: "auto",
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: genericStyles.colors.cream,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
});
