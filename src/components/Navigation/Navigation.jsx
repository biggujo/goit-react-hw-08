import React from 'react';
import { Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navigation({ links }) {
  return (<nav>
    <Stack
      direction={'row'}
      gap={2}
      style={{
        listStyleType: 'none',
      }}>
      {links.map(({
        title,
        href,
      }) => <Button
        component={RouterLink}
        sx={{
          color: 'white',
        }}
        to={href}
        key={href}
      >
        {title}
      </Button>)}
    </Stack>
  </nav>);
}

export default Navigation;
