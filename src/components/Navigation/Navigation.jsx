import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Button, Stack } from '@mui/material';

function Navigation({
  links,
}) {
  const { pathname } = useLocation();

  return (<nav>
    <Stack
      direction={'row'}
      gap={2}
      as={'ul'}
      paddingLeft={0}
      style={{
        listStyleType: 'none',
      }}>
      {links.map(({
        title,
        href,
      }) => <Button
        component={RouterLink}
        to={href}
        key={href}
        color={pathname === href ? 'secondary' : 'primary'}
      >
        {title}
      </Button>)}
    </Stack>
  </nav>);
}

export default Navigation;
