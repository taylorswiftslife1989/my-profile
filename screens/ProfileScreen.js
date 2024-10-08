import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ImageBackground,
  SafeAreaView,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotifEnabled, setIsNotifEnabled] = useState(false);
  const [arrowRotationProfile, setArrowRotationProfile] = useState(0);
  const [arrowRotationSettings, setArrowRotationSettings] = useState(0);

  const toggleDarkMode = () => setIsDarkMode((previousState) => !previousState);
  const toggleNotif = () =>
    setIsNotifEnabled((previousState) => !previousState);

  const rotateArrowProfile = () => {
    setArrowRotationProfile(arrowRotationProfile === 0 ? 90 : 0);
  };
  const rotateArrowSettings = () => {
    setArrowRotationSettings(arrowRotationSettings === 0 ? 90 : 0);
  };

  return (
    <ImageBackground
      source={require("../assets/photo-background.png")}
      style={styles.background}
    >
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: isDarkMode
              ? "rgba(0, 0, 0, 0.7)"
              : "rgba(0, 66, 126, 0.7)",
          },
        ]}
      >
        <Image
          source={require("../assets/user-profile.png")}
          style={styles.profileImage}
        />
        <Text style={styles.profileText}>Christian Paasa</Text>
        <Text style={styles.subText}>Joined 1 year ago</Text>

        <Text style={styles.sectionHeader}>Profile</Text>
        <View style={styles.row}>
          <Image
            source={require("../assets/profile.png")}
            style={styles.icon}
          />
          <Text style={styles.label}>Manage User</Text>
          <TouchableOpacity onPress={rotateArrowProfile}>
            <Image
              source={require("../assets/arrow.png")}
              style={[
                styles.arrow,
                { transform: [{ rotate: `${arrowRotationProfile}deg` }] },
              ]}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeader}>Settings</Text>
        <View style={styles.row}>
          <Image source={require("../assets/bell.png")} style={styles.icon} />
          <Text style={styles.label}>Notifications</Text>
          <TouchableOpacity onPress={rotateArrowSettings}>
            <Image
              source={require("../assets/arrow.png")}
              style={[
                styles.arrow,
                { transform: [{ rotate: `${arrowRotationSettings}deg` }] },
              ]}
            />
          </TouchableOpacity>
        </View>

        {arrowRotationSettings === 90 && (
          <View style={styles.subMenu}>
            <Text style={styles.subOption}>Enable Notifications</Text>
            <Switch onValueChange={toggleNotif} value={isNotifEnabled} />
          </View>
        )}

        <View style={styles.row}>
          <Image source={require("../assets/moon.png")} style={styles.icon} />
          <Text style={styles.label}>Dark Mode</Text>
          <Switch
            onValueChange={toggleDarkMode}
            value={isDarkMode}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
          />
        </View>

        <TouchableOpacity
          style={styles.signOutButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 40,
    justifyContent: "flex-start",
    backgroundColor: "rgba(0, 66, 126, 0.7)",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 10,
  },
  profileText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  subText: {
    fontSize: 14,
    textAlign: "center",
    color: "white",
    marginBottom: 30,
  },
  sectionHeader: {
    fontSize: 20,
    color: "white",
    marginBottom: 10,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  label: {
    flex: 1,
    fontSize: 18,
    color: "white",
  },
  arrow: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  subMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 40,
    marginBottom: 10,
    marginRight: 20,
  },
  subOption: {
    fontSize: 16,
    color: "white",
    marginRight: 20,
  },
  signOutButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 40,
  },
  signOutText: {
    color: "white",
    fontSize: 16,
  },
});

export default ProfileScreen;
