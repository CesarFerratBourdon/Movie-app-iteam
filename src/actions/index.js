import fetch from 'isomorphic-fetch';
import KEYS from "../utilities/KEYS.js";

export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const REQUEST_ACTORS = 'REQUEST_ACTORS';
export const RECEIVE_ACTORS = 'RECEIVE_ACTORS';


export function requestMovies(moviesUrl) {
  return {
    type: REQUEST_MOVIES,
    moviesUrl
  };
}

export function receiveMovies(movies) {
  return {
    type: RECEIVE_MOVIES,
    movies
  };
}

export function requestActors(actorsUrl) {
  return {
    type: REQUEST_ACTORS,
    actorsUrl
  };
}

export function receiveActors(actors) {
  return {
    type: RECEIVE_ACTORS,
    actors
  };
}

export function fetchMovies(title) {
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${KEYS.API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`

  return dispatch => {
    dispatch(requestMovies(url));
      return fetch(url)
               .then(response => response.json())
               .then(json => {
                 dispatch(receiveMovies(json.results));
             });
  };
}

export function fetchActors(id) {
  let url = `http://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEYS.API_KEY}`;

  return dispatch => {
    dispatch(requestActors(url));
      return fetch(url)
               .then(response => response.json())
               .then(json => {
                 dispatch(receiveActors(json.cast));
             });
  };
}
