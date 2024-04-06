import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  contactsAddContactThunk,
  contactsDeleteContactByIdThunk,
  contactsFetchAllThunk,
} from './operations.js';

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
    .addCase(contactsFetchAllThunk.fulfilled, (state, action) => {
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };
    })
    .addCase(contactsAddContactThunk.fulfilled, (state, action) => {
      return {
        ...state,
        items: [
          ...state.items,
          action.payload,
        ],
      };
    })
    .addCase(contactsDeleteContactByIdThunk.fulfilled, (state, action) => {
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.payload.id),
      };
    })
    .addMatcher(isAnyOf(
      contactsFetchAllThunk.rejected,
      contactsAddContactThunk.rejected,
      contactsDeleteContactByIdThunk.rejected,
    ), (state, action) => {
      return {
        ...state,
        items: [],
        isLoading: false,
        error: action.payload,
      };
    });
  },
});

export const contactsReducer = slice.reducer;
