import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
  },[]);

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image 
                source={require('../assets/images/adaptive-icon.png')}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View>
                <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                <Text className="font-bold text-xl">Current Location</Text>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
