import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { DishRowProps } from './DishRow.types';
import { styles } from './DishRow.styles';
import { currencyFormat } from './utils';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';

export function DishRow({ id, name, description, price, imageUrl }: DishRowProps) {
  const [isPressed, setIsPressed] = React.useState(false);
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
            <TouchableOpacity>
              <MinusCircleIcon color="#00CCBB" size={30} />
            </TouchableOpacity>
            <Text style={styles.textColor}>0</Text>
            <TouchableOpacity>
              <PlusCircleIcon color="#00CCBB" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

export default DishRow;
