import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  phone: Yup.string().min(2).required(),
});

function useContactCreateForm() {
  const initialValues = {
    name: '',
    phone: '',
  };

  return useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, formikHelpers) => {
      console.log(values);
    },
  });
}

export default useContactCreateForm;
