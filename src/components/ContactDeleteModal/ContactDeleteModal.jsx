import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { ContactModal } from '../index.js';

function ContactDeleteModal({
  open,
  onClose,
  id,
  name,
  phone,
}) {
  const handleSubmitClick = () => {
    onClose();
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (<ContactModal open={open}
                        onClose={onClose}>
    <Stack gap={2}>
      <Typography variant={'h6'} component={'h2'}>
        Are you sure?
      </Typography>
      <Typography fontWeight={'700'}>
        A contact to delete:
      </Typography>
      <Stack gap={2}>
        <Typography>Name: {name}</Typography>
        <Typography>Phone: {phone}</Typography>
      </Stack>
      <Stack direction={'row'} gap={2}>
        <Button onClick={handleSubmitClick}
                variant={'outlined'}
                color={'error'}>
          Yes
        </Button>
        <Button onClick={handleCancelClick}
                variant={'outlined'}>
          No
        </Button>
      </Stack>
    </Stack>
  </ContactModal>);
}

export default ContactDeleteModal;
