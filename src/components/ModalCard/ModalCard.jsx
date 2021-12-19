import React from 'react';
import classes from './ModalCard.module.scss';

const ModalCard = ({ onClick, img }) => (
  <div className={classes.bg}>
    <span onClick={onClick} className={classes.close}>
      &times;
    </span>
    <img src={img} className={classes.modal} alt={'car'} />
  </div>
);

export default ModalCard;
