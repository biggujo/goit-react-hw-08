import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  contactsAddContactThunk,
  contactsDeleteContactByIdThunk,
  contactsFetchAllThunk,
  contactsUpdateContactByIdThunk,
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
    .addCase(contactsUpdateContactByIdThunk.fulfilled, (state, action) => {
      const updatedId = action.payload.id;
      const updatedIndex = state.items.findIndex(({ id }) => id === updatedId);

      return {
        ...state,
        items: state.items.map((item, index) => index === updatedIndex ? {
          ...action.payload,
        } : item),
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
