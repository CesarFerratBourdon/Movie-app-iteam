import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actorActions from '../actions/index.js';

const propTypes = {
  id: PropTypes.number.isRequired
};

class Actors extends Component {

  componentDidMount() {
    let { id } = this.props;
    this.props.actions.fetchActors(id);
  }

  displayActorPortfolio(id) {
    // this.props.actions.fetchPortfolio(id);
  }

  createActorImages() {
    let movieId = this.props.id.toString();
    let allActors = this.props.actors
    let cast = allActors[movieId]

    return cast.map(actor => {
        return (
          <a>
            <img
              alt=""
              title={actor.name}
              key={actor.id}
              onClick={this.displayActorPortfolio(actor.id)}
              src={`//image.tmdb.org/t/p/w90/${actor.profile_path}`}>
    				</img>
          </a>
        )
      }
  	)
	}

  render() {
    let movieId = this.props.id.toString();
    return (
      <div>
        <h3>Main Actors</h3>
				{Reflect.has(this.props.actors, movieId) ? this.createActorImages() : "loading ..."}
			</div>
    )
  }
}

Actors.propTypes = propTypes;

function mapStateToProps(state) {
  const {actors, isLoadingActors} = state.actors;
  return {
    isLoadingActors,
    actors
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actorActions, dispatch)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Actors);
