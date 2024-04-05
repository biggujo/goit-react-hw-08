import React from 'react';
import { Stack, Typography } from '@mui/material';
import { RegistrationForm } from '../../components/';

function RegistrationPage() {
  return (<Stack gap={2}>
    <Typography variant={'h2'}>
      Registration form
    </Typography>
    <RegistrationForm />
  </Stack>);
}

export default RegistrationPage;
