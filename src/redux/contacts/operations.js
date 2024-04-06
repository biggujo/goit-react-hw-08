import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET /contacts
// Get all user contacts
export const contactsFetchAllThunk = createAsyncThunk('contacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
