import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isSearch: false,
  searchTerm: "",
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    isLoggedInReducer: (state) => {
      state.isLoggedIn = true;
    },
    isSearchReducer: (state) => {
      state.isSearch = true;
    },
    logReducer: (state) => {
      state.isLoggedIn = false;
    },
    searchReducer: (state) => {
      state.isSearch = false;
    },
  },
});

export const { isLoggedInReducer, isSearchReducer, logReducer, searchReducer } =
  navbarSlice.actions;

export default navbarSlice.reducer;
