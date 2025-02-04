import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const selectFilter = useSelector(selectNameFilter); //--------------------------------
  const dispatch = useDispatch(); //--------------------------------

  return (
    <div className={css.searchContainer}>
      <input
        className={css.searchInput}
        type="text"
        name="searchInput"
        value={selectFilter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder='Find contacts by name'
      ></input>
    </div>
  );
};

export default SearchBox;
