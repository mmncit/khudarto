import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { BasketState } from './basketSlice.types';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      let basket = [...state.items];
      if (index >= 0) {
        basket.splice(index, 1);
      }
      //else {
      //     console.warn(`no product id ${action.payload.id} in basket`);
      //   }
      state.items = basket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectedBasketItems = (state: BasketState) => state.basket.items;

// export const selectBasketItemsWithId = (state, id) =>
//   state.basket.items.filter((item) => item.id === id);

export const selectBasketItemsWithId = (id: number) =>
  createSelector(selectedBasketItems, (items) => items.filter((item) => item.id === id));

export const selectBasketTotal = () =>
  createSelector(selectedBasketItems, (items) =>
    items.reduce((subtotal, item) => subtotal + item.price, 0)
  );

export default basketSlice.reducer;
