import { ADD_CARD, DELETE_CARD, IS_OPEN, SEARCH, SORT } from './types';

export const deleteCard = (id) => ({ type: DELETE_CARD, payload: id });
export const setSortCard = (value) => ({ type: SORT, payload: value });
export const addCard = (data) => ({ type: ADD_CARD, payload: data });
export const toggleModal = (isOpen, image) => ({
  type: IS_OPEN,
  payload: { isOpen, image },
});
export const searchCard = (value) => ({ type: SEARCH, payload: value });
