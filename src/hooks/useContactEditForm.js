import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  contactsUpdateContactByIdThunk,
} from '../redux/contacts/operations.js';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required(),
  number: Yup.string().min(3).max(50).required(),
});

function useContactEditForm({
  id,
  onClose,
  initialName,
  initialNumber,
}) {
  const dispatch = useDispatch();

  const initialValues = {
    name: initialName,
    number: initialNumber,
  };

  return useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(contactsUpdateContactByIdThunk({ id, ...values })).unwrap();

        toast.success('Successful update');
        onClose();
      } catch (error) {
        toast.error(error.message);
      }
    },
  });
}

export default useContactEditForm;
