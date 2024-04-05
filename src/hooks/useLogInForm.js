import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authLogInThunk } from '../redux/auth/operations.js';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(16).required(),
});

function useLogInForm() {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  return useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const result = await dispatch(authLogInThunk(values));

        if (result.error) {
          throw new Error(result.payload);
        }

        toast.success('Successful log in');
      } catch (error) {
        toast.error(error.message);
      }
    },
  });
}

export default useLogInForm;
