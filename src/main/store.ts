import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import listProductsReducer from '../domain/usecases/list-products/list-products-slice';

export const store = configureStore({
  reducer: {
    listProducts: listProductsReducer,
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