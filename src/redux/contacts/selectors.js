import { createSelector } from '@reduxjs/toolkit';
import Fuse from 'fuse.js';
import { selectNameFilter } from '../filters/selectors.js';

const options = {
  keys: [
    'name',
    'number',
  ],
};

export const selectContactsItems = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector([
  selectContactsItems,
  selectNameFilter,
], (items, nameFilter) => {
  if (nameFilter.trim() === '') {
    return items;
  }

  const fuse = new Fuse(items, options);

  // Fuse-specific mapping
  return fuse.search(nameFilter).map(({ item }) => item);
});

export const selectContactsIsLoading = (state) => state.contacts.isLoading;

export const selectContactsError = (state) => state.contacts.error;
