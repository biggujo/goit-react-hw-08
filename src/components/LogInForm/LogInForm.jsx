import React from 'react';
import { FormikProvider } from 'formik';
import { Button, Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FormTextField } from '../index.js';
import useLogInForm from '../../hooks/useLogInForm.js';

function LogInForm() {
  const formik = useLogInForm();

  return (<FormikProvider value={formik}>
    <Stack as={'form'}
           gap={2}
           alignItems={'start'}
           onSubmit={formik.handleSubmit}>
      <FormTextField formik={formik}
                     name={'email'}
                     label={'Email *'}
      />
      <FormTextField formik={formik}
                     name={'password'}
                     label={'Password *'}
                     type={'password'}
      />
      <Button variant={'contained'}
              type={'submit'}>
        Log in
      </Button>
      <Link
        variant={'body2'}
        component={RouterLink}
        to={'/register'}
      >
        Don't have an account? Register now
      </Link>
    </Stack>
  </FormikProvider>);
}

export default LogInForm;
