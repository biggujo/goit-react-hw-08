import { Container, CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import {
  ContactsPage, HomePage, LogInPage, RegisterPage,
} from './pages/index.js';

function App() {
  return (<>
    <Container maxWidth={'md'}>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'contacts'} element={<ContactsPage />} />
          <Route path={'signup'} element={<RegisterPage />} />
          <Route path={'login'} element={<LogInPage />} />
        </Route>
      </Routes>
    </Container>
    <CssBaseline />
  </>);
}

export default App;
