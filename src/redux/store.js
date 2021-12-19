import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cardReducer } from './reducers/cardReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { searchReducer } from './reducers/searchReducer';
import { imageReducer } from './reducers/imageReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  card: cardReducer,
  search: searchReducer,
  modal: imageReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
window.store = store;
export default store;
