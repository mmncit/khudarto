import { RestaurantCardProps } from './components';
import { BASKET_PATH, HOME_PATH, RESTAURANT_PATH } from './constants';

export type RootStackParamList = {
  [HOME_PATH]: undefined;
  [RESTAURANT_PATH]: RestaurantCardProps | undefined;
  [BASKET_PATH]: undefined;
};
