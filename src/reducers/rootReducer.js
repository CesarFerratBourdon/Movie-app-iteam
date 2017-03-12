import {combineReducers} from 'redux';
import movies from './movieReducer';
import actors from './actorReducer';
import portfolio from './portfolioReducer';

const rootReducer = combineReducers({
  movies,
  actors,
  portfolio
});

export default rootReducer;
