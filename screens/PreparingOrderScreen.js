import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native";
import * as Progress from "react-native-progress";
const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('DeliveryScreen')
    }, 4000)
  }, [])

  return (
    <SafeAreaView className="bg-[#DCD2CC] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/images/cooking.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Preparing your Order...
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
