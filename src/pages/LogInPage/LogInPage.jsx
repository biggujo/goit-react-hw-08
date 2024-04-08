import { Stack, Typography } from '@mui/material';
import { Login } from '../../components';

function LogInPage() {
  return (<Stack gap={2}>
    <Typography variant={'h2'}>
      Log in form
    </Typography>
    <Login />
  </Stack>);
}

export default LogInPage;
