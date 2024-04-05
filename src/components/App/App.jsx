import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../index.js';
import { lazy } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'));
const LogInPage = lazy(() => import('../../pages/LogInPage'));

function App() {
  return <Routes>
    <Route path={'/'} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={'contacts'} element={<ContactsPage />} />
      <Route path={'register'} element={<RegistrationPage />} />
      <Route path={'login'} element={<LogInPage />} />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Route>
  </Routes>;
}

export default App;
