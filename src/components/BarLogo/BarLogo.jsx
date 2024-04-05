import React from 'react';
import { Stack, Typography } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';

function BarLogo() {
  return <Stack direction={'row'}
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
  </Stack>;
}

export default BarLogo;
