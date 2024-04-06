import React, { useEffect, useMemo } from 'react';
import { ContactList } from '../index.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsError, selectContactsIsLoading, selectContactsItems,
} from '../../redux/contacts/selectors.js';
import { contactsFetchAllThunk } from '../../redux/contacts/operations.js';
import { Typography } from '@mui/material';
import { selectFilterValue } from '../../redux/filter/selectors.js';
import { useFilteredContacts } from '../../hooks/index.js';

function FilteredContactList() {
  const dispatch = useDispatch();
  const filteredItems = useFilteredContacts();
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(contactsFetchAllThunk());
  }, []);

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (!isLoading && filteredItems.length === 0) {
    return <Typography>No items available.</Typography>;
  }

  return (<ContactList items={filteredItems} />);
}

export default FilteredContactList;
