import { cars } from '../../cars';
import { DELETE_CARD, SORT, ADD_CARD } from '../types';

const initialState = {
  cards: [...cars],
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CARD:
      const newState = JSON.parse(JSON.stringify(state));
      return {
        cards: newState.cards.filter((item) => item.id !== action.payload),
      };
    case SORT:
      return {
        ...state,
        cards: state.cards.sort((a, b) => {
          if (a[`${action.payload}`] > b[`${action.payload}`]) return 1;
          if (a[`${action.payload}`] < b[`${action.payload}`]) return -1;
          return 0;
        }),
      };
    case ADD_CARD:
      return { ...state, ...state.cards.push(action.payload) };
    default:
      return state;
  }
};
