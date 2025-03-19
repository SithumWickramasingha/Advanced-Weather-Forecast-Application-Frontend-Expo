import { notificationAsync } from 'expo-haptics';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/_layout';

type HeaderNavigationProp = NativeStackNavigationProp<RootStackParamList,"WeatherHomePage">;

const NotificationHeader = () => {

  const navigation = useNavigation<HeaderNavigationProp>();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.profile}>
        <Image source={require("../assets/profile.jpg")}
        style={styles.profileIcon}/>
      </View>

      <View>
        <Text style={styles.notifyHeader}>NOTIFICATIONS</Text>
      </View>

      <TouchableOpacity 
      onPress={() => navigation.navigate("WeatherHomePage")}>
        <View>
          <Image source={require('../assets/back.png')}
          style={styles.icon}/>
        </View>
      </TouchableOpacity>
    
    </SafeAreaView>
  );
};

export default NotificationHeader;

const styles = StyleSheet.create({
  container:{
    marginTop:30
  },
  profile: {
    flexDirection:'row',
    justifyContent:'flex-end',
    width:'100%',
    paddingTop:48,
    paddingRight:13,
    elevation:30,
  },
  profileIcon:{
    width:50,
    height:50,
    borderRadius:30,
  },
  notifyHeader:{
    justifyContent:'center',
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',
    fontStyle:'italic',
  },
  icon:{
    width:40,
    height:40,
    tintColor:'#fff',
    left:15,
    bottom:70,
    elevation:12
  },
  clearAll:{
    fontStyle:'italic',
    color:'#fff',
    fontSize:15,
    textDecorationLine:'underline',
    textAlign:'right',
    right:20,
    fontWeight:'500'
  }
});
