/** @format */

import React from 'react';

class SearchBar extends React.Component {

  constructor() {
    super();
    this.state = {
      searchItem: '',
    };


  }

  handleChange = (e) => {
    this.setState({ searchItem: e.target.value });
  };

  handleSubmit = (e) =>{
      e.preventDefault();
      this.props.onFormSubmit(this.state.searchItem);
      this.setState({searchItem:''});
  }

  render() {
    return (
      <div style={{backgroundColor:'lightgray'}} className="  search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label><h3>Search Videos</h3></label>
            <input
              type="text"
              value={this.state.searchItem}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
