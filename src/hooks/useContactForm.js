import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  phone: Yup.string().min(2).required(),
});

function useContactForm({
  id,
  initialName,
  initialPhone,
}) {
  const initialValues = {
    name: initialName,
    phone: initialPhone,
  };

  return useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, formikHelpers) => {
      console.log(values);
    },
  });
}

export default useContactForm;
