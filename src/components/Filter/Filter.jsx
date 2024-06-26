import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/slice.js';
import { selectNameFilter } from '../../redux/filters/selectors.js';

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = (event) => dispatch(setFilter(event.target.value));

  return (<TextField value={value}
                     onChange={handleChange}
                     placeholder={'John Smith'}
                     sx={{
                       width: '330px',
                     }} />);
}

export default Filter;
