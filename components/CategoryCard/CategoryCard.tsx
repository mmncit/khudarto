import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './CategoryCard.styles';
import { CategoryCardProps } from './CategoryCard.types';

export function CategoryCard({ imageUrl, title }: CategoryCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
