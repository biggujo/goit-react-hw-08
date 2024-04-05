import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/index.js';

function Layout() {
  return (<>
    <header style={{
      marginBottom: '2rem',
    }}>
      <AppBar />
    </header>
    <main>
      <Container maxWidth={'md'}>
        <Outlet />
      </Container>
    </main>
    <CssBaseline />
  </>);
}

export default Layout;
