import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../main/store';
import { LoginRequest } from './interfaces/login-request';
import { LoginState } from './interfaces/login-state';
import { loginRequest } from './login-api';

export const loginUser = createAsyncThunk(
  'userAccess/loginUser', 
  async (body: LoginRequest) => {
    const response = await loginRequest(body);
    return response.data;
  }
);

const initialState: LoginState = {
  userAccess: undefined,
  status: 'idle',
};

export const loginUserSlice = createSlice({
  name: 'userAccess',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.userAccess = payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectUserAccess = (state: RootState) => state.userAccess;

export default loginUserSlice.reducer