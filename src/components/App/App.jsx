import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout, PrivateRoute, RestrictedRoute } from '../index.js';
import { authRefreshUserThunk } from '../../redux/auth/operations.js';

const Home = lazy(() => import('../../pages').then(module => ({ default: module.Home })));
const Contacts = lazy(() => import('../../pages').then(module => ({ default: module.Contacts })));
const Registration = lazy(() => import('../../pages').then(module => ({ default: module.Registration })));
const Login = lazy(() => import('../../pages').then(module => ({ default: module.Login })));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRefreshUserThunk());
  }, [dispatch]);

  return <Routes>
    <Route path={'/'} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={'contacts'} element={<PrivateRoute redirectTo={'/login'}
                                                      component={
                                                        <Contacts />} />} />
      <Route path={'register'}
             element={<RestrictedRoute redirectTo={'/contacts'}
                                       component={<Registration />} />} />
      <Route path={'login'} element={<RestrictedRoute redirectTo={'/contacts'}
                                                      component={
                                                        <Login />} />} />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Route>
  </Routes>;
}

export default App;
