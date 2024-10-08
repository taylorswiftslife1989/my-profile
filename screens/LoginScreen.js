import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/user-profile.png")}
        style={styles.profileImage}
      />
      <Text style={styles.title}>MY PROFILE PAGE</Text>
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00427e",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    marginBottom: 30,
  },
  signInButton: {
    backgroundColor: "#29a3a3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  signInText: {
    color: "white",
    fontSize: 18,
  },
});

export default LoginScreen;
