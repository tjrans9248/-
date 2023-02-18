import { configureStore } from '@reduxjs/toolkit';
import { productData } from './sortSlice';
import counterSlice from './counterSlice';

const store = configureStore({
  reducer: {
    productData: productData.reducer,
    counter: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
