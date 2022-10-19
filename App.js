import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import {
  Header,
  MenuBar,
  Schedule,
  Search,
  Category,
  Article
} from "./src/components";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([
    {
      name: "Article"
    },
    {
      name: "Consultation"
    },
    {
      name: "Drug"
    },
    {
      name: "Healthy Tips"
    },
    {
      name: "News"
    }
  ]);

  const [article, setArticle] = useState([
    {
      title: "Resep Kebugaran Pria Dewasa",
      description: "Berikut tips untuk para pria supaya semakin tangguh ...",
      date: "1 minutes ago",
      doctor: "dr. Abror Nugroho",
      imageUrl:
        "https://images.unsplash.com/photo-1562038969-e85c13ecb2ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    },
    {
      title: "Menurunkan Berat Badan 3 Hari",
      description:
        "Pengen berat badan ideal? berikut tips yang perlu kalian coba ...",
      date: "5 minutes ago",
      doctor: "dr. Aslam Abdullah",
      imageUrl:
        "https://images.unsplash.com/photo-1634463278803-f9f71890e67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Cara Menghindari Stres Berat",
      description:
        "Keseringan stres bisa jadi penyakit loh, yuk simak saran dokter ...",
      date: "20 minutes ago",
      doctor: "dr. Ilham Hakim",
      imageUrl:
        "https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Mengatasi Kantuk Berat Setiap Hari",
      description:
        "Sering merasa kantuk saat beraktifitas? Kalian harus coba ini ...",
      date: "40 minutes ago",
      doctor: "dr. Amin Mubarok",
      imageUrl:
        "https://images.unsplash.com/photo-1618517047922-d18a5a36c109?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: "ghostwhite" }}>
      <View style={{ flex: 1, marginHorizontal: 20, marginTop: 50 }}>
        <Header />
        <Search search={search} setSearch={setSearch} />
        <Schedule />
        <Category category={category} />
        <Article article={article} />
      </View>

      <MenuBar />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
