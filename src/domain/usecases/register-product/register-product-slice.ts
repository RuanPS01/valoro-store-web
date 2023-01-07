import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../main/store';
import { RegisterProductRequest } from './interfaces/register-product-request';
import { RegisterProductState } from './interfaces/register-product-state';
import { registerProduct } from './register-product-api';

export const registationProduct = createAsyncThunk(
  'registredProduct/registationProduct', 
  async (bodyAndHeader: RegisterProductRequest) => {
    alert(bodyAndHeader.header.token.toString());
    const response = await registerProduct(bodyAndHeader);
    return response.data;
  }
);

const initialState: RegisterProductState = {
  registredProduct: undefined,
  status: 'idle',
};

export const registerProductSlice = createSlice({
  name: 'registredProduct',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(registationProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registationProduct.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.registredProduct = payload;
      })
      .addCase(registationProduct.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectRegistredProduct = (state: RootState) => state.registredProduct;

export default registerProductSlice.reducer