import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { RestaurantScreenRouteProp } from './RestaurantScreen.types';

export function RestaurantScreen() {
  const {
    params: { id, imageUrl, title, rating, genre, address, shortDescription, dishes, long, lat },
  } = useRoute<RestaurantScreenRouteProp>();
  return (
    <View>
      <Text>{title}</Text>
      <Text>RestaurantScreen</Text>
    </View>
  );
}
