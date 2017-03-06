import React, {Component, PropTypes} from 'react';
import PosterModal from './PosterModal';

const propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired
    })
};

class Poster extends Component {
  constructor (props) {
    super(props);
    this.state = { showModal: false };
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

	render() {
    let url = `//image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`;
    return (
      <div onClick={this.open.bind(this)}>
          <img className="posterImage" alt="" src={url}/>
          <p> {this.props.movie.original_title}</p>
          <p><span>{this.props.movie.vote_average}</span>/10
          <span>({this.props.movie.vote_count} votes)</span></p>
        {this.state.showModal ? <PosterModal {...this.props}
                                  showModal={this.state.showModal}
                                  url={url}
                                  handleClose={this.close.bind(this)}
                                /> : null
        }
      </div>
    )
	}
}

Poster.propTypes = propTypes;

export default Poster;
