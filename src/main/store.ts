import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import loginReducer from '../domain/usecases/login/login-slice';
import registerUserReducer from '../domain/usecases/register-user/register-user-slice';

export const store = configureStore({
  reducer: {
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