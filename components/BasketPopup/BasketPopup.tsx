import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBasketTotal, selectedBasketItems } from '../../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import { styles } from './BasketPopup.styles';

export function BasketPopup() {
  const items = useSelector(selectedBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.container}>
        <Text>BasketPopup</Text>
      </TouchableOpacity>
    </View>
  );
}
