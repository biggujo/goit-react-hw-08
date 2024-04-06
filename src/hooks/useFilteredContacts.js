import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Fuse from 'fuse.js';
import { selectContactsItems } from '../redux/contacts/selectors.js';
import { selectFilterValue } from '../redux/filter/selectors.js';

const options = {
  keys: [
    'name',
    'number',
  ],
};

function useFilteredContacts() {
  const items = useSelector(selectContactsItems);
  const filter = useSelector(selectFilterValue);

  const filteredItems = useMemo(() => {
    if (filter.trim() === '') {
      return items;
    }

    const fuse = new Fuse(items, options);

    // Fuse-specific mapping
    return fuse.search(filter).map(({ item }) => item);
  }, [
    items,
    filter,
  ]);

  return filteredItems;
}

export default useFilteredContacts;
