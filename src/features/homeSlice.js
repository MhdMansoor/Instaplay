import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  movies: [],
  page: 1,
  totalPages: null,
  heading: "",
};

export const fetchMovies = createAsyncThunk("/fetch-movies", async (page) => {
  let response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=8ec065dc5c7fd191cd99ead2b741b51f&language=en-US&page=${page}`
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
    let data = { searchTerm: searchTerm, response: response.data };
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
      state.totalPages = action.payload.total_pages;
      state.heading = "Trending";
    },
    [fetchMovies.pending]: (state) => {
      state.isLoading = true;
      state.heading = "Fetching movies...";
    },
    [fetchMovies.rejected]: (state) => {
      state.isLoading = false;
      state.movies = [];
      state.heading = "No data found";
    },
    [searchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload.response.results;
      state.isLoading = false;
      state.page = action.payload.response.page;
      state.totalPages = action.payload.response.totalPages;
      if (action.payload.response.results.length === 0) {
        state.heading = "No data found";
      } else {
        state.heading = `search results for ${action.payload.searchTerm}`;
      }
    },
    [searchMovies.pending]: (state) => {
      state.isLoading = true;
      state.heading = "Fetching movies...";
    },
    [searchMovies.rejected]: (state) => {
      state.isLoading = false;
      state.movies = [];
      state.heading = "No data found";
    },
  },
});

export default homeSlice.reducer;
