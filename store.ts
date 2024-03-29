import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './features/basketSlice';

export default configureStore({
  reducer: {
    basket: basketReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
