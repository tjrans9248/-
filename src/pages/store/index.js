import { configureStore } from '@reduxjs/toolkit';
import { productList } from './slice';

const store = configureStore({
  reducer: {
    productList: productList.reducer,
  },
});

export default store;
