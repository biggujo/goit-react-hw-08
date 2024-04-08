import { Stack, Typography } from '@mui/material';
import { LoginForm } from '../components';

function Login() {
  return (<Stack gap={2}>
    <Typography variant={'h2'}>
      Log in form
    </Typography>
    <LoginForm />
  </Stack>);
}

export default Login;
