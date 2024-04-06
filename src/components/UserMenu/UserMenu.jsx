import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import useLogOutMutation from '../../hooks/useLogOutMutation.js';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';

function UserMenu() {
  const logOutMutation = useLogOutMutation();
  const user = useSelector(selectUser);

  const handleLogOutClick = () => {
    logOutMutation(); // Log out
  };

  return (<Stack direction={'row'} alignItems={'center'} gap={2}>
    <Typography>Hello, {user.name}!</Typography>
    <Button
      onClick={handleLogOutClick}
    >
      Log out
    </Button>
  </Stack>);
}

export default UserMenu;
