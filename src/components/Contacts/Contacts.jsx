import { Stack } from '@mui/material';
import ContactItem from '../ContactItem/index.js';

function Contacts({ items }) {
  return <Stack gap={2}
                as={'ul'}
                paddingLeft={0}
                style={{
                  listStyleType: 'none',
                }}>
    {items.map((itemData) => <li key={itemData.id}>
      <ContactItem {...itemData} />
    </li>)}
  </Stack>;
}

export default Contacts;
