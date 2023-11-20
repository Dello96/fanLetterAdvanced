import { createSlice } from "@reduxjs/toolkit";
import letters from "../components/fakeData";

const letterSlice = createSlice({
  name: "letter",
  initialState: {
    letters: letters,
  },
  reducers: {},
});

export const {} = letterSlice.actions;

export const letterActionCreators = {};
export const letterReducer = letterSlice.reducer;