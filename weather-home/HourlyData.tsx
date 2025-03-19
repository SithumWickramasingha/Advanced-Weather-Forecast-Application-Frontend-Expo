import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

const HourlyData = ({ hourlyData }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.hourly}>
          <Image source={require("../assets/time.png")} style={styles.timeIcon} />
          <Text style={styles.hourText}>Hourly Weather</Text>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {hourlyData.map((item, index) => (
            <View style={styles.time} key={index}>
              <Text style={styles.text}>{item.time}</Text>
              <Image source={require("../assets/cloud.png")} style={styles.icon} />
              <Text style={styles.temp}>{item.temp}°</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HourlyData;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#85A98A', // Box color
    paddingVertical: 20,
    borderRadius: 18,
    marginHorizontal: 20,
    elevation: 10,
    overflow: 'hidden', // Ensures content stays within the box
    bottom:15
  },
  scrollContainer: {
    flexDirection: 'row', 
    paddingHorizontal: 10, // Padding inside scroll area
    
  },
  time: {
    marginHorizontal: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginVertical: 5,
  },
  temp: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
  },
  hourly:{
    flexDirection:'row',
    width:'95%',
    borderBottomWidth:1,
    borderColor:'grey',
    bottom:10,
    left:10,
    opacity:0.3
  },
  timeIcon:{
    width:20,
    height:20,
    //opacity:0.3,
  },
  hourText:{
    //opacity:0.3
  }
});
