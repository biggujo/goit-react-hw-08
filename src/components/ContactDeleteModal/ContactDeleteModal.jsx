import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { ContactData, ContactModal } from '../index.js';
import { useDispatch } from 'react-redux';
import {
  contactsDeleteContactByIdThunk,
} from '../../redux/contacts/operations.js';
import toast from 'react-hot-toast';

function ContactDeleteModal({
  open,
  onClose,
  id,
  name,
  number,
}) {
  const dispatch = useDispatch();

  const handleSubmitClick = async () => {
    try {
      const result = await dispatch(contactsDeleteContactByIdThunk(id));

      if (result.error) {
        throw new Error(result.payload);
      }

      toast.success('Successful delete');
    } catch (error) {
      toast.error(error.message);
    } finally {
      onClose();
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
        <Button onClick={handleSubmitClick}
                variant={'contained'}
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
