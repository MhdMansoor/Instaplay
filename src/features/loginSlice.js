import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  username: null,
  token: null,
};

export const authenticateUser = createAsyncThunk(
  "/users/authenticateUser",
  async (authObj) => {
    let response = await axios.post(
      "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=8ec065dc5c7fd191cd99ead2b741b51f",
      authObj
    );
    let newObj = {
      name: authObj.username,
      data: response.data,
    };

    return newObj;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isLogOutReducer: (state) => {
      state.username = null;
      state.token = null;
    },
  },
  extraReducers: {
    [authenticateUser.fulfilled]: (state, action) => {
      if (action.payload.data.success === true) {
        state.username = action.payload.name;
        state.token = action.payload.data.request_token;
        state.isLoading = false;
      }
    },
    [authenticateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [authenticateUser.rejected]: (state) => {
      state.isLoading = false;
      state.username = null;
      state.token = null;
    },
  },
});

export const { isLogOutReducer } = userSlice.actions;

export default userSlice.reducer;
