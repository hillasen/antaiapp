import React from "react";
import {StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';


export default function Loading() {

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>로딩중..</Text>
        </View>
        <StatusBar style="auto" />
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
    },
    text: {
      paddingTop: 30,
      textAlign: "center",
      color: "#2c2c2c",
      fontSize: 30
    }
  });