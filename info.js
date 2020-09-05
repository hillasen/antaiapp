import React from "react";
import {StyleSheet, Button, Text, View, FlatList , Dimensions} from "react-native";
import { StatusBar } from 'expo-status-bar';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'


export default function Info({ data }) {
  var count = new Array();
  for(var i=1; i<=data['ant'].length ; i++){
    count[i] = String(i);
  }
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.title_container}>
          <Text style={styles.title}>현재 개미수</Text>
          </View>
          <Text style={styles.text}>{data['ant'][data['ant'].length-1]}마리</Text>
          <Text style={styles.text}>현재 액션:  {( data['run'][data['run'].length-1] == 1 )? "초음파 On" : "초음파 Off"}</Text>
          <View style={styles.bef_title_container}>
          <Text style={styles.bef_title}>이전 개미수</Text>
          </View>
          <Text style={styles.text}>{data['ant'][data['ant'].length-2]}마리</Text>
          <Text style={styles.text}>이전 액션:  {( data['run'][data['run'].length-2] == 1 )? "초음파 On" : "초음파 Off"}</Text>
        </View>
        <LineChart
    data={{
      labels: count,
      datasets: [{
        data: data['ant']
      }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={300}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#240d00',
      backgroundGradientTo: '#f78a0c',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
        color: "#421802"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      marginTop: 30
    }}
  />
        <StatusBar style="light" />
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#113615"
    },
    
    title_container: {
      marginTop: 30,
      height: 50,
      borderColor: "white",
      backgroundColor: "#ffd138"    
    },
    bef_title_container: {
      marginTop: 30,
      height: 50,
      borderColor: "white",
      backgroundColor: "#93c961"    
    },
    text: {
      paddingTop: 30,
      textAlign: "center",
      color: "white",
      fontSize: 30
    },
    title: {
      textAlign: "center",
      color: "#113615",
      fontSize: 30,
      fontWeight: "bold"
    },
    bef_title: {
      textAlign: "center",
      color: "#113615",
      fontSize: 30,
      fontWeight: "bold"
    },
    button: {
      paddingTop: 50
    }
  });