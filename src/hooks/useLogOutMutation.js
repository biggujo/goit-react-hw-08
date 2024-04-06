import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { authLogOutThunk } from '../redux/auth/operations.js';

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
