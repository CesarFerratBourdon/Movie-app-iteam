import React, { PropTypes } from 'react'
import Poster from './Poster';

const Movies = ({ movies }) => {
  let posters = movies.map((movie, id) => <Poster key={id} movie={movie} />);
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
