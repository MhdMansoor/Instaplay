import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./features/navbarSlice";
import userSlice from "./features/loginSlice";
import homeSlice from "./features/homeSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    user: userSlice,
    home: homeSlice,
  },
});
