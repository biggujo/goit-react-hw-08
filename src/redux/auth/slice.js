import { createSlice } from '@reduxjs/toolkit';
import { authRegisterThunk } from './operations.js';

const initialState = {
  user: {
    email: null,
    name: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(authRegisterThunk.pending, (state) => ({
      ...state,
      user: {
        email: null,
        name: null,
      },
      isLoggedIn: false,
      isRefreshing: true,
      error: null,
    }))
    .addCase(authRegisterThunk.rejected, (state, action) => ({
      ...state,
      isRefreshing: false,
      error: action.payload,
    }))
    .addCase(authRegisterThunk.fulfilled, (state, action) => ({
      ...state,
      user: action.payload.user,
      isLoggedIn: true,
      isRefreshing: false,
    }));
  },
});

export const authReducer = slice.reducer;
