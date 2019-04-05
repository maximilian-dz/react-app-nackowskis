import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Search extends Component {
  state = {
    input: ''
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.input)
    this.props.history.push('/')
  }
  handleCloseClick = () => {
    this.setState({
      input: ''
    })
  }
  render() {
    return (
      <div className="container search lighten-1 no-shadow ">
        <div className="nav-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="input-field">
              <input
                className="transparent "
                id="search"
                type="search"
                onChange={this.handleChange}
                placeholder="Search auction..."
                value={this.state.input}
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons" onClick={this.handleCloseClick}>
                close
              </i>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Search)
