import React from 'react';
import { Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const commonLinks = [
  {
    title: 'Home Page',
    href: '/',
  },
  {
    title: 'Contacts',
    href: '/contacts',
  },
];

function AppBar() {
  return (<header>
    <Container disableGutters>
      <nav>
        <Stack direction={'row'} gap={4} style={{
          listStyleType: 'none',
        }}>
          {commonLinks.map(({
            title,
            href,
          }) => <li>
            <Link to={href}>{title}</Link>
          </li>)}
        </Stack>
      </nav>
    </Container>
  </header>);
}

export default AppBar;
