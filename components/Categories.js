import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard title="test" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="test" imgUrl={"https://links.papareact.com/gn7"} />

      <CategoryCard title="test" imgUrl={"https://links.papareact.com/gn7"} />
      <CategoryCard title="test" imgUrl={"https://links.papareact.com/gn7"} />
      <CategoryCard title="test" imgUrl={"https://links.papareact.com/gn7"} />
      <CategoryCard title="test" imgUrl={"https://links.papareact.com/gn7"} />
    </ScrollView>
  );
};

export default Categories;
