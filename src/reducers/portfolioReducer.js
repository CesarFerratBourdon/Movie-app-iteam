import {REQUEST_PORTFOLIO, RECEIVE_PORTFOLIO, REMOVE_PORTFOLIO} from '../actions/actions.js';

const initialState = {
  isLoadingPortfolio: false,
  portfolio: []
};

const noPicture = (movie) => movie.poster_path !== null;

function portfolio(state = initialState, action) {
  switch (action.type) {
  case REQUEST_PORTFOLIO:
    return Object.assign({}, state, {
      isLoadingPortfolio: true
    });
  case RECEIVE_PORTFOLIO:
    const _portfolio = action.portfolio.filter(noPicture).slice(0,10)
    return Object.assign({}, state, {
      isLoadingPortfolio: false,
      portfolio: _portfolio
    });
  case REMOVE_PORTFOLIO:
    return Object.assign({}, state, initialState);
  default:
    return state;
  }
}

export default portfolio;
