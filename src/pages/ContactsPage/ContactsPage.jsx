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
    <ContactList />
  </Stack>);
}

export default ContactsPage;
