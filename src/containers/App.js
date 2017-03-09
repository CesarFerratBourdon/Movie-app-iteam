import React, {Component} from 'react';
import { connect } from 'react-redux'
import * as movieActions from '../actions/index.js';
import {bindActionCreators} from 'redux';
import Search from '../components/Search.js'
import Movies from '../components/Movies.js'


class App extends Component {

  handleChange = title => {
  this.props.actions.fetchMovies(title)
  }

  render() {
    return (
      <div>
        <Search onChange={this.handleChange} />
        <Movies movies={this.props.movies} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {movies, isLoading} = state.movies;
  return {
    isLoading,
    movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
