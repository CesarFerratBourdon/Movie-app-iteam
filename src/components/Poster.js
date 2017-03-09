import React, {Component, PropTypes} from 'react';
import PosterModal from './PosterModal';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Actors from '../containers/Actors.js';

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
    this.state = {
      showModal: false,
      expanded: false,

    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

	render() {
    let url = `//image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`;
    let year = (this.props.movie.release_date).slice(0,4)
    let notation = (this.props.movie.vote_average) + ' /10'
    let voters = (this.props.movie.vote_count) + ' votes'
    return (
      // <div onClick={this.open.bind(this)}>
      //     <img alt="" src={url}/>
      //     <p> {this.props.movie.original_title}</p>
      //     <p><span>{this.props.movie.vote_average}</span>/10
      //     <span>({this.props.movie.vote_count} votes)</span></p>
      //   {this.state.showModal ? <PosterModal {...this.props}
      //                             showModal={this.state.showModal}
      //                             url={url}
      //                             handleClose={this.close.bind(this)}
      //                           /> : null
      //   }
      // </div>
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{float: "left", backgroundColor: "#f6f6f6", width: "20%"}}>
        <CardHeader
          title={this.props.movie.original_title}
          subtitle={year}
          avatar={url}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
         <Toggle
           toggled={this.state.expanded}
           onToggle={this.handleToggle}
           labelPosition="right"
           label="Toggle more information"
         />
        </CardText>
        <div expandable={true} style={{position: "absolute", zIndex: 50, width: "19.8%"}}>
            <CardMedia
              overlay={<CardTitle title={notation} subtitle={voters} />}
            >
              <img src={url} />
            </CardMedia>
            <CardTitle
              title={this.props.movie.original_title}
              subtitle={year}
            />
            <CardText>
              {this.props.movie.overview}
            </CardText>
            <Actors
              id={this.props.movie.id}

            />
        </div>
      </Card>
    )
	}
}

Poster.propTypes = propTypes;

export default Poster;
