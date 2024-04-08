import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (_, action) => {
      return {
        value: action.payload,
      };
    },
    clearFilter: () => {
      return {
        value: '',
      };
    },
  },
});

export const {
  setFilter,
  clearFilter,
} = slice.actions;

export const filterReducer = slice.reducer;
