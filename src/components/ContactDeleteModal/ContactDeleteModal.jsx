import React, { useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { ContactData, ContactModal } from '../index.js';
import { useDispatch } from 'react-redux';
import {
  contactsAddContactThunk, contactsDeleteContactByIdThunk,
} from '../../redux/contacts/operations.js';
import toast from 'react-hot-toast';
import { LoadingButton } from '@mui/lab';

function ContactDeleteModal({
  open,
  onClose,
  id,
  name,
  number,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const handleSubmitClick = async () => {
    setIsSubmitting(true);
    try {
      await dispatch(contactsDeleteContactByIdThunk(id)).unwrap();

      toast.success('Successful delete');
      onClose();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (<ContactModal open={open}
                        onClose={onClose}>
    <Stack gap={2}>
      <Typography variant={'h5'} component={'h2'}>
        Are you sure?
      </Typography>
      <Typography variant={'h6'} component={'h3'}>
        A contact to delete:
      </Typography>
      <ContactData name={name} number={number} />
      <Stack direction={'row'} gap={2}>
        <LoadingButton onClick={handleSubmitClick}
                       loading={isSubmitting}
                       variant={'contained'}
                       color={'error'}>
          Yes
        </LoadingButton>
        <Button onClick={handleCancelClick}
                variant={'outlined'}>
          No
        </Button>
      </Stack>
    </Stack>
  </ContactModal>);
}

export default ContactDeleteModal;
