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
    position: "absolute",
    top: 0,
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: genericStyles.colors.cream,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
});
