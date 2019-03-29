import React, { Component } from 'react';

class Search extends Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };
  render() {
    return (
      <div className="container search lighten-1 no-shadow">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                className="transparent"
                id="search"
                type="search"
                required
                onChange={this.handleChange}
                placeholder="Search auction..."
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
