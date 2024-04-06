import React from 'react';
import {
  Button, Card, CardActions, CardContent, Stack, Typography,
} from '@mui/material';
import useToggle from '../../hooks/useToggle.js';
import {
  ContactData, ContactDeleteModal, ContactEditModal, ContactModal,
} from '../index.js';

function ContactItem({
  id,
  name,
  phone,
}) {
  const [isDeleteModalOpen, toggleDeleteModalOpen] = useToggle();
  const [isEditModalOpen, toggleEditModalOpen] = useToggle();

  return (<Card>
    <Stack direction={'row'} justifyContent={'space-between'}>
      <CardContent>
        <ContactData name={name} phone={phone} />
      </CardContent>
      <CardActions>
        <Button onClick={toggleEditModalOpen}
                variant={'outlined'}>Edit</Button>
        <Button onClick={toggleDeleteModalOpen}
                color={'error'}
                variant={'outlined'}>Delete</Button>
      </CardActions>
    </Stack>
    <ContactEditModal open={isEditModalOpen}
                      onClose={toggleEditModalOpen}
                      id={id}
                      name={name}
                      phone={phone} />
    <ContactDeleteModal open={isDeleteModalOpen}
                        onClose={toggleDeleteModalOpen}
                        id={id}
                        name={name}
                        phone={phone} />
  </Card>);
}

export default ContactItem;
