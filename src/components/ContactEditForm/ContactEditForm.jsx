import { FormikProvider } from 'formik';
import { Button, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useContactEditForm from '../../hooks/useContactEditForm.js';
import { FormTextField } from '../index.js';

function ContactEditForm({
  id,
  onClose,
  initialName,
  initialNumber,
}) {
  const formik = useContactEditForm({
    id,
    onClose,
    initialName,
    initialNumber,
  });

  return <FormikProvider value={formik}>
    <Stack as={'form'}
           gap={2}
           alignItems={'start'}
           onSubmit={formik.handleSubmit}>
      <FormTextField formik={formik}
                     name={'name'}
                     label={'Name *'}
                     disabled={formik.isSubmitting}
      />
      <FormTextField formik={formik}
                     name={'number'}
                     label={'Phone *'}
                     disabled={formik.isSubmitting}
      />
      <Stack direction={'row'} gap={2}>
        <LoadingButton
          loading={formik.isSubmitting}
          variant={'contained'}
          type={'submit'}>
          Submit
        </LoadingButton>
        <Button onClick={onClose}
                variant={'outlined'}>
          Cancel
        </Button>
      </Stack>
    </Stack>
  </FormikProvider>;
}

export default ContactEditForm;
