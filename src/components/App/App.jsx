import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, PrivateRoute, RestrictedRoute } from '../index.js';
import { authRefreshUserThunk } from '../../redux/auth/operations.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import { Typography } from '@mui/material';

const Home = lazy(() => import('../../pages').then(module => ({ default: module.Home })));
const Contacts = lazy(() => import('../../pages').then(module => ({ default: module.Contacts })));
const Registration = lazy(() => import('../../pages').then(module => ({ default: module.Registration })));
const Login = lazy(() => import('../../pages').then(module => ({ default: module.Login })));

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRefreshUserThunk());
  }, [dispatch]);

  return <Layout>
    {isRefreshing ? <Typography>Refreshing...</Typography> : <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/contacts'} element={<PrivateRoute redirectTo={'/login'}
                                                       component={
                                                         <Contacts />} />} />
      <Route path={'/register'}
             element={<RestrictedRoute redirectTo={'/contacts'}
                                       component={<Registration />} />} />
      <Route path={'/login'} element={<RestrictedRoute redirectTo={'/contacts'}
                                                       component={
                                                         <Login />} />} />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>}
  </Layout>;
}

export default App;
