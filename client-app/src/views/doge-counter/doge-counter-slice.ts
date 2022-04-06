import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DogeCounterState {
  value: number;
}

const initialState: DogeCounterState = {
  value: 0,
};

export const dogeCounterSlice = createSlice({
  name: "dogeCounter",
  initialState,
  reducers: {
    // The `reducers` field lets us define reducers and generate associated actions
    // standard reducer logic, with auto-generated action types per reducer
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value ++;
    },
    decrement: state => {
      state.value --;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  dogeCounterSlice.actions;

export default dogeCounterSlice.reducer;
