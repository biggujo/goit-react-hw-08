import React from 'react';
import { useDispatch } from 'react-redux';
import { authLogOutThunk } from '../redux/auth/operations.js';
import toast from 'react-hot-toast';

function useLogOutMutation() {
  const dispatch = useDispatch();

  return async () => {
    try {
      await dispatch(authLogOutThunk()).unwrap();

      toast.success('Successful log out');
    } catch (error) {
      toast.error(error.message);
    }
  };
}

export default useLogOutMutation;
