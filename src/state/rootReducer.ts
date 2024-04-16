import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

const rootReducer = combineReducers({
  counterReducer: counterReducer
});

export default rootReducer;
