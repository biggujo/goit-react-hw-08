import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// POST /users/signup
// Create a new user
export const authRegisterThunk = createAsyncThunk('auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', credentials);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// POST /users/login
// Login user
export const authLogInThunk = createAsyncThunk('auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', credentials);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
