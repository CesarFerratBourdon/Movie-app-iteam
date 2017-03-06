import React, { PropTypes } from 'react'
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
    width: 60,
    height: 60,
  }
}

const Search = ({ onChange }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onChange(input.value);
      }}>
        <TextField name="input" >
          <input ref={node => {
            input = node
          }} />
        </TextField>
        <IconButton type="submit" iconStyle={styles.largeIcon} style={styles.large}>
          <ActionSearch />
        </IconButton>
      </form>
    </div>
  )
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Search
