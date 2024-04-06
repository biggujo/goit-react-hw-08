import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ContactAddForm } from '../../components';
import Filter from '../../components/Filter/index.js';
import FilteredContactList from '../../components/FilteredContactList/index.js';

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

    <Box>
      <Typography variant={'h4'}>
        Filter
      </Typography>
      <Filter />
    </Box>

    <Box>
      <Typography variant={'h4'}>
        Items
      </Typography>
      <FilteredContactList />
    </Box>
  </Stack>);
}

export default ContactsPage;
