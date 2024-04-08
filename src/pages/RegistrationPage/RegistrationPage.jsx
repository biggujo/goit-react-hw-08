import { Stack, Typography } from '@mui/material';
import { Registration } from '../../components/';

function RegistrationPage() {
  return (<Stack gap={2}>
    <Typography variant={'h2'}>
      Registration form
    </Typography>
    <Registration />
  </Stack>);
}

export default RegistrationPage;
