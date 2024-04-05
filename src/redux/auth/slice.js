import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  authLogInThunk, authLogOutThunk, authRegisterThunk,
} from './operations.js';

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
    .addCase(authLogOutThunk.fulfilled, () => ({ ...initialState }))
    .addMatcher(isAnyOf(
      authRegisterThunk.pending,
      authLogInThunk.pending,
      authLogOutThunk.rejected,
    ), (state) => ({
      ...state,
      user: {
        email: null,
        name: null,
      },
      isLoggedIn: false,
      isRefreshing: true,
      error: null,
    }))
    .addMatcher(isAnyOf(
      authRegisterThunk.rejected,
      authLogInThunk.rejected,
      authLogOutThunk.rejected,
    ), (state, action) => ({
      ...state,
      isRefreshing: false,
      error: action.payload,
    }))
    .addMatcher(
      isAnyOf(authRegisterThunk.fulfilled, authLogInThunk.fulfilled),
      (state, action) => ({
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
        isRefreshing: false,
      }),
    );
  },
});

export const authReducer = slice.reducer;
