import {Component, PropTypes} from 'react';
import Actors from '../containers/Actors';

const propTypes = {
    showModal: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    movie: PropTypes.shape({
      original_title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      vote_count: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
};

class PosterModal extends Component {

  handleClose() {
    this.props.handleClose();
  }

  render(){
    return


  }
}

PosterModal.propTypes = propTypes;

export default PosterModal;
