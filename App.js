import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Home.js";
import Story from "./src/Story.js";
import Profile from "./src/Profile.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Profile />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
