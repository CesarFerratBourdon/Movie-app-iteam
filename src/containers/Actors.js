import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actorActions from '../actions/index.js';

const propTypes = {
  id: PropTypes.number.isRequired
};

const contextTypes = {
  store: PropTypes.object
};

class Actors extends Component {
  constructor (props, context) {
    super(props, context);
  }

  componentDidMount() {
    let { id } = this.props;
    this.props.actions.fetchActors(id);
  }

  createActorImages() {
    return this.props.actors.map(actor => {
      return (
        <img
					className="actor"
          alt=""
          key={actor.id}
          src={`//image.tmdb.org/t/p/w300/${actor.profile_path}`}>
				</img>)
  	})
	}

  render() {
    return (
      <div>
        <h1>Main Actors Here</h1>
				{this.props.actors ? this.createActorImages() : "loading ..."}
			</div>
    )
  }
}

Actors.propTypes = propTypes;
Actors.contextTypes = contextTypes;

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
