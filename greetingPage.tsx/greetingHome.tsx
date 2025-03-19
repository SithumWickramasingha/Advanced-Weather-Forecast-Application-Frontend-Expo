import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GreetingHeader from "./GreetingHeader";

const GreetingHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#024E4E", "rgb(20, 133, 77)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      >
        <GreetingHeader navigation={navigation} />
      </LinearGradient>
    </View>
  );
};

export default GreetingHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
