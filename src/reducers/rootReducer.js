import {combineReducers} from 'redux';
import movies from './movieReducer';
import actors from './actorReducer';

const rootReducer = combineReducers({
  movies,
  actors
});

export default rootReducer;
