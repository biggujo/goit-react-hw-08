import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';

function HomePage() {
  const user = useSelector(selectUser);

  return (<div>
    <p>Email: {user.email}</p>
    <p>Name: {user.name}</p>
  </div>);
}

export default HomePage;
