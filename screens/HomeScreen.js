import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={require('../assets/logo.avif')}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />
        {/* Featured rows */}
        <FeaturedRow id="1" title="Featured" description="Paid placements from our partners" />
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyone been enjoying these juicy discounts!"
        />
        <FeaturedRow
          id="3"
          title="Offers near me"
          description="Paid placements from our partners"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
