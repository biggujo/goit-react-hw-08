import React from 'react';
import {
  Container, AppBar as AppBarMui, Toolbar, Stack, Typography,
} from '@mui/material';
import { BarLogo, Navigation, UserMenu } from '../index.js';
import { links } from '../../utils/index.js';
import AuthNavigation from '../AuthNavigation/AuthNavigation.jsx';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn, selectIsRefreshing,
} from '../../redux/auth/selectors.js';

const BarStack = ({
  children,
  ...props
}) => <Stack direction={'row'}
             alignItems={'center'}
             gap={4}
             {...props}>
  {children}
</Stack>;

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (<AppBarMui position={'static'}
                     elevation={1}
                     sx={{ bgcolor: '#ffffff' }}>
    <Toolbar>
      <Container maxWidth={'md'}>
        <BarStack justifyContent={'space-between'}>
          <BarStack>
            <BarLogo />
            <Navigation links={links.navigationLinks} />
          </BarStack>
          {isRefreshing ? <Typography>Refreshing...</Typography> : (isLoggedIn ?
            <UserMenu /> : <AuthNavigation />)}
        </BarStack>
      </Container>
    </Toolbar>
  </AppBarMui>);
}

export default AppBar;
