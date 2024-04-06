import React from 'react';
import {
  Button, Card, CardActions, CardContent, Stack, Typography,
} from '@mui/material';
import useToggle from '../../hooks/useToggle.js';
import { ContactDeleteModal, ContactModal } from '../index.js';

function ContactItem({
  id,
  name,
  phone,
}) {
  const [isDeleteModalOpen, toggleDeleteModalOpen] = useToggle();

  return (<Card>
    <Stack direction={'row'} justifyContent={'space-between'}>
      <CardContent>
        <Stack gap={2}>
          <Typography>Name: {name}</Typography>
          <Typography>Phone: {phone}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button onClick={toggleDeleteModalOpen}
                color={'error'}
                variant={'outlined'}>Delete</Button>
      </CardActions>
    </Stack>
    <ContactDeleteModal open={isDeleteModalOpen}
                        onClose={toggleDeleteModalOpen}
                        id={id}
                        name={name}
                        phone={phone} />
  </Card>);
}

export default ContactItem;
