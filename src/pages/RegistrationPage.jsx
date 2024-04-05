import React from 'react';
import { RegistrationForm } from '../components';
import { Stack, Typography } from '@mui/material';

function RegistrationPage() {
  return (<Stack gap={2}>
    <Typography variant={'h2'}>
      Registration form
    </Typography>
    <RegistrationForm />
  </Stack>);
}

export default RegistrationPage;
