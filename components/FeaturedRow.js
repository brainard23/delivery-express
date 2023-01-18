import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#000000" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        overScrollMode="never"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        alwaysBounceVertical={false}
        bounces={false}
      >
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Jap Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="Tasty japanese food"
          dishes={[]}
          long={20}
          lat={20}
        />
         <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Jap Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="Tasty japanese food"
          dishes={[]}
          long={20}
          lat={20}
        />
         <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Jap Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="Tasty japanese food"
          dishes={[]}
          long={20}
          lat={20}
        />
         <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Jap Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="Tasty japanese food"
          dishes={[]}
          long={20}
          lat={20}
        />
         <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Jap Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="Tasty japanese food"
          dishes={[]}
          long={20}
          lat={20}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
