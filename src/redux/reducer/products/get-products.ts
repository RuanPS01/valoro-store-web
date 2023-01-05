import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetProductsResponse } from '../../../domain/usecases/product/interfaces/get-products-response';
import { Product } from '../../../domain/usecases/product/interfaces/product';

type Products = {
  products?: GetProductsResponse;
};

const INITIAL_STATE: Products = {
  products: undefined,
};

const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    changeProducts(state, action: PayloadAction<{ products: GetProductsResponse }>) {
      state.products = action.payload.products;
    },
  },
});

export const { changeProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
