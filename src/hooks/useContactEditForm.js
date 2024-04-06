import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().min(2).required(),
});

function useContactEditForm({
  id,
  initialName,
  initialNumber,
}) {
  const initialValues = {
    name: initialName,
    number: initialNumber,
  };

  return useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, formikHelpers) => {
      console.log(values);
    },
  });
}

export default useContactEditForm;
