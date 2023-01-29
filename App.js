import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import React from "react";
import { AnimatedApp } from "./src/AnimatedApp";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View } from "react-native";
export default function App() {
  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <AnimatedApp />
        </NavigationContainer>
      </View>
    </PaperProvider>
  );
}
