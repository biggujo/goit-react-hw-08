import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice.js';
import { authReducer } from './auth/slice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
});
