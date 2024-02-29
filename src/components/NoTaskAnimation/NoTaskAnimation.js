import React from "react";
import LottieView from "lottie-react-native";
import { View, Text } from "react-native";

export default function Animation() {
  return (
    <View style={{ flex: 1 }}>
      <LottieView
        source={require("../../../assets/task.json")}
        style={{ width: 400, height: 400 }}
        autoPlay
        loop
      />
      <Text style={{margin:10,textAlign:'center',fontSize:20 , fontStyle:'italic',fontWeight:'400'}}>Add a task to get started.</Text>
    </View>
  );
}