import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WeatherHomePage from "@/weather-home/WeatherHomePage";
import NotificationHome from "@/weather-notification/NotificationHome";
import GreetingHome from "@/greetingPage.tsx/greetingHome";
import messaging from '@react-native-firebase/messaging';
import { getMessaging } from "@react-native-firebase/messaging";
export type RootStackParamList = {
  GreetingHome: undefined;
  WeatherHomePage: undefined;
  NotificationHome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppLayout = () => {

  const [hasSeenGreeting, setHasSeenGreeting] = useState<boolean | null>(null);

  useEffect(() => {
    const checkGreetingStatus = async () => {
      const seen = await AsyncStorage.getItem("hasSeenGreeting");
      setHasSeenGreeting(seen === "false");
    };
    checkGreetingStatus();
  }, []);

  if (hasSeenGreeting === null) return null; // Prevents rendering until AsyncStorage check is complete

  return (
    // <NavigationContainer>
      <Stack.Navigator
        initialRouteName={hasSeenGreeting ? "WeatherHomePage" : "GreetingHome"}
        screenOptions={{ headerShown: false }}
      >
        {!hasSeenGreeting && <Stack.Screen name="GreetingHome" component={GreetingHome} />}
        <Stack.Screen name="WeatherHomePage" component={WeatherHomePage} />
        <Stack.Screen name="NotificationHome" component={NotificationHome} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AppLayout;
