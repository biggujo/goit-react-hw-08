import React, { useState } from 'react';
import ContactItem from '../ContactItem/index.js';
import { Stack } from '@mui/material';

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
