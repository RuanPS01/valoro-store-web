import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../main/store';
import { RegisterUserRequest } from './interfaces/register-user-request';
import { RegisterUserState } from './interfaces/register-user-state';
import { loginRequest } from './register-userin-api';

export const registerUser = createAsyncThunk(
  'userData/registerUser', 
  async (body: RegisterUserRequest) => {
    const response = await loginRequest(body);
    return response.data;
  }
);

const initialState: RegisterUserState = {
  userData: undefined,
  status: 'idle',
};

export const registerUserSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.userData = payload;
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectUserData = (state: RootState) => state.userAccess;

export default registerUserSlice.reducer