import { View, Text, Image, StyleSheet, Pressable, Alert } from "react-native";
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
        <Pressable
          onPress={() => Alert.alert("View and Edit My Information")}
          style={{
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <Ionicons name="pencil" size={20} />
          <Text
            style={{
              fontSize: 16,
              marginLeft: 8
            }}
          >
            View and Edit My Information
          </Text>
        </Pressable>

        <View
          onPress={() => Alert.alert(" Change App Preferences")}

          style={{
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <Ionicons name="options-outline" size={20} />
          <Text
            style={{
              fontSize: 16,
              marginLeft: 8
            }}
          >
            Change App Preferences
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <Ionicons name="chatbox-ellipses-outline" size={20} />
          <Text
            style={{
              fontSize: 16,
              marginLeft: 8
            }}
          >
            Submit Feedback
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: 'row'
          }}
        >
          <Ionicons name="bug-outline" size={20} />
          <Text
            style={{
              fontSize: 16,
              marginLeft: 8
            }}
          >
            Report a bug
          </Text>
        </View>
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
