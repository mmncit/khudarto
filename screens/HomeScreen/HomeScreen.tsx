import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ClockIcon,
} from 'react-native-heroicons/outline';
import { Categories, FeaturedRow } from '../../components';
import { styles } from './HomeScreen.styles';
import Constants from 'expo-constants';

export function HomeScreen() {
  console.log(Constants.expoConfig.extra.contactMessage);

  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
        <View style={styles.headerContainer}>
          <Text style={styles.deliveryText}>Deliver now!</Text>
          <Text style={styles.currentLocation}>
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <ClockIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View style={styles.searchContainer}>
        <View style={styles.magnifyingGlassContainer}>
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={35} color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView
        style={styles.featuredRowContainer}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />
        {/* Featured rows */}
        <FeaturedRow
          id={1}
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory=""
        />
        <FeaturedRow
          id={2}
          title="Tasty Discounts"
          description="Everyone been enjoying these juicy discounts!"
          featuredCategory=""
        />
        <FeaturedRow
          id={3}
          title="Offers near me"
          description="Paid placements from our partners"
          featuredCategory=""
        />
      </ScrollView>
    </SafeAreaView>
  );
}
