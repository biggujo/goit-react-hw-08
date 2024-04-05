import React from 'react';
import {
  Container, AppBar as AppBarMui, Toolbar, Stack,
} from '@mui/material';
import { BarLogo, Navigation } from '../index.js';
import { links } from '../../utils/index.js';

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
  return (<header>
    <AppBarMui>
      <Toolbar>
        <Container maxWidth={'md'} disableGutters>
          <BarStack justifyContent={'space-between'}>
            <BarStack>
              <BarLogo />
              <Navigation links={links.navigationLinks} />
            </BarStack>
            <Navigation links={links.authLinks} />
          </BarStack>
        </Container>
      </Toolbar>
    </AppBarMui>
  </header>);
}

export default AppBar;
