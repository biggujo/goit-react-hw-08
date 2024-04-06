import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authRegisterThunk } from '../redux/auth/operations.js';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(16).required(),
});

function useRegistrationForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(authRegisterThunk(values)).unwrap();

        toast.success('Successful registration');
      } catch (error) {
        toast.error(error.message);
      }
    },
  });
}

export default useRegistrationForm;
