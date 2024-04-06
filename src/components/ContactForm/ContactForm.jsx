import React from 'react';
import useContactForm from '../../hooks/useContactForm.js';
import { FormikProvider } from 'formik';
import { Stack } from '@mui/material';
import { FormTextField } from '../index.js';
import { LoadingButton } from '@mui/lab';

function ContactForm({
  id,
  initialName,
  initialPhone,
  additionalControls,
}) {
  const formik = useContactForm({
    id,
    initialName,
    initialPhone,
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
                     name={'phone'}
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

export default ContactForm;
