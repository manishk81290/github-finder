import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  searchChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  searchSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form className='form' onSubmit={this.searchSubmit}>
          <input
            type='text'
            placeholder='Search users'
            name='text'
            value={this.state.text}
            onChange={this.searchChange}
          />
          <input
            type='submit'
            value='Submit'
            className='btn btn-dark btn-block'
          />
          {showClear && (
            <button className='btn btn-light btn-block' onClick={clearUsers}>
              Clear
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
