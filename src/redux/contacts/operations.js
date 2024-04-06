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

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// DELETE /contacts/{contactId}
// Delete contact
export const contactsDeleteContactByIdThunk = createAsyncThunk('contacts/deleteById',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// PATCH /contacts/{contactId}
// Update an existing contact
export const contactsUpdateContactByIdThunk = createAsyncThunk('contacts/updateById',
  async ({
    id,
    name,
    number,
  }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });

      console.log(response);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
