import React from 'react';
import useContactAddForm from '../../hooks/useContactAddForm.js';
import { FormikProvider } from 'formik';
import { Stack } from '@mui/material';
import { FormTextField } from '../index.js';
import { LoadingButton } from '@mui/lab';

function ContactAddForm() {
  const formik = useContactAddForm();

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
      <LoadingButton
        loading={formik.isSubmitting}
        variant={'contained'}
        type={'submit'}>
        Add
      </LoadingButton>
    </Stack>
  </FormikProvider>;
}

export default ContactAddForm;
