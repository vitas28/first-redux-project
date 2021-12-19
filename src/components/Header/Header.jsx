import React from 'react';
import classes from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import ModalCard from '../ModalCard/ModalCard';
import { toggleModal } from '../../redux/ActionCreators';

const Header = () => {
  const modal = useSelector((state) => state.modal);
  const { isOpen, image } = modal;
  const dispatch = useDispatch();

  const closeImage = () => {
    dispatch(toggleModal(false, ''));
  };

  return (
    <>
      {isOpen && <ModalCard img={image} onClick={closeImage} />}
      <div className={classes.header}>
        <div>
          <div className={classes.title}>ABOUT CARS</div>
        </div>
      </div>
    </>
  );
};

export default Header;
