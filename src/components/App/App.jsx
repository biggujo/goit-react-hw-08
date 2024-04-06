import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout, PrivateRoute, RestrictedRoute } from '../index.js';
import { authRefreshUserThunk } from '../../redux/auth/operations.js';

const HomePage = lazy(() => import('../../pages/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'));
const LogInPage = lazy(() => import('../../pages/LogInPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRefreshUserThunk());
  }, [dispatch]);

  return <Routes>
    <Route path={'/'} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={'contacts'} element={<PrivateRoute redirectTo={'/login'}
                                                      component={
                                                        <ContactsPage />} />} />
      <Route path={'register'}
             element={<RestrictedRoute redirectTo={'/contacts'}
                                       component={<RegistrationPage />} />} />
      <Route path={'login'} element={<RestrictedRoute redirectTo={'/contacts'}
                                                      component={
                                                        <LogInPage />} />} />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Route>
  </Routes>;
}

export default App;
