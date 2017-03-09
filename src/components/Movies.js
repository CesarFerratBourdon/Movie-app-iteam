import React, { PropTypes } from 'react'
import Poster from './Poster';

const noPoster = (movie) => movie.poster_path !== null;

const Movies = ({ movies }) => {
  let posters = movies.filter(noPoster).map((movie, id) => <Poster key={id} movie={movie} />);
  return (
    <div>
      {posters}
    </div>
  )
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired
}

export default Movies
