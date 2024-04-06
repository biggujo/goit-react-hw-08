import { Box, Modal } from '@mui/material';

function ContactModal({
  open,
  onClose,
  children,
}) {
  return (<Modal
    open={open}
    onClose={onClose}
  >
    <Box sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      padding: '2rem',
      bgcolor: '#ffffff',
    }}>
      {children}
    </Box>
  </Modal>);
}

export default ContactModal;
