import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions'
import * as types from './actions'
import nock from 'nock'
import KEYS from "../utilities/KEYS.js";
import * as reducerss from './actions'


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates RECEIVE_MOVIES when fetching movies has been done', () => {

    let response = { results: [
        { id: 1, title: 'StarWars', poster_path: "/starwars.jpeg" },
        { id: 2, title: 'StarWarsIV', poster_path: "/starwarsIV.jpeg" },
        { id: 3, title: 'StarWars, Awakening', poster_path: "/awakening.jpeg" }
    ]}

    nock('https://api.themoviedb.org')
      .log(console.log)
      .get('/3/search/movie')
      .query({
        api_key: KEYS.API_KEY,
        language: 'en-US',
        query: 'StarWars',
        total_pages: '3',
        include_adult: 'false'
      })
      .reply(200, response)

    const expectedActions = [
      { moviesUrl: "https://api.themoviedb.org/3/search/movie?" +
                    "api_key=9618628fa1ffaa6ea5cbdc6f8f5a44d3&language=en-US&query=StarWars&total_pages=3&include_adult=false",
        type: types.REQUEST_MOVIES
      },
      { type: types.RECEIVE_MOVIES,
        movies:
          [{ id: 1, title: 'StarWars', poster_path: "/starwars.jpeg" },
           { id: 2, title: 'StarWarsIV', poster_path: "/starwarsIV.jpeg" },
           { id: 3, title: 'StarWars, Awakening', poster_path: "/awakening.jpeg" }]
      }]

    const store = mockStore({ movies: [] })

    return store.dispatch(actions.fetchMovies('StarWars'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})

describe('actions', () => {
  it('should create requestMovies', () => {
    const url = 'url';
    const expectedAction = {
      type: types.REQUEST_MOVIES,
      url
    };
    expect(actions.requestMovies(url).type).toEqual(expectedAction.type);
  });
  it('should create receiveMovies', () => {
    const movies = ['movie'];
    const expectedAction = {
      type: types.RECEIVE_MOVIES,
      movies
    };
    expect(actions.receiveMovies(movies).type).toEqual(expectedAction.type);
    expect(actions.receiveMovies(movies).movies).toEqual(expectedAction.movies);
  });

});
