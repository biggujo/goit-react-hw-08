import { Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors.js';

function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (<Stack gap={2}>
    <Typography variant={'h2'}>
      Home Page
    </Typography>
    <Typography variant={'h5'} component={'p'}>
      Welcome to Phonebook, your personal web-based phone book app
      designed to organize and easily access your contacts.
    </Typography>
    <Typography variant={'h5'} component={'p'}>
      With this application, managing your contacts has never been easier.
      Whether you need
      to
      store phone numbers, or names, Phonebook has you covered.
    </Typography>
    {!isLoggedIn ? <Typography variant={'h5'} component={'p'}>
      To get started, <Link as={RouterLink} to={'/login'}>log in</Link> into an
      existing account or <Link as={RouterLink}
                                to={'/register'}>create</Link> a
      new one.
    </Typography> : <Typography variant={'h5'} component={'p'}>
      Go to <Link as={RouterLink} to={'/contacts'}>My Contacts</Link> to start
      using the application.
    </Typography>}
  </Stack>);
}

export default Home;
