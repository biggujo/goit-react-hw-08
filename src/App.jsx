import { Container, CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import HomePage from './pages/HomePage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';

function App() {
  return (<>
    <Container>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'contacts'} element={<ContactsPage />} />
        </Route>
      </Routes>
    </Container>
    <CssBaseline />
  </>);
}

export default App;
