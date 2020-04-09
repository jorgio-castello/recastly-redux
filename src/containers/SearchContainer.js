import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

let mapStateToProps = (dispatch) => {
  return {
    // handleSearchInputChange: (q) => handleSearchChange(q)(dispatch)
    handleSearchInputChange: (q) => dispatch(handleSearchChange(q))
  };
};

var SearchContainer = connect(null, mapStateToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;

//handleSearchInputChange: callback that fires after onChange in the input text field - eventListener that is going to create an event object
//handleSearchInputChange: event => handleSearchChange(event.target.value)(dispatch)