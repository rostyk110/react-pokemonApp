import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cardReducer } from './reducers/card';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  card: cardReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
