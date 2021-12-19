import React from 'react';
import classes from './Button.module.scss';
import classNames from 'classnames';

const Button = (props) => (
  <button
    {...props}
    className={classNames(
      classes.button,
      props.type === 'add' ? classes.add : classes.delete
    )}
  >
    {props.children}
  </button>
);

export default Button;
