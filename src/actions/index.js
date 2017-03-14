import fetch from 'isomorphic-fetch';
import KEYS from "../utilities/KEYS.js";

export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const REQUEST_ACTORS = 'REQUEST_ACTORS';
export const RECEIVE_ACTORS = 'RECEIVE_ACTORS';
export const REQUEST_PORTFOLIO = 'REQUEST_PORTFOLIO';
export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';
export const REMOVE_PORTFOLIO = 'REMOVE_PORTFOLIO';


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

export function requestActors(actorsUrl, movieId) {
  return {
    type: REQUEST_ACTORS,
    actorsUrl,
    movieId
  };
}

export function receiveActors(actors, movieId) {
  return {
    type: RECEIVE_ACTORS,
    actors,
    movieId
  };
}

export function requestPortfolio(portfolioUrl) {
  return {
    type: REQUEST_PORTFOLIO,
    portfolioUrl
  };
}

export function receivePortfolio(portfolio) {
  return {
    type: RECEIVE_PORTFOLIO,
    portfolio
  };
}

export function removePortfolio() {
  return {
    type: REMOVE_PORTFOLIO
  };
}

export function fetchMovies(title) {
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${KEYS.API_KEY}&language=en-US&query=${title}&total_pages=3&include_adult=false`

  return dispatch => {
    dispatch(requestMovies(url));
      return fetch(url)
               .then(response => response.json())
               .then(json => {
                 dispatch(receiveMovies(json.results));
             });
  };
}

export function fetchActors(movieId) {
  let url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEYS.API_KEY}`;

  return dispatch => {
    dispatch(requestActors(url, movieId));
      return fetch(url)
               .then(response => response.json())
               .then(json => {
                 dispatch(receiveActors(json.cast, movieId));
             });
  };
}

export function fetchActorPortfolio(actorId) {
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${KEYS.API_KEY}`
              + `&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=${actorId}`


  return dispatch => {
    dispatch(requestPortfolio(url));
      return fetch(url)
               .then(response => response.json())
               .then(json => {
                 dispatch(receivePortfolio(json.results));
             });
  };
}

export function cleanPortfolio() {
  return dispatch => dispatch(removePortfolio());
}
