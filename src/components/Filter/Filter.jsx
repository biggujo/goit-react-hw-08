import React from 'react';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/slice.js';
import { selectFilterValue } from '../../redux/filter/selectors.js';

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilterValue);

  const handleChange = (event) => dispatch(setFilter(event.target.value));

  return (<TextField value={value}
                     onChange={handleChange}
                     placeholder={'John Smith'} />);
}

export default Filter;
