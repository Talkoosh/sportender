import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import genericStyles from "../style/generic";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons/faMapLocationDot";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";

const BottomNav = () => {
  return (
    <View style={navStyles.navContainer}>
      <View style={navStyles.iconsContainer}>
        <TouchableOpacity style={navStyles.iconSelector}>
          <FontAwesomeIcon icon={faBars} size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={navStyles.iconSelector}>
          <FontAwesomeIcon icon={faStar} size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={navStyles.iconSelector}>
          <FontAwesomeIcon icon={faMapLocationDot} size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNav;

const navStyles = StyleSheet.create({
  navContainer: {
    borderTopWidth: 1,
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: genericStyles.colors.cream,
  },
  iconsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconSelector: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
