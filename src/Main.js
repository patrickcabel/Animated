import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";

import Home from "./Home.js";
import Feed from "./screens/Feed.js";
import Saved from "./screens/Saved.js";
import Moments from "./screens/Moments.js";
import Profile from "./screens/Profile.js";
import EditProfile from "./screens/EditProfile.js";

const Tab = createBottomTabNavigator();

const Main = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        tabBarStyle: { position: "absolute" },

        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#000000",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barcode-outline" size={30} />
          ),
        }}
        name="Feed"
        component={Feed}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmark-outline" size={30} />
          ),
        }}
        name="Saved"
        component={Saved}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" size={30} />
          ),
          headerShown: false
        }}
        name="Moments"
        component={Moments}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={30} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={30} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
export default Main;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
