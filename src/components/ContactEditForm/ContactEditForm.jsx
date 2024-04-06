import React from 'react';
import useContactEditForm from '../../hooks/useContactEditForm.js';
import { FormikProvider } from 'formik';
import { Stack } from '@mui/material';
import { FormTextField } from '../index.js';
import { LoadingButton } from '@mui/lab';

function ContactEditForm({
  id,
  initialName,
  initialNumber,
  additionalControls,
}) {
  const formik = useContactEditForm({
    id,
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
      />
      <FormTextField formik={formik}
                     name={'number'}
                     label={'Phone *'}
      />
      <Stack direction={'row'} gap={2}>
        <LoadingButton
          loading={formik.isSubmitting}
          variant={'contained'}
          type={'submit'}>
          Submit
        </LoadingButton>
        {additionalControls}
      </Stack>
    </Stack>
  </FormikProvider>;
}

export default ContactEditForm;
