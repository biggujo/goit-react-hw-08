import React from 'react';
import { useDispatch } from 'react-redux';
import { authLogOutThunk } from '../redux/auth/operations.js';
import toast from 'react-hot-toast';

function useLogOutMutation() {
  const dispatch = useDispatch();

  return async () => {
    try {
      const result = await dispatch(authLogOutThunk());

      if (result.error) {
        throw new Error(result.payload);
      }

      toast.success('Successful log out');
    } catch (error) {
      toast.error(error.message);
    }
  };
}

export default useLogOutMutation;
