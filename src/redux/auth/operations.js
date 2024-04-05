import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = (token) => axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const clearAuthHeader = () => axios.defaults.headers.common['Authorization'] = ``;

// POST /users/signup
// Create a new user
export const authRegisterThunk = createAsyncThunk('auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', credentials);

      setAuthHeader(response.data.token);

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

      setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// POST /users/logout
// Log out user
export const authLogOutThunk = createAsyncThunk('auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');

      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);