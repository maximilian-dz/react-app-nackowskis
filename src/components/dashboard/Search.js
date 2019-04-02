import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Search extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.textInput.value)
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="container search lighten-1 no-shadow">
        <div className="nav-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="input-field">
              <input
                className="transparent"
                id="search"
                type="search"
                ref={(input) => (this.textInput = input)}
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
    )
  }
}

export default withRouter(Search)
