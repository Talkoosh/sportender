import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";

const Map = () => {
  const marker = {
    latlng: {
      latitude: 31.771959,
      longitude: 35.217018,
    },
    title: "hello",
  };
  return (
    <View>
      <MapView
        initialRegion={{ latitude: 31.771959, longitude: 35.217018, latitudeDelta: 0.04, longitudeDelta: 0.05 }}
        style={mapStyles.map}
        provider={PROVIDER_GOOGLE}
      >
        <TouchableOpacity></TouchableOpacity>
      </MapView>
    </View>
  );
};

export default Map;

const mapStyles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    flex: 1,
  },
});
