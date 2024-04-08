import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Container, CssBaseline, Typography } from '@mui/material';
import AppBar from '../AppBar/index.js';

function Layout({ children }) {
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
          {children}
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
