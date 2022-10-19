import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Article({ article }) {
  return (
    <View style={{ marginTop: 14, flex: 1 }}>
      <FlatList
        style={{ paddingRight: 0.5 }}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={article}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              marginBottom: 15,
              borderRadius: 10,
              flexDirection: "row",
              elevation: 1
            }}
          >
            <Image
              style={{
                width: 84,
                height: 84,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10
              }}
              source={{ uri: item.imageUrl }}
            />
            <View
              style={{
                marginLeft: 10,
                flex: 1,
                justifyContent: "center",
                marginRight: 10
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#018BF7",
                  fontSize: 14
                }}
              >
                {item.title}
              </Text>
              <Text style={{ fontSize: 12 }}>{item.description}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <Feather name="user" size={11} color="gray" />
                  <Text style={{ fontSize: 10, marginLeft: 4, color: "gray" }}>
                    {item.doctor}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center"
                    // marginLeft: 10,
                  }}
                >
                  <Feather name="clock" size={11} color="gray" />
                  <Text style={{ fontSize: 10, marginLeft: 4, color: "gray" }}>
                    {item.date}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
