
import { Text, View, StyleSheet, ScrollView} from "react-native";
import Header from "./Header";
import CurrentCondition from "./CurrentCondition";
import HourlyData from "./HourlyData";
import Variables from "./Variables";
import Wind from "./wind";
import NavigationBar from "./NavigationBar";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import Toast from "react-native-toast-message";

const WEBSOCKET_URL = "ws://192.168.68.11:8080/ws";

function WeatherHomePage() {


  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [location, setLocation] = useState<String>("");
  const [hourlyData, setHourlyData ] = useState<{time: string; temp: number}[]>([]);
  const [currentTemp, setCurrentTemp] = useState<number>(0);
  const [weatherCode, setWeatherCode] = useState<String>("")
  const [humidity, setHumidity] = useState<number>(0);
  const [soilTemp, setSoilTemp] = useState<number>(0);
  const [precipitation, setPrecipitation] = useState<number>(0);
  const [windSpeed, setWindSpeed] = useState<number>(0);
  const [windDirection, setWindDirection] = useState<String>("");


  useEffect(() => {
    const socket = new WebSocket(WEBSOCKET_URL);

    socket.onopen = () => {
      console.log("✅ WebSocket Connected");
      Toast.show({
        type:'success',
        text1:'Connection Established',
        position:'top'
      })

    };

    socket.onmessage = (event) => {
      try{
        const receivedData = JSON.parse(event.data);

        if(receivedData.type === "weather_update" && Array.isArray(receivedData.data)){
          setWeatherData(receivedData);

          const now = new Date();

          const hours = now.getHours() % 12 || 12; // convert 0 to 12 for AM format
          const minutes = "00"; // set minutes to 00
          const period = now.getHours() >= 12 ? "PM" : "AM";
          const formattedTime = `${String(hours).padStart(2,"0")}:${minutes} ${period}`;

          const currentData = receivedData.data.find((entry: any[]) => entry[2].startsWith(formattedTime));

          // for(var i =0; i<16; i++){
          //   if(receivedData.data[i][2] === formattedTime){
          //     console.log(receivedData.data[i][2]);
          //   }
          // }
          //setLocation(receivedData.data[0][1]); // location
          

          if(currentData){
            console.log("currentData is true");
            setLocation(currentData[1])
            setCurrentTemp(currentData[3]);
            setWeatherCode(currentData[7]);
            setHumidity(currentData[4]);
            setSoilTemp(currentData[10]);
            setPrecipitation(currentData[5]);
            setWindSpeed(currentData[8]);
            setWindDirection(currentData[9])

            setHourlyData(receivedData.data.map((entry) => ({
              time: entry[2].replace(":00",""), 
              temp:entry[3]})))
          }else{
            console.log("current data is false")
            // console.log(currentData);
            //rconsole.log(currentHour);
          }
          

        }
      }catch(error){
        console.log("❌ Error parsing websocket message:", error);
      }
    };
    socket.onerror = (error) => {
      console.log("❌ Websocket Error:", error);
    };
    
    socket.onclose = () => {
      console.log("❌ WebSocket Disconnected");
    };

    return () => {
      socket.close();
    };


  }, []);


  return (
    <View style={styles.container}>
      <LinearGradient
      colors={["#024E4E", "rgb(20, 133, 77)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Toast/>
        <Header location={location}/>
        <CurrentCondition currentTemp={currentTemp} weathercode={weatherCode} />
        <HourlyData  hourlyData={hourlyData}/>
        <Variables humidity={humidity} soilTemp={soilTemp} precipitation={precipitation} />
        <Wind speed={windSpeed} direction={windDirection}/>
      </ScrollView>
      <NavigationBar />

      </LinearGradient>
    </View>
  );
}

export default WeatherHomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
    paddingTop: 10,
  },
});