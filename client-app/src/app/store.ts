import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import dogeCounterReducer from "../views/doge-counter/doge-counter-slice";
import loginReducer from "../views/login/login-slice";
import { dogsApiSlice } from "../views/dogs/dogs-slice";
import { roleFamilySlice } from "../views/dogs/grpc-poc"


export const store = configureStore({
  reducer: {
    dogeCounter: dogeCounterReducer,

    login: loginReducer,
    // Add the generated reducer as a specific top-level slice
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
    [roleFamilySlice.reducerPath]: roleFamilySlice.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(dogsApiSlice.middleware, roleFamilySlice.middleware),
});


// for type safety
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
