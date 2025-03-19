import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import messaging from "@react-native-firebase/messaging";
import * as Address from "expo-location";
import axios from 'axios';
import Toast from 'react-native-toast-message';

const GreetingHeader = ({ navigation }) => {

  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }

  // useEffect(() => {
  //   if(requestUserPermission()){

  //     // return fcm token for the device
  //     messaging().getToken().then(token => {
  //       console.log(token);
  //     });
  //   }else{
  //     console.log("Failed token status");
  //   }
  // },[])

  const [loading, setLoading] = useState(false);

  const getLocationAndSend = async () => {
    setLoading(true);

    //request location permission
    const {status} = await Address.requestForegroundPermissionsAsync();

    if(status !== "granted"){
      Alert.alert("Permission Denied", "We need location access to fetch weather data.");
      console.log("Permission Denied", "We need location access to fetch weather data.");
      setLoading(false);
      return;
    }

    //get location
    const location = await Address.getCurrentPositionAsync({});
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;


    //send location and FCM token to backend using AXIOS

    try{
      const response = await axios.post("http://192.168.68.11:8080/api/weather/location",{
        latitude,
        longitude,
      });


      
      console.log("Weather Data",JSON.stringify(response.data));
      Toast.show({
        type:'success',
        text1:'✅Location Data sent',
        position:'bottom',
        visibilityTime:2000,
        autoHide:true,
      });
      handleNavigation();

    }catch(error){
      // Alert.alert("Error","Failed to send location data.")
      console.log("Error","Failed to send location data.")
      Toast.show({
        type:'error',
        text1:'Error',
        text2:'Failed to send location data.',
        position:'bottom',
        visibilityTime:2000,
        autoHide:true,
      });
    }finally{
      setLoading(false);
    }


  }
  
  const handleNavigation = async () => {
    await AsyncStorage.setItem("hasSeenGreeting", "true"); // Store flag
    navigation.replace("WeatherHomePage"); // Navigate to home page
  };

  return (
    
    <SafeAreaView>
      
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("../assets/weather.png")} style={styles.icon} />
          <Text style={styles.headerText}>Weather Forecasting</Text>
        </View>

        

        <View style={styles.current}>
          <TouchableOpacity onPress={getLocationAndSend} disabled={loading}>
            <Text style={styles.text}>{loading ? "Fetching...." : "Use Current Location"}</Text>
            <Text style={styles.para}>
              Automatically fetches your current GPS location using your phone’s built-in GPS.
            </Text>
            
          </TouchableOpacity>
        </View>

        {/* <View style={styles.current}>
          <TouchableOpacity onPress={handleNavigation}>
            <Text style={styles.text}>Select On Map</Text>
            <Text style={styles.para}>
              Opens Google Maps, allowing you to manually pick a location by tapping on the map.
            </Text>
          </TouchableOpacity>
        </View> */}
        
      </View>
      <Toast/>
      
    </SafeAreaView>
  );
};

export default GreetingHeader;


const styles = StyleSheet.create({
  container: {
    textAlign:'center',
    justifyContent:'center',
    width:'100%',
    
  },
  header:{
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    // marginTop:100 
  },
  headerText:{
    color:'#fff',
    fontSize:30,
    fontWeight:'bold',
    padding:20
  },
  icon:{
    
  },
  current:{
    padding:20,
    borderWidth:2,
    borderRadius:20,
    marginHorizontal:20,
    justifyContent:'space-between',
    marginVertical:30,
    borderColor:'purple',
    
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    color:'#E6B33C',
    marginBottom:20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  para:{
    fontWeight:'bold',
    textAlign:'center',
    opacity:0.3
  }
});
