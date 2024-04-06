import { Stack, Typography } from '@mui/material';

function ContactData({
  name,
  number,
}) {
  return (<Stack gap={2}>
    <Typography>Name: {name}</Typography>
    <Typography>Phone: {number}</Typography>
  </Stack>);
}

export default ContactData;
