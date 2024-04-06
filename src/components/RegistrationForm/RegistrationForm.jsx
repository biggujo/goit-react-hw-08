import { FormikProvider } from 'formik';
import { Button, Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FormTextField } from '../index.js';
import { useRegistrationForm } from '../../hooks';
import { LoadingButton } from '@mui/lab';

function RegistrationForm() {
  const formik = useRegistrationForm();

  return <>
    <FormikProvider value={formik}>
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
                       name={'email'}
                       label={'Email *'}
                       disabled={formik.isSubmitting}
        />
        <FormTextField formik={formik}
                       name={'password'}
                       label={'Password *'}
                       type={'password'}
                       disabled={formik.isSubmitting}
        />
        <LoadingButton
          loading={formik.isSubmitting}
          variant={'contained'}
          type={'submit'}>
          Register
        </LoadingButton>
        <Link
          variant={'body2'}
          component={RouterLink}
          to={'/login'}
        >
          Already have an account? Sign in
        </Link>
      </Stack>
    </FormikProvider>
  </>;
}

export default RegistrationForm;
