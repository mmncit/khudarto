import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { RestaurantCard } from '../RestaurantCard';
import { FeaturedRowProps } from './FeaturedRow.types';
import { styles } from './FeaturedRow.styles';
import Constants from 'expo-constants';

export function FeaturedRow({ id, title, description, featuredCategory }: FeaturedRowProps) {
  const { burgerImageUrl, indianFoodImageUrl, japaneseFoodImageUrl, chypriotesFoodUrl } =
    Constants.expoConfig.extra;

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text style={styles.descriptionText}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollViewContainer}
      >
        {/* RestaurantCards  */}
        <RestaurantCard
          id={1}
          imageUrl={burgerImageUrl}
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
          imageUrl={indianFoodImageUrl}
          title="Cinnamon"
          rating={4.5}
          genre="Indian"
          address="102 Barlow Trail NE"
          shortDescription="Welcome to our Indian cuisine restaurant, where we invite you to indulge in the vibrant flavors and spices of India. Our menu offers a wide variety of authentic dishes, from classic curries to tandoori specialties and aromatic biryanis. With a focus on using only the freshest and finest ingredients, our skilled chefs take pride in creating delicious, flavorful meals that are sure to satisfy. Whether you're a fan of vegetarian cuisine or a meat lover, we have something for everyone. Come and experience the rich culture and taste of India at our restaurant today!"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={4}
          imageUrl={chypriotesFoodUrl}
          title="Chypriotes"
          rating={4.5}
          genre="Chypriotes"
          address="10 Dalton Drive NW"
          shortDescription="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={3}
          imageUrl={japaneseFoodImageUrl}
          title="Fusion Sushi"
          rating={4.5}
          genre="Japanese"
          address="202 Crowchild Trail NW"
          shortDescription="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
}
