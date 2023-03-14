import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { CategoryCard } from './CategoryCard';

export function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingBottom: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator
    >
      <CategoryCard imageUrl="https://reactnative.dev/img/tiny_logo.png" title="Testing 1" />
      <CategoryCard imageUrl="https://reactnative.dev/img/tiny_logo.png" title="Testing 2" />
      <CategoryCard imageUrl="https://reactnative.dev/img/tiny_logo.png" title="Testing 3" />
    </ScrollView>
  );
}
