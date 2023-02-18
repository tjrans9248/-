import { createSlice } from '@reduxjs/toolkit';

export const productData = createSlice({
  name: 'productData',
  initialState: {
    value: [],
  },
  reducers: {
    getProductData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getProductData } = productData.actions;

export default productData.reducer;
