
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
//import { RootStackParamList } from "../_layout"; // Import the type from _layout.tsx
import { RootStackParamList } from "@/app/_layout";

type HeaderNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "NotificationHome"
>;

const Header = ({location}) => {
  const navigation = useNavigation<HeaderNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.profile}>
        <Image
          source={require("../assets/profile.jpg")}
          style={styles.profileIcon}
        />
      </View>

      {/* Notification Icon with Navigation */}
      <TouchableOpacity
        style={styles.notification}
        onPress={() => navigation.navigate("NotificationHome")}
      >
        <Image
          source={require("../assets/notification.png")}
          style={styles.notificationIcon}
        />
      </TouchableOpacity>

      <View style={styles.locationField}>
        <Text style={styles.location}>
          {location ? location : "Loading location..."}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container:{
    marginTop:30
  },
  profile: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    paddingRight: 10,
    elevation: 30,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  notification: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    paddingTop: 20,
    paddingRight: 14,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#fff",
    tintColor: "#fff",
  },
  locationField: {
    borderBottomWidth: 1,
    borderColor: "#A2A0A0",
    bottom: 65,
    paddingLeft: 20,
    width: "75%",
    marginLeft: 20,
  },
  location: {
    color: "#A2A0A0",
    fontWeight: "bold",
  },
});