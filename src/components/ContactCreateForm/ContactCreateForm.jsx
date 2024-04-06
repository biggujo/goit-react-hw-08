import React from 'react';
import useContactCreateForm from '../../hooks/useContactCreateForm.js';
import { FormikProvider } from 'formik';
import { Stack } from '@mui/material';
import { FormTextField } from '../index.js';
import { LoadingButton } from '@mui/lab';

function ContactCreateForm() {
  const formik = useContactCreateForm();

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
      <LoadingButton
        loading={formik.isSubmitting}
        variant={'contained'}
        type={'submit'}>
        Add
      </LoadingButton>
    </Stack>
  </FormikProvider>;
}

export default ContactCreateForm;
