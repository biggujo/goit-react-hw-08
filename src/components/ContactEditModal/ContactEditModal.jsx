import React from 'react';
import { ContactData, ContactForm, ContactModal } from '../index.js';
import { Button, Stack, Typography } from '@mui/material';

function ContactEditModal({
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
      <Typography variant={'h5'} component={'h2'}>
        Contact edit:
      </Typography>
      <Typography variant={'h6'} component={'h3'}>
        Original data:
      </Typography>
      <ContactData name={name} phone={phone} />
      <Typography variant={'h6'} component={'h3'}>
        New data:
      </Typography>
      <ContactForm id={id} initialName={name} initialPhone={phone}
                   additionalControls={<Button onClick={handleCancelClick}
                                               variant={'outlined'}>
                     Cancel
                   </Button>} />
    </Stack>
  </ContactModal>);
}

export default ContactEditModal;
