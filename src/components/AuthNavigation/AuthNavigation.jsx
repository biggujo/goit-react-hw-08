import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import { Button } from '@mui/material';
import { links } from '../../utils';
import { Navigation } from '../index.js';
import useLogOutMutation from '../../hooks/useLogOutMutation.js';

function AuthNavigation() {
  const logOutMutation = useLogOutMutation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogOutClick = () => {
    logOutMutation(); // Log out
  };

  if (isLoggedIn) {
    // Return "log out" button
    return <Button
      onClick={handleLogOutClick}
      sx={{
        color: 'white',
      }}
    >
      Log out
    </Button>;
  }

  return <Navigation links={links.authLinks} />;
}

export default AuthNavigation;
