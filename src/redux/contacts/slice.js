import { createSlice } from '@reduxjs/toolkit';
import { contactsFetchAllThunk } from './operations.js';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(contactsFetchAllThunk.pending, (state) => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    })
    .addCase(contactsFetchAllThunk.rejected, (state, action) => {
      return {
        ...state,
        items: [],
        isLoading: false,
        error: action.payload,
      };
    })
    .addCase(contactsFetchAllThunk.fulfilled, (state, action) => {
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };
    });
  },
});

export const contactsReducer = slice.reducer;
