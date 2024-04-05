import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../index.js';
import {
  ContactsPage, HomePage, LogInPage, RegisterPage,
} from '../../pages/index.js';

function App() {
  return <Routes>
    <Route path={'/'} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={'contacts'} element={<ContactsPage />} />
      <Route path={'register'} element={<RegisterPage />} />
      <Route path={'login'} element={<LogInPage />} />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Route>
  </Routes>;
}

export default App;
