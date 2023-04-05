import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBasketTotal, selectedBasketItems } from '../../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import { styles } from './BasketPopup.styles';
import { currencyFormat } from '../DishRow/utils';
import { BASKET_PATH } from '../../constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App.types';

export function BasketPopup() {
  const items = useSelector(selectedBasketItems);
  const basketTotal = useSelector(selectBasketTotal());
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigation.navigate(BASKET_PATH)} style={styles.container}>
        <Text style={styles.itemCountText}>{items.length}</Text>
        <Text style={styles.viewBasketText}>View Basket</Text>
        <Text style={styles.currencyText}>{currencyFormat(basketTotal)}</Text>
      </TouchableOpacity>
    </View>
  );
}
