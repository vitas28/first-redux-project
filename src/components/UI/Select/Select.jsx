import React from 'react';
import classes from './Select.module.scss';

const Select = (props) => (
  <div>
    <span className={'addition'}>Sort by</span>
    <select className={classes.select} {...props}>
      <option value="id">default</option>
      <option value="brand">Brand</option>
      <option value="year">Year</option>
      <option value="price">Price</option>
    </select>
  </div>
);

export default Select;
