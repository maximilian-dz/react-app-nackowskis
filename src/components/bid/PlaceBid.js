import React, { Component } from 'react'

class PlaceBid extends Component {
  state = {
    errMsg: null,
    bid: '',
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="col s12">
        <div className="row flexbox no-margin">
          <div className="input-field col">
            <input
              id="name"
              type="text"
              className="validate center"
              required
              onChange={this.handleChange}
            />
            <label htmlFor="name">Enter your name</label>
          </div>

          <div className="input-field col">
            <input
              id="bid"
              type="text"
              className="validate center"
              required
              onChange={this.handleChange}
            />
            <label htmlFor="bid">Enter your bid</label>
          </div>
          <div className="input-field col">
            <button className="btn waves-effect waves-light" type="submit">
              let's go
            </button>
          </div>
        </div>
        {this.props.msg ? <p className="center">{this.props.msg}</p> : null}
      </form>
    )
  }
}

export default PlaceBid
