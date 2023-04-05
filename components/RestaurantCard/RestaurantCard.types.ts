import { RESTAURANT_PATH } from '../../constants';

export interface RestaurantCardProps {
  id: number;
  imageUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  shortDescription: string;
  dishes: Array<string>;
  long?: number;
  lat?: number;
}
