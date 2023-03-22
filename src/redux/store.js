import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todo";

export const Store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
