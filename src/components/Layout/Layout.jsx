import React, { Suspense } from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/index.js';
import { Toaster } from 'react-hot-toast';

function Layout() {
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
          <Outlet />
        </Suspense>
      </Container>
    </main>
    <CssBaseline />
    <Toaster position={'top-right'} />
  </>);
}

export default Layout;
