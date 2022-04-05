import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import loginReducer from "../views/login/login-slice";
import { dogsApiSlice } from "../views/dogs/dogs-slice";
export const store = configureStore({
  reducer: {
    login: loginReducer,
    // Add the generated reducer as a specific top-level slice
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(dogsApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
