import React from 'react';
import classes from './Input.module.scss';

const Input = (props) => (
  <input {...props} className={classes.input} type="text" />
);

export default Input;
