import {combineReducers} from 'redux';
import movies from './movieReducer';
import actors from './actorReducer';
import portfolio from './portfolioReducer';
import actorDetails from './actorDetailsReducer';

const rootReducer = combineReducers({
  movies,
  actors,
  portfolio,
  actorDetails
});

export default rootReducer;
