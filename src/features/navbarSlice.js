import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isSearch: false,
  searchTerm: "",
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
});

export default navbarSlice.reducer;
