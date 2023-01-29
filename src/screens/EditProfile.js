import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import ProfilePic from "../images/pfp.png";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

const EditProfile = ({ navigation }) => {
  const [name, onChangeName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onPasswordChange] = React.useState("");

  const goBack = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable onPress={goBack}>
          <Icon name="arrow-left" size={28} style={styles.icon} />
        </Pressable>
        <Text style={styles.header}>Edit Profile</Text>
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
            }}
            source={ProfilePic}
          />
          <View>
            <TextInput
              onChange={onChangeName}
              value={name}
              label="Full Name"
              mode="outlined"
              style={styles.input}
            ></TextInput>
          </View>
          <View>
            <TextInput
              onChange={onChangeEmail}
              value={email}
              label="Email"
              mode="outlined"
            ></TextInput>

            <TextInput
              onChange={onChangeEmail}
              value={email}
              label="Confrim Email"
              mode="outlined"
            ></TextInput>
          </View>
          <View>
            <TextInput
              onChange={onPasswordChange}
              value={password}
              label="Password"
              mode="outlined"
              style={styles.input}
              right={<TextInput.Icon icon="eye" />}
            ></TextInput>

            <TextInput
              onChange={onPasswordChange}
              value={password}
              label="Re-Type Password"
              mode="outlined"
              style={styles.input}
              right={<TextInput.Icon icon="eye" />}
            ></TextInput>
          </View>
        </View>
        <Button mode="contained" style={styles.button}>
          Cancel
        </Button>
        <Button mode="contained" style={{ marginTop: 10 }}>
          Save
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  input: {
    marginBottom: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 20,
  },
});
