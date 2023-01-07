import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../main/store';
import { ListProductsRequest } from './interfaces/list-products-request';
import { ListProductsState } from './interfaces/list-products-state';
import { getProductsRequest } from './list-products-api';

export const getProducts = createAsyncThunk(
  'products/getProducts', 
  async (params: ListProductsRequest) => {
    const response = await getProductsRequest(params);
    return response.data;
  }
);

const initialState: ListProductsState = {
  products: undefined,
  status: 'idle',
};

export const listProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.products = payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectProducts = (state: RootState) => state.listProducts;

export default listProductsSlice.reducer