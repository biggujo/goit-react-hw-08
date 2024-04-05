import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice.js';
import { authReducer } from './auth/slice.js';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
  },
});

export const persistor = persistStore(store);
