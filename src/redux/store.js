import { configureStore } from "@reduxjs/toolkit";
import { letterReducer } from "./letterSlice";
import { memberReducer } from "./memberslice";

const store = configureStore({
  reducer: {
    member: memberReducer,
    letter: letterReducer,
  },
});

export default store;
