import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import client, { urlFor } from "../sanity";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'category'] 
    `
      )
      .then((data) => {
        setCategory(data);
      });
  }, []);
console.log(category)
  return (
    <ScrollView
      overScrollMode="never"
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {category.map(categories => (
      <CategoryCard id={categories._id} key={categories._id} title={categories.name} imgUrl={urlFor(categories.image).width(200).url()} />

      ))}
    
    </ScrollView>
  );
};

export default Categories;
