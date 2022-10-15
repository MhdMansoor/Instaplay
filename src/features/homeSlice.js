import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  movies: [],
  page: 1,
  totalPages: null,
  searchTerm: "",
};

export const fetchMovies = createAsyncThunk("/fetch-movies", async () => {
  let response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=8ec065dc5c7fd191cd99ead2b741b51f&language=en-US&page=1`
  );
  let data = response.data;
  return data;
});

export const searchMovies = createAsyncThunk(
  "/search-movies",
  async (searchTerm) => {
    let response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=8ec065dc5c7fd191cd99ead2b741b51f&language=en-US&query=${searchTerm}&include_adult=true`
    );
    let data = response.data;
    console.log(data);
    return data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: {
    [fetchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload.results;
      state.isLoading = false;
      state.page = action.payload.page;
      state.totalPages = action.payload.totalPages;
    },
    [fetchMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMovies.rejected]: (state) => {
      state.isLoading = false;
      state.movies = [];
    },
    [searchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload.results;
      state.isLoading = false;
      state.page = action.payload.page;
      state.totalPages = action.payload.totalPages;
    },
    [searchMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [searchMovies.rejected]: (state) => {
      state.isLoading = false;
      state.movies = [];
    },
  },
});

export default homeSlice.reducer;
