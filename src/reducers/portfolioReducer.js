import {REQUEST_PORTFOLIO, RECEIVE_PORTFOLIO, REMOVE_PORTFOLIO} from '../actions/index.js';

const initialState = {
  isLoadingPortfolio: true,
  portfolio: []
};

const mostRecent = (a, b) => b.release_date.substr(0,4) - a.release_date.substr(0,4);

const noReleaseDate = (movie) => movie.release_date !== null;

const noPicture = (movie) => movie.poster_path !== null;


function portfolio(state = initialState, action) {
  switch (action.type) {
  case REQUEST_PORTFOLIO:
    return Object.assign({}, state, {
      isLoadingPortfolio: true
    });
  case RECEIVE_PORTFOLIO:
    const orderedMovies = action.portfolio.filter(noReleaseDate).sort(mostRecent)
    const _portfolio = orderedMovies.filter(noPicture).slice(0,10)

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
