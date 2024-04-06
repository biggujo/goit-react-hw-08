import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { contactsAddContactThunk } from '../redux/contacts/operations.js';
import toast from 'react-hot-toast';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().min(2).required(),
});

function useContactAddForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  return useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, formikHelpers) => {
      try {
        const result = await dispatch(contactsAddContactThunk(values));

        if (result.error) {
          throw new Error(result.payload);
        }

        toast.success('The contact has been added');
        formikHelpers.resetForm();
      } catch (error) {
        toast.error(error.message);
      }
    },
  });
}

export default useContactAddForm;
