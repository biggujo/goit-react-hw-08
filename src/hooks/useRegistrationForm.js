import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { authRegisterThunk } from '../redux/auth/operations.js';
import toast from 'react-hot-toast';

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
        const result = await dispatch(authRegisterThunk(values));

        if (result.error) {
          throw new Error(result.payload);
        }

        toast.success('Successful registration');
      } catch (error) {
        toast.error(error.message);
      }
    },
  });
}

export default useRegistrationForm;
