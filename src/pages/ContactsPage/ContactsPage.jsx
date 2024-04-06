import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {
  ContactList, ContactEditForm, ContactCreateForm,
} from '../../components';

function ContactsPage() {
  return (<Stack gap={2}>
    <Typography variant={'h2'}>
      Contacts
    </Typography>
    <Typography variant={'h3'} sx={{
      paddingTop: '1rem',
    }}>
      Add a contact
    </Typography>
    <ContactCreateForm />
    <Typography variant={'h3'} sx={{
      paddingTop: '1rem',
    }}>
      List of contacts
    </Typography>
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
  </Stack>);
}

export default ContactsPage;
