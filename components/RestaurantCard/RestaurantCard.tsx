import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline';
import { styles } from './RestaurantCard.styles';
import { RestaurantCardProps } from './RestaurantCard.types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RESTAURANT_PATH } from '../../constants';
import { RootStackParamList } from '../../App.types';

export function RestaurantCard({
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}: RestaurantCardProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(RESTAURANT_PATH, {
          id,
          imageUrl,
          title,
          rating,
          genre,
          address,
          shortDescription,
          dishes,
          long,
          lat,
        });
      }}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.infoContainer}>
          <StarIcon color="green" fill="green" opacity={0.5} size={22} />
          <Text style={styles.text}>
            <Text style={styles.ratingColor}>{rating}</Text> . {genre}
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text style={styles.text}>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
