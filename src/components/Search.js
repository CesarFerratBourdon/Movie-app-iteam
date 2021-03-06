import React, { PropTypes, Component } from 'react'
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';

const styles = {
  large: {
      width: 120,
      height: 120,
      padding: 30,
  },
  largeIcon: {
    width: 50,
    height: 40
  },
  search: {
    width: 350,
    fontSize: 24
  },
  searchBox: {
  width: 600,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
  }
}

class Search extends Component {

  handleInput(e) {
    e.preventDefault();
    let input = this.refs.myField.getValue();
    this.props.onChange(input)
  }

 render() {
   return (
     <form onSubmit={e => this.handleInput(e)} action="" className="form" style={styles.searchBox} >
       <TextField ref="myField" name="input" hintText="What movie are you looking for?" style={styles.search}/>
       <IconButton onClick={e  => this.handleInput(e)} iconStyle={styles.largeIcon} style={styles.large} >
         <ActionSearch />
       </IconButton>
     </form>
   )
 }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Search
