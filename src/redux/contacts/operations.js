import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET /contacts
// Get all user contacts
export const contactsFetchAllThunk = createAsyncThunk('contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// POST /contacts
// Create a new contact
export const contactsAddContactThunk = createAsyncThunk('contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', data);

      console.log(response.data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
