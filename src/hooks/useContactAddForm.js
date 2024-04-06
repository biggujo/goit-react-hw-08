import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { contactsAddContactThunk } from '../redux/contacts/operations.js';
import toast from 'react-hot-toast';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required(),
  number: Yup.string().min(3).max(50).required(),
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
        await dispatch(contactsAddContactThunk(values)).unwrap();

        toast.success('The contact has been added');
        formikHelpers.resetForm();
      } catch (error) {
        toast.error(error.message);
      }
    },
  });
}

export default useContactAddForm;
