import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RestaurantScreenRouteProp } from './RestaurantScreen.types';
import { styles } from './RestaurantScreen.styles';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/outline';

export function RestaurantScreen() {
  const navigation = useNavigation();
  const {
    params: { id, imageUrl, title, rating, genre, address, shortDescription, dishes, long, lat },
  } = useRoute<RestaurantScreenRouteProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <TouchableOpacity onPress={navigation.goBack} style={styles.arrowLeftIconContainer}>
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View style={styles.restaurantContainer}>
        <View style={styles.restaurantChildContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.restaurantDescriptionContainer}>
            <View style={styles.restaurantPanelContainer}>
              <StarIcon color="green" fill="green" opacity={0.5} size={22} />
              <Text style={styles.textStyle}>
                <Text style={styles.ratingFontColor}>{rating} </Text> . {genre}
              </Text>
            </View>

            <View style={styles.restaurantPanelContainer}>
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text style={styles.textStyle}>Nearby . {address}</Text>
            </View>
          </View>
          <Text style={styles.shortDescription}>{shortDescription}</Text>
        </View>

        <TouchableOpacity style={styles.foodAllergyContainer}>
          <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
          <Text style={styles.foodAllergyText}> Have a food allergy?</Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.menuTitle}>Menu</Text>
        {/* DishRows */}
      </View>
    </ScrollView>
  );
}
