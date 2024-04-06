import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  contactsUpdateContactByIdThunk,
} from '../redux/contacts/operations.js';
import toast from 'react-hot-toast';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().min(2).required(),
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
    onSubmit: async (values, formikHelpers) => {
      try {
        const result = await dispatch(contactsUpdateContactByIdThunk({ id, ...values }));

        if (result.error) {
          throw new Error(result.payload);
        }

        toast.success('Successful update');
        onClose();
      } catch (error) {
        toast.error(error.message);
      }
    },
  });
}

export default useContactEditForm;
