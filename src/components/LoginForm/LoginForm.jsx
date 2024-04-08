import { Link as RouterLink } from 'react-router-dom';
import { FormikProvider } from 'formik';
import { Link, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormTextField } from '../index.js';
import useLogInForm from '../../hooks/useLogInForm.js';

function LoginForm() {
  const formik = useLogInForm();

  return (<FormikProvider value={formik}>
    <Stack as={'form'}
           gap={2}
           alignItems={'start'}
           onSubmit={formik.handleSubmit}>
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
        to={'/register'}
      >
        Don&#39;t have an account? Register now
      </Link>
    </Stack>
  </FormikProvider>);
}

export default LoginForm;
