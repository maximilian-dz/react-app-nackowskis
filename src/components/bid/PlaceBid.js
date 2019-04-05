import React, { Component } from 'react'

class PlaceBid extends Component {
  state = {
    Summa: '',
    Budgivare: ''
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
            <label htmlFor="Budgivare">Enter your name</label>
            <input
              id="Budgivare"
              type="text"
              className="validate center"
              required
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field col">
            <label htmlFor="Summa">Enter your bid</label>
            <input
              id="Summa"
              type="text"
              className="validate center"
              required
              onChange={this.handleChange}
            />
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
