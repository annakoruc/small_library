import { combineReducers, configureStore } from "@reduxjs/toolkit";

import booksReducer from "./books/booksSlice";

const reducer = combineReducers({ books: booksReducer });

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
