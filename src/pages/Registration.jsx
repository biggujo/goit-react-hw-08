import { Stack, Typography } from '@mui/material';
import { RegistrationForm } from '../components';

function Registration() {
  return (<Stack gap={2}>
    <Typography variant={'h2'}>
      Registration form
    </Typography>
    <RegistrationForm />
  </Stack>);
}

export default Registration;
