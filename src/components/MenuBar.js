import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function MenuBar() {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#ffffff",
        elevation: 5,
        paddingVertical: 11,
      }}
    >
      <TouchableOpacity
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <FontAwesome name="home" size={24} color="#018BF7" />
        <Text style={{ fontSize: 12, fontWeight: "bold", color: "#018BF7" }}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <FontAwesome name="calendar" size={24} color="gray" />
        <Text style={{ fontSize: 12, color: "gray" }}>Schedule</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <FontAwesome name="wechat" size={24} color="gray" />
        <Text style={{ fontSize: 12, color: "gray" }}>Message</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <FontAwesome name="user" size={24} color="gray" />
        <Text style={{ fontSize: 12, color: "gray" }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
