import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { RestaurantCard } from '../RestaurantCard';
import { FeaturedRowProps } from './FeaturedRow.types';
import { styles } from './FeaturedRow.styles';
import Constants from 'expo-constants';

export function FeaturedRow({ id, title, description, featuredCategory }: FeaturedRowProps) {
  const burgerImageUrl: string = Constants.expoConfig.extra.burgerImageUrl;
  console.log({ Constants, burgerImageUrl });

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

        <RestaurantCard
          id={4}
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/5/54/Vin_et_gastronomie_chypriotes.jpg"
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
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Osechi_001.jpg/1920px-Osechi_001.jpg"
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
