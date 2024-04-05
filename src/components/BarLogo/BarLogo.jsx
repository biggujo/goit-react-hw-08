import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link as RouterLink } from 'react-router-dom';

function BarLogo() {
  return <Button sx={{ color: 'white' }}
                 component={RouterLink}
                 to={'/'}
  >
    <Stack direction={'row'}
           gap={1.5}
           alignItems={'center'}
    >
      <ContactsIcon />
      <Typography variant={'h6'} sx={{
        textTransform: 'uppercase',
        fontWeight: '700',
      }}>
        Reach out
      </Typography>
    </Stack>
  </Button>;
}

export default BarLogo;
