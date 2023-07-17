import { createSlice } from "@reduxjs/toolkit";
import {
  showAllCountries,
  searchByCode,
  searchByRegion,
} from "./countriesAction";

const initialState = {
  loading: false,
  countriesData: [],
  searchedCountry: [],
  region: "",
  searchTerm: "",
  error: false,
  success: false,
  message: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
      state.searchedCountry = [];
      state.region = "";
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showAllCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(showAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
      })
      .addCase(showAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countriesData = [];
      })
      .addCase(searchByCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByCode.fulfilled, (state, action) => {
        state.loading = false;
        state.searchedCountry = action.payload;
        state.success = true;
      })
      .addCase(searchByCode.rejected, (state, action) => {
        state.loading = false;
        state.searchedCountry = [];
        state.error = true;
        state.message = action.payload;
      })
      .addCase(searchByRegion.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByRegion.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
      })
      .addCase(searchByRegion.rejected, (state, action) => {
        state.loading = false;
        state.countriesData = [];
        state.error = true;
        state.message = action.payload;
      });
  },
});

export const { reset, setRegion, setSearchTerm } = countriesSlice.actions;
export default countriesSlice.reducer;
