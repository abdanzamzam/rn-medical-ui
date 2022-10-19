import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import React from "react";

export default function Schedule() {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>
          Inspection Schedule
        </Text>
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
      <View
        style={{
          borderRadius: 10,
          backgroundColor: "white",
          elevation: 10,
          marginTop: 15,
        }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#018BF7", "#00BAF7"]}
          style={{ borderRadius: 10 }}
        >
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ marginLeft: 15 }}>
              <Image
                style={{ height: 80, width: 80, borderRadius: 10 }}
                source={{
                  uri: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                }}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
              >
                dr. Aslam Abdullah
              </Text>
              <Text style={{ color: "#f4f4f4", fontSize: 12 }}>
                Dokter Umum
              </Text>
              <View style={{ marginTop: 10, flexDirection: "row" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Feather name="clock" size={15} color="white" />
                  <Text style={{ color: "white", fontSize: 12, marginLeft: 6 }}>
                    19 April 2022
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flex: 1,
                    marginLeft: 20,
                  }}
                >
                  <Feather name="map-pin" size={15} color="white" />
                  <Text style={{ color: "white", fontSize: 12, marginLeft: 6 }}>
                    Klinik Medika
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </>
  );
}
