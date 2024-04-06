import {
  Button, Card, CardActions, CardContent, Stack,
} from '@mui/material';
import useToggle from '../../hooks/useToggle.js';
import {
  ContactData, ContactDeleteModal, ContactEditModal,
} from '../index.js';

function ContactItem({
  id,
  name,
  number,
}) {
  const [isDeleteModalOpen, toggleDeleteModalOpen] = useToggle();
  const [isEditModalOpen, toggleEditModalOpen] = useToggle();

  return (<Card>
    <Stack direction={'row'} justifyContent={'space-between'}>
      <CardContent>
        <ContactData name={name} number={number} />
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
                      number={number} />
    <ContactDeleteModal open={isDeleteModalOpen}
                        onClose={toggleDeleteModalOpen}
                        id={id}
                        name={name}
                        number={number} />
  </Card>);
}

export default ContactItem;
