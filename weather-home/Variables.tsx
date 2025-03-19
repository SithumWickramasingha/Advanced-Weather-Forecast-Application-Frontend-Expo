import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView,Image } from 'react-native';



const Variables = ({humidity, soilTemp, precipitation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.grid}>

        <View style={styles.box}>
          <Image source={require('../assets/humidity.png')} style={styles.icon}/>
          <Text style={styles.text}>HUMIDITY</Text>
          <Text style={styles.value}>{humidity ? humidity : "0"} %</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/soilTemp.png')} style={styles.icon}/>
          <Text style={styles.text}>SOIL TEMP</Text>
          <Text style={styles.soilValue}>{soilTemp ? soilTemp : "0"} °C</Text>
          <Text style={styles.para}>Influencing plant growth and microbial activity.</Text>
        </View>
        
        <View style={styles.box}>
          <Image source={require('../assets/precipitation.png')} style={styles.icon}/>
          <Text style={styles.text}>PRECIPITATION</Text>
          <Text style={styles.prepValue}>{precipitation ? precipitation : "0"} mm</Text>
          <Text style={styles.now}>Now</Text>
          <Text style={styles.expect}>00 mm expected next hour</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Variables;

const styles = StyleSheet.create({
  container: {
    //zIndex:10,
    width:'auto',
    alignItems:'center',
    
  },
  grid:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    marginTop:10,
    marginHorizontal:20,
  },
  icon:{
    width:25,
    height:25,
    tintColor:'black'

  },
  box:{
    backgroundColor:'#85A98A',
    padding:10,
    borderRadius:12,
    width:'45%',
    height:'55%',
    marginBottom: 15,
    elevation:20,
    paddingBottom:-10,
  },
  text:{
    color:'#F5F5F5',
    fontWeight:'bold',
    left:30,
    bottom:25,
  },
  value:{
    color:'#E6B33C',
    fontWeight:'400',
    fontSize:40,
    left:10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  soilValue:{
    color:'#E6B33C',
    fontSize:30,
    bottom:10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  para:{
    color:'black',
    fontSize:10,
    fontWeight:'bold',
    opacity:0.3,
  },
  prepValue:{
    color:'#E6B33C',
    fontSize:25,
    bottom:20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  now:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:18,
    bottom:20
  },
  expect:{
    opacity:0.3,
    fontWeight:'bold',
    bottom:17,
  }

});
