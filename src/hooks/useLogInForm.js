import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(16).required(),
});

function useLogInForm() {
  const initialValues = {
    email: '',
    password: '',
  };

  return useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, formikHelpers) => {
      console.log(values);
    },
  });
}

export default useLogInForm;
