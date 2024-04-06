import React from 'react';
import { Stack, Typography } from '@mui/material';

function ContactData({
  name,
  phone,
}) {
  return (<Stack gap={2}>
    <Typography>Name: {name}</Typography>
    <Typography>Phone: {phone}</Typography>
  </Stack>);
}

export default ContactData;
