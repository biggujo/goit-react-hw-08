import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { ContactList } from '../index.js';
import {
  selectContactsError, selectContactsIsLoading,
} from '../../redux/contacts/selectors.js';
import { contactsFetchAllThunk } from '../../redux/contacts/operations.js';
import { useFilteredContacts } from '../../hooks/index.js';

function FilteredContactList() {
  const dispatch = useDispatch();
  const filteredItems = useFilteredContacts();
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(contactsFetchAllThunk());
  }, [dispatch]);

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
