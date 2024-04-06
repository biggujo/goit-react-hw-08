import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Container, CssBaseline, Typography } from '@mui/material';
import AppBar from '../AppBar/index.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';

function Layout() {
  const isRefreshing = useSelector(selectIsRefreshing);

  return (<>
    <header style={{
      marginBottom: '2rem',
    }}>
      <AppBar />
    </header>
    <main>
      <Container maxWidth={'md'}>
        <Suspense
          fallback={<Typography variant={'body2'}>Loading...</Typography>}>
          {isRefreshing ? <Typography>Refreshing...</Typography> : <Outlet />}

        </Suspense>
      </Container>
    </main>
    <CssBaseline />
    <Toaster position={'top-right'} toastOptions={{
      duration: 2500,
    }} />
  </>);
}

export default Layout;
