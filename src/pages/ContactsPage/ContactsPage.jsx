import { useSelector } from 'react-redux';
import { Box, Stack, Typography } from '@mui/material';
import { ContactAddForm } from '../../components';
import Filter from '../../components/Filter/index.js';
import FilteredContactList from '../../components/FilteredContactList/index.js';
import { selectContactsItems } from '../../redux/contacts/selectors.js';

function ContactsPage() {
  const items = useSelector(selectContactsItems);

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

    <Box>
      <Typography variant={'h3'} sx={{
        paddingTop: '1rem',
      }}>
        List of contacts
      </Typography>
      <Typography>Total amount: {items.length}</Typography>
    </Box>

    <Box>
      <Typography variant={'h4'}>
        Find contacts by name
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
