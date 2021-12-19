import React from 'react';
import Card from './Card/Card';
import { useDispatch, useSelector } from 'react-redux';

import Search from '../Search/Search';
import {
  deleteCard,
  searchCard,
  setSortCard,
  toggleModal,
} from '../../redux/ActionCreators';

const Content = () => {
  const state = useSelector((state) => state);
  const cards = state.card.cards;
  const search = state.search;
  const dispatch = useDispatch();

  const onSortClick = (value) => {
    dispatch(setSortCard(value));
  };

  const openImage = (image) => {
    dispatch(toggleModal(true, image));
  };

  const deleteHandler = (id) => {
    dispatch(deleteCard(id));
  };

  const onSearchChange = (event) => {
    const { value } = event.target;
    dispatch(searchCard(value));
  };

  return (
    <>
      <Search onSearchChange={onSearchChange} onSortClick={onSortClick} />
      <div className="content">
        {cards
          .filter((car) =>
            car.brand.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <Card
              onClick={openImage}
              id={item.id}
              key={item.id}
              brand={item.brand}
              price={item.price}
              img={item.img}
              model={item.model}
              year={item.year}
              deleteHandler={deleteHandler}
            />
          ))}
      </div>
    </>
  );
};

export default Content;
