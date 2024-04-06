import React from 'react';
import { TextField } from '@mui/material';

function FormTextField({
  formik,
  name,
  label,
  ...props
}) {
  return <TextField
    id={name}
    name={name}
    label={label}
    value={formik.values[name]}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched[name] && Boolean(formik.errors[name])}
    helperText={formik.touched[name] && formik.errors[name]}
    sx={{
      width: '330px',
    }}
    {...props}
  />;
}

export default FormTextField;
