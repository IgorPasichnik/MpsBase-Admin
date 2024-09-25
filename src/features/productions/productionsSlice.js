import { createSlice } from "@reduxjs/toolkit";
import { productionsApi } from "../../app/services/productions";

const initialState = {
  restorationProductions: null,
  productions: null,
};

const restorationSlice = createSlice({
  name: "restorationProductions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      productionsApi.endpoints.getRestorationProductions.matchFulfilled,
      (state, action) => {
        state.restorationProductions = action.payload;
      }
    );
  },
});

const slice = createSlice({
  name: "productions",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productionsApi.endpoints.getAllProductions.matchFulfilled,
      (state, action) => {
        state.productions = action.payload;
      }
    );
  },
});

export default {
  slice,
  restoration: restorationSlice.reducer,
};

export const selectProductions = (state) => state.productions.productions;

export const selectRestorationProductions = (state) =>
  state.restorationProductions.restorationProductions;
