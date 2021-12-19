import { IS_OPEN } from '../types';

const initialState = {
  isOpen: false,
  image: '',
};

export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_OPEN:
      return { ...action.payload };
    default:
      return state;
  }
};
