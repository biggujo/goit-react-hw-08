import React, { useEffect } from 'react';
import ContactItem from '../ContactItem/index.js';
import { Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { contactsFetchAllThunk } from '../../redux/contacts/operations.js';
import {
  selectContactsError, selectContactsIsLoading, selectContactsItems,
} from '../../redux/contacts/selectors.js';

function ContactList({ items }) {
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
