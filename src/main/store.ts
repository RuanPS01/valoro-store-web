import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import listProductsReducer from '../domain/usecases/list-products/list-products-slice';
import loginReducer from '../domain/usecases/login/login-slice';
import registerUserReducer from '../domain/usecases/register-user/register-user-slice';

export const store = configureStore({
  reducer: {
    listProducts: listProductsReducer,
    userAccess: loginReducer,
    userData: registerUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;