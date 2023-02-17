import { configureStore } from '@reduxjs/toolkit';
import { productData } from '../store/sortSlice';
import counterSlice from './counterSlice';

export default configureStore({
  reducer: {
    productData: productData.reducer,
    counter: counterSlice,
  },
});
