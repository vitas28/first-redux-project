import React from 'react';
import classes from './Card.module.scss';
import Button from '../../UI/Button/Button';

const Card = (props) => (
  <div className={classes.item}>
    <img
      onClick={() => props.onClick(props.img)}
      className={classes.img}
      src={props.img}
      alt="car"
    />
    <div className={classes.info}>
      <div className={classes.brand}>{props.brand}</div>
      <div>
        <strong>Model:</strong> {props.model}
      </div>
      <div>
        <strong>Year:</strong> {props.year}
      </div>
      <div>
        <strong>Price:</strong> {props.price}$
      </div>
    </div>
    <div>
      <Button onClick={() => props.deleteHandler(props.id)}>Delete</Button>
    </div>
  </div>
);

export default Card;
