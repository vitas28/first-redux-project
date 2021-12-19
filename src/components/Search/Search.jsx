import React, { useRef } from 'react';
import Select from '../UI/Select/Select';
import Input from '../UI/Input/Input';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button/Button';

const Search = ({ onSearchChange, onSortClick }) => {
  const ref = useRef('');

  const sortHandler = (event) => {
    ref.current = event.target.value;
    onSortClick(ref.current);
  };

  return (
    <div className="search">
      <Select onChange={sortHandler} />
      <Input onChange={onSearchChange} placeholder={'Search'} />
      <div>
        <span className={'addition'}>Add my car</span>
        <NavLink to={'/add'}>
          <Button type={'add'}>Add</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Search;
