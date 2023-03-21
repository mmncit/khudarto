import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { DishRowProps } from './DishRow.types';
import { styles } from './DishRow.styles';
import { currencyFormat } from './utils';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../../features/basketSlice';

export function DishRow({ id, name, description, price, imageUrl }: DishRowProps) {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemIntoBasket = () => {
    dispatch(addToBasket({ id, name, description, price, imageUrl }));
  };

  const removeItemFromBasket = () => {
    if (items.length <= 0) {
      return;
    }
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity style={styles.root} onPress={() => setIsPressed(!isPressed)}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.textColor}>{description}</Text>
            <Text style={styles.currency}>{currencyFormat(price)}</Text>
          </View>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View style={styles.orderCountContainer}>
          <View style={styles.orderCount}>
            <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
              <MinusCircleIcon fill="#00CCBB" color="white" size={30} />
            </TouchableOpacity>
            <Text style={styles.textColor}>{items.length}</Text>
            <TouchableOpacity onPress={addItemIntoBasket}>
              <PlusCircleIcon fill="#00CCBB" color="white" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

export default DishRow;
