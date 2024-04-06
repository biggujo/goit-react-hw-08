import React from 'react';
import { Stack, Typography } from '@mui/material';
import {
  ContactList, ContactAddForm,
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
    <ContactAddForm />

    <Typography variant={'h3'} sx={{
      paddingTop: '1rem',
    }}>
      List of contacts
    </Typography>
    <ContactList />
  </Stack>);
}

export default ContactsPage;
