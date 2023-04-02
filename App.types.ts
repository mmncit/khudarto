import { RestaurantCardProps } from './components/RestaurantCard/RestaurantCard.types';
import { HOME_PATH, RESTAURANT_PATH } from './constants';

export type RootStackParamList = {
  [HOME_PATH]: undefined;
  [RESTAURANT_PATH]: RestaurantCardProps | undefined;
};
