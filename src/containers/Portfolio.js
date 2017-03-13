import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as portfolioActions from '../actions/index.js';
import CircularProgress from 'material-ui/CircularProgress';

const propTypes = {
    actorId: PropTypes.number.isRequired,
};

class Portfolio extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    let actorId  = this.props.actorId;
    this.props.actions.fetchActorPortfolio(actorId);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.isLoadingPortfolio !== this.props.isLoadingPortfolio) {
  //     console.log("tracking")
  //     this.createPortfolioImages();
  //   }
  // }

  componentWillUnmount() {
    this.props.actions.cleanPortfolio();
  }

  createPortfolioImages() {
    let recentMovies = this.props.portfolio

    return recentMovies.map(movie => {
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
//   preloadImages(srcs) {
//     console.log("voila")
//     console.log(srcs)
//     function loadImage(src) {
//         return new Promise(function(resolve, reject) {
//             var img = new Image();
//             img.onload = function() {
//                 resolve(img);
//             };
//             img.onabort = function() {
//                 reject(src);
//             };
//             img.src = src;
//         });
//     }
//     var promises = [];
//     for (var i = 0; i < srcs.length; i++) {
//         console.log(i);
//         promises.push(loadImage(srcs[i]));
//     }
//     return Promise.all(promises);
// }
//
//   createPortfolioImages() {
//     let recentMovies = this.props.portfolio
//     let srcs = recentMovies.map(movie => `//image.tmdb.org/t/p/w154${movie.poster_path}`)
//     this.preloadImages(srcs)
//             .then(function(images){
//               console.log(images)
//               this.setState({loading: false, allImages: images});
//             })
//   }
//
//   renderImages() {
//     return this.state.allImages.forEach(image => image)
//   }
//
//
//   render(){
//     return (
//       <div>
//         {this.state.loading === true ? <CircularProgress size={60} thickness={7}/> : this.renderImages() }
//       </div>
//     );
//   }
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
