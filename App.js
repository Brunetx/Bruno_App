import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AboutMe from "./components/AboutMe/AboutMe";
import Formacao from "./components/Formacao/Formacao";
import Home from "./components/Home/Home";

const App = () => {
  const [openMenu, setopenMenu] = useState(false);
  const [currentPage, setcurrentPage] = useState("Home");

  const toggleMenu = () => {
    setopenMenu(!openMenu);
  };

  const navigateTo = (page) => {
    setcurrentPage(page);
    setopenMenu(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About":
        return <AboutMe />;
      case "Formação":
        return <Formacao />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Currículo</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <MaterialCommunityIcons name="menu" size={30} color="lightgrey" />
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {openMenu && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Home")}
          >
            <Text style={styles.menuItemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("About")}
          >
            <Text style={styles.menuItemText}>Sobre Mim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Formação")}
          >
            <Text style={styles.menuItemText}>Formação</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {renderPage()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE9E1",
    paddingTop: 27,
  },
  header: {
    backgroundColor: "#6686D4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    shadowColor: "#000",
    shadowRadius: 5
  },
  title: {
    color: "#ECE9E1",
    fontSize: 24,
    fontWeight: "bold"
  },
  menuIcon: {
    color: "#6686D4",
    padding: 10,
  },
  menu: {
    backgroundColor: "#6686D4",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    shadowColor: "#000",
    shadowRadius: 5,
    elevation: 3,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    padding: 10
  },
  menuItemText: {
    fontSize: 16,
    color: "#000000",
    textAlign: "right",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  }
});

export default App;
