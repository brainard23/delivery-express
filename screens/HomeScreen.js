import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";
import {
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 justify-between">
        <Image
          source={require("../assets/images/adaptive-icon.png")}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#000000" />
          </Text>
        </View>
        <UserIcon size={35} color="#000000" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={25} />
          <TextInput
            placeholder="Look for Restaurants"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon color="#000000" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
