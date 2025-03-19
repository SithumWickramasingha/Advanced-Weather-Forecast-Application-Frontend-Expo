import * as React from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import NotificationHeader from './NotificationHeader';
import NotificationMessages from './NotificationMessages';
import NavigationBar from './NavigationBar';
import { LinearGradient } from 'expo-linear-gradient';

const NotificationHome = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={["#024E4E", "rgb(62, 215, 139)"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text>
        <NotificationHeader />
        <NotificationMessages/> 
        {/* <NavigationBar/> */}
      </Text>
      </LinearGradient>
    </View>
  );
};

export default NotificationHome;

const styles = StyleSheet.create({
  container: {},
  scrollContent:{
    paddingBottom:100,
    paddingTop:10
  }
});
