import * as React from 'react';
import { Text, View, StyleSheet , SafeAreaView, Image} from 'react-native';


const wind = ({speed, direction}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../assets/wind.png')}
          style={styles.icon}/>
          <Text style={styles.wind}>WIND</Text>
        </View>
        <View style={styles.windContainer}>
          <View style={styles.speedBox}>
            <Text style={styles.text}>Speed</Text>
            <Text style={styles.speed}>{speed ? speed : "0"} Km/h</Text>
          </View>

          <View style={styles.speedBox}>
            <Text style={styles.text}>Direction</Text>
            <Text style={styles.speed}>{direction ? direction : "loading...."}</Text>
          </View>
        </View>
        <Image source={require('../assets/compass.png')} style={styles.compass} />
      </View>
    </SafeAreaView>
  );
};

export default wind;

const styles = StyleSheet.create({
  container: {
    top:50,
    flexDirection:'row',
    //width:'100%',
    justifyContent:'space-between',
    backgroundColor:'#85A98A',
    padding:10,
    borderRadius:18,
    marginHorizontal:20,
    marginTop:10,
    marginBottom:30,
    elevation:20,
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  icon:{
    width:25,
    height:25,
    tintColor:'black',
    left:5
  },
  wind:{
    fontWeight:'bold',
    color:'#fff',
    left:10
  },
  windContainer:{
    //flexDirection:'row'

  },
  speedBox:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    top:25,
    marginVertical:5,
    
  },
  text:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:15,
    right:60,
    
  },
  speed:{
    color:'#E6B33C',
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height:1 },
    textShadowRadius: 4,

  },
  compass:{
    tintColor:'#fff',
    
  }
});
