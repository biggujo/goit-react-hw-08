import { Stack, Typography } from '@mui/material';
import { ContactData, ContactEditForm, ContactModal } from '../index.js';

function ContactEditModal({
  open,
  onClose,
  id,
  name,
  number,
}) {
  return (<ContactModal open={open}
                        onClose={onClose}>
    <Stack gap={2}>
      <Typography variant={'h5'} component={'h2'}>
        Contact edit:
      </Typography>
      <Typography variant={'h6'} component={'h3'}>
        Original data:
      </Typography>
      <ContactData name={name} number={number} />
      <Typography variant={'h6'} component={'h3'}>
        New data:
      </Typography>
      <ContactEditForm id={id}
                       onClose={onClose}
                       initialName={name}
                       initialNumber={number} />
    </Stack>
  </ContactModal>);
}

export default ContactEditModal;
