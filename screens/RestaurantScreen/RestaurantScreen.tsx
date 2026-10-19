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
import DishRow from '../../components/DishRow/DishRow';
import { BasketPopup } from '../../components/BasketPopup/BasketPopup';

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
    <>
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
          <DishRow
            id={1}
            name="Biriyani"
            description="Biryani is a classic South Asian dish that is beloved for its aromatic blend of spices and tender, flavorful rice. This traditional one-pot meal is typically made with long-grain rice that is seasoned with fragrant spices like cardamom, cinnamon, cloves, and bay leaves."
            price={9.99}
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/2560px-%22Hyderabadi_Dum_Biryani%22.jpg"
          />
          <DishRow
            id={2}
            name="Sushi"
            description="Sushi is a beloved Japanese dish that has captured the hearts and taste buds of people all over the world. This dish typically consists of small bite-sized portions of seasoned sushi rice, combined with a variety of fresh seafood, vegetables, and other complementary ingredients."
            price={34}
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Various_sushi%2C_beautiful_October_night_at_midnight.jpg/1920px-Various_sushi%2C_beautiful_October_night_at_midnight.jpg"
          />
          <DishRow
            id={3}
            name="test dish"
            description="this is a description"
            price={1000}
            imageUrl="https://reactnative.dev/img/tiny_logo.png"
          />
        </View>
      </ScrollView>
      <BasketPopup />
    </>
  );
}
