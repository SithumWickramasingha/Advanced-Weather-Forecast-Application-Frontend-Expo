import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView ,Image} from 'react-native';



const CurrentCondition = ({currentTemp, weathercode}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.temp}>
          <View>
            <Text style={styles.mainTemp}>{currentTemp ? currentTemp : "0"}</Text>
          </View>
          <View>
            <Image source={require("../assets/celcius.png")}
            style={styles.tempIcon}/>
          </View>
        </View>
        <Text style={styles.weatherCode}>{weathercode ? weathercode : "Loading feels like..."}</Text>
    </SafeAreaView>
  );
};

export default CurrentCondition;

const styles = StyleSheet.create({
  container: {
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    
  },
  temp:{
    bottom:10,
    flexDirection:'row',
    left:20
  },
  mainTemp:{
    fontSize:100,
    color:'#fff',
    fontWeight:'300'
  },
  tempIcon:{
    width:35,
    height:35,
  },
  weatherCode:{
    fontSize:20,
    color:'#8C8C8C',
    fontWeight:'bold',
    bottom:30,
  }
});
