import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import ProfilePic from "../assets/images/pfp.png";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>
        <Image
          style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
          source={ProfilePic}
        />
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            marginBottom: 60,
          }}
        >
          Patrick Abel
        </Text>
      </Text>
      <View style={{ marginTop: 50 }}>
        <Text
          style={{
            fontSize: 16,
            marginTop: 20,
          }}
        >
          <Ionicons name="pencil" size={20} /> View and Edit My Information
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: 20,
          }}
        >
          <Ionicons name="options-outline" size={20} /> Change App Preferences
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: 20,
          }}
        >
          <Ionicons name="chatbox-ellipses-outline" size={20} /> Submit Feedback
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: 20,
          }}
        >
          <Ionicons name="bug-outline" size={20} /> Report a bug
        </Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 80,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  profileText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
