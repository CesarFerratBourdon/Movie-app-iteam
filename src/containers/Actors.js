import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actorActions from '../actions/index.js';
import CircularProgress from 'material-ui/CircularProgress';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Portfolio from './Portfolio'

const propTypes = {
  id: PropTypes.number.isRequired
};

const customContentStyle = {
  width: '90%',
  maxWidth: 'none',
};

class Actors extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  componentDidMount() {
    let { id } = this.props;
    this.props.actions.fetchActors(id);
  }

  openPortfolio(id, name) {
    this.setState({showModal: true, actorId: id, actorName: name});
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  createActorImages() {
    let movieId = this.props.id.toString();
    let allActors = this.props.actors
    let cast = allActors[movieId]

    return cast.map(actor => {
        return (
          <img
            style={{cursor: "pointer", width: "20%"}}
            alt=""
            title={actor.name}
            key={actor.id}
            onClick={() => this.openPortfolio(actor.id, actor.name)}
            src={`//image.tmdb.org/t/p/w90/${actor.profile_path}`}>
  				</img>
        )
      }
  	)
	}

  render() {
    let movieId = this.props.id.toString();
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose.bind(this)}
      />,
    ];

    return (
      <div>
        <h3>Main Actors</h3>
				{Reflect.has(this.props.actors, movieId) ? this.createActorImages() : <CircularProgress size={60} thickness={7} />}
        <Dialog
          title={"Most recent movies with " + this.state.actorName}
          modal={true}
          contentStyle={customContentStyle}
          actions={actions}
          open={this.state.showModal}
        >
          <Portfolio actorId={this.state.actorId}/>
        </Dialog>
			</div>
    )
  }
}

Actors.propTypes = propTypes;

function mapStateToProps(state) {
  const {actors, isLoadingActors} = state.actors
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
