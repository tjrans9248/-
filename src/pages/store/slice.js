import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const productList = createSlice({
  name: 'productLists',
  initialState,
  reducers: {
    showProductList(state, action) {
      state.value = action.payload;
    },
  },
});

export const { showProductList } = productList.actions;
export default productList.reducer;
