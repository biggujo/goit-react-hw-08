import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout, ProtectedRoute } from '../index.js';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authRefreshUserThunk } from '../../redux/auth/operations.js';

const HomePage = lazy(() => import('../../pages/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'));
const LogInPage = lazy(() => import('../../pages/LogInPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRefreshUserThunk());
  }, []);

  return <Routes>
    <Route path={'/'} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={'contacts'} element={<ContactsPage />} />
      <Route path={'register'} element={<ProtectedRoute redirectTo={'/contacts'}
                                                        component={
                                                          <RegistrationPage />} />} />
      <Route path={'login'} element={<ProtectedRoute redirectTo={'/contacts'}
                                                     component={
                                                       <LogInPage />} />} />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Route>
  </Routes>;
}

export default App;
