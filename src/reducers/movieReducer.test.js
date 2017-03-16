import * as actions from '../actions/actions.js';
import movies from './movieReducer.js'



describe('movieReducer', () => {

  describe('requestMovies', () => {
    it('should return object with isLoading set as true', () => {
      let initialState = {}
      let action = actions.requestMovies('moviesUrl')
      let updatedState = movies(initialState, action)

      expect(updatedState.isLoading).toEqual(true)
    })
  })

  describe('receiveMovies', () => {

    it('should return the initial state', () => {
      expect(movies(undefined, {})).toEqual({isLoading: false, movies: []})
    })

    it('should return object with isLoading set as false and movies with only 1 movie', () => {
      let initialState = {}
      let results = [
          { id: 1, title: 'StarWars', poster_path: "/starwars.jpeg" },
          { id: 2, title: 'Batman', poster_path: null },
          { id: 3, title: 'Willow', poster_path: null }
        ]
      let action = actions.receiveMovies(results)
      let updatedState = movies(initialState, action)

      expect(updatedState.isLoading).toEqual(false)
      expect(updatedState.movies.length).toEqual(1)
      expect(updatedState.error).toEqual(undefined)
    })

    it('should return object with isLoading set as false and movies as results', () => {
      let initialState = {}
      let results = [
          { id: 1, title: 'StarWars', poster_path: "/starwars.jpeg" },
          { id: 2, title: 'Batman', poster_path: "/batman.jpeg" },
          { id: 3, title: 'Willow', poster_path: "/willow.jpeg" }
        ]
      let action = actions.receiveMovies(results)
      let updatedState = movies(initialState, action)

      expect(updatedState.isLoading).toEqual(false)
      expect(updatedState.movies.length).toEqual(3)
    })
  })
})
