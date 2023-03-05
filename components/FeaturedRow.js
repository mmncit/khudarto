import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards  */}
        <RestaurantCard
          id={1}
          imageUrl="https://cdn.stocksnap.io/img-thumbs/960w/food-burger_WYL5KWIPUD.jpg"
          title="Burger Mama"
          rating={4.5}
          genre="Fast Food"
          address="4928 Dalton Drive NW"
          shortDescription="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={2}
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Indian_-_Food.jpg/1599px-Indian_-_Food.jpg?20150605061809"
          title="Cinnamon"
          rating={4.5}
          genre="Indian"
          address="102 Barlow Trail NE"
          shortDescription="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
