import React, { useEffect, useState } from 'react';
import ContactItem from '../ContactItem/index.js';
import { Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { contactsFetchAllThunk } from '../../redux/contacts/operations.js';
import {
  selectContactsError, selectContactsIsLoading, selectContactsItems,
} from '../../redux/contacts/selectors.js';

function ContactList() {
  const dispatch = useDispatch();
  const items = useSelector(selectContactsItems);
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

  if (!isLoading && items.length === 0) {
    return <Typography>No items available.</Typography>;
  }

  return <Stack gap={2}
                as={'ul'}
                paddingLeft={0}
                style={{
                  listStyleType: 'none',
                }}>
    {items.map((itemData) => <li key={itemData.id}>
      <ContactItem {...itemData} />
    </li>)}
  </Stack>;
}

export default ContactList;
