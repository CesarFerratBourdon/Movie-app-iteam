import {REQUEST_MOVIES, RECEIVE_MOVIES} from '../actions/actions.js';

const initialState = {
  isLoading: false,
  movies: []
};

const noPoster = (movie) => movie.poster_path !== null;

function movies(state = initialState, action) {
  switch (action.type) {
  case REQUEST_MOVIES:
    return Object.assign({}, state, {
      isLoading: true
    });
  case RECEIVE_MOVIES:
    const _movies = action.movies.filter(noPoster).slice(0,20)
    return Object.assign({}, state, {
      isLoading: false,
      movies: _movies
    });
  default:
    return state;
  }
}

export default movies;
