import { configureStore } from '@reduxjs/toolkit';
import { productData } from '../store/sortSlice';

export default configureStore({
  reducer: {
    productData: productData.reducer,
  },
});
