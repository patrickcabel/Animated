import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./Main.js";
import Profile from "./screens/Profile.js";
import EditProfile from "./screens/EditProfile.js";

const Stack = createNativeStackNavigator();

export const AnimatedApp = () => {
  return (
    <Stack.Navigator initialRouteName="main">
      <Stack.Screen
        name={"profile"}
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"main"}
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"editProfile"}
        component={EditProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
