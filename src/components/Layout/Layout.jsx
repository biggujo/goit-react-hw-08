import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/index.js';

function Layout() {
  return (<>
    <AppBar />
    <Outlet />
  </>);
}

export default Layout;
