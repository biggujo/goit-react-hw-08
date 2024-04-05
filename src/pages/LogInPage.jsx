import React from 'react';
import { Stack, Typography } from '@mui/material';
import { LogInForm } from '../components';

function LogInPage() {
  return (<Stack gap={2}>
    <Typography variant={'h2'}>
      Log in form
    </Typography>
    <LogInForm />
  </Stack>);
}

export default LogInPage;
