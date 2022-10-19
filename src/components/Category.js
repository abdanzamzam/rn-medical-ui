import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

export default function Category({ category }) {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>Category</Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity>
            <Text style={{ fontSize: 13 }}>See more</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={category}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                marginVertical: 5,
                paddingVertical: 6,
                paddingHorizontal: 10,
                borderRadius: 7,
                backgroundColor: item.name === "Article" ? "#018BF7" : "white",
                marginRight: 5,
                elevation: 1,
              }}
            >
              <Text
                style={{ color: item.name === "Article" ? "white" : "black" }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}
