import React from 'react';
import { Box } from '@mui/material';
import { ContactList } from '../../components';

function ContactsPage() {
  return (<Box>
    <ContactList items={[
      {
        id: 1,
        name: 'Test1',
        phone: '+12345',
      },
      {
        id: 2,
        name: 'Test2',
        phone: '+12345',
      },
      {
        id: 3,
        name: 'Test3',
        phone: '+12345',
      },
    ]} />
  </Box>);
}

export default ContactsPage;
