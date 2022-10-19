import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Search({ search, setSearch }) {
  return (
    <View style={{ flexDirection: "row", marginTop: 25 }}>
      <TextInput
        value={search}
        placeholder="Searching ..."
        onChangeText={(text) => setSearch(text)}
        style={{
          backgroundColor: "white",
          paddingVertical: 8,
          borderRadius: 15,
          paddingLeft: 20,
          flex: 1,
          elevation: 1,
        }}
      />
      <TouchableOpacity
        style={{
          padding: 9,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#018BF7",
          borderRadius: 15,
          marginLeft: 10,
          elevation: 1,
        }}
      >
        <Ionicons name="search-outline" size={27} color="white" />
      </TouchableOpacity>
    </View>
  );
}
