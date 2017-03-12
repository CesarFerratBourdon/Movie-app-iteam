import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as portfolioActions from '../actions/index.js';
import CircularProgress from 'material-ui/CircularProgress';

const propTypes = {
    actorId: PropTypes.number.isRequired,
};


class Portfolio extends Component {

  componentDidMount() {
    let actorId  = this.props.actorId;
    this.props.actions.fetchActorPortfolio(actorId);

  }

  componentWillUnmount() {
    this.props.actions.cleanPortfolio();
  }

  createPortfolioImages() {
    let mainMovies = this.props.portfolio

    return mainMovies.map(movie => {
        return (
            <img
              alt=""
              title={movie.original_title}
              key={movie.id}
              src={`//image.tmdb.org/t/p/w154/${movie.poster_path}`}>
    				</img>
        )
      }
  	)
	}

  render(){
    return (
      <div>
        {this.props.portfolio.length !== 0 ? this.createPortfolioImages() : <CircularProgress size={60} thickness={7} />}
      </div>
    );


  }
}

Portfolio.propTypes = propTypes;

function mapStateToProps(state) {
  const { portfolio, isLoadingPortfolio } = state.portfolio
  return {
    isLoadingPortfolio,
    portfolio
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(portfolioActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Portfolio);
