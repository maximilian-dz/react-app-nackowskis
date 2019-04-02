import React, { Component } from 'react'
//import {createAuction} from '../API/WebAPI';

export default class CreateAuction extends Component {
  state = {
    Titel: undefined,
    Beskrivning: undefined,
    StartDatum: undefined,
    SlutDatum: undefined,
    Utropspris: undefined,
    SkapadAv: undefined
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="input-field white">
              <label htmlFor="Title">Title </label>
              <input
                id="Titel"
                name="Titel"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field white">
              <label htmlFor="Beskrivning">Description </label>
              <input
                id="Beskrivning"
                name="Beskrivning"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field white">
              <label htmlFor="StartDatum">Start Date </label>
              <input
                id="StartDatum"
                name="StartDatum"
                type="date"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field white">
              <label htmlFor="SlutDatum">End Date </label>
              <input
                id="SlutDatum"
                name="SlutDatum"
                type="date"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field white">
              <label htmlFor="Price">Starting Price </label>
              <input
                id="Utropspris"
                name="Utropspris"
                type="number"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field white">
              <label htmlFor="Beskrivning">Created by </label>
              <input
                id="SkapadAv"
                name="SkapadAv"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <button className="btn btn:hover">Save Auction</button>
          </form>
        </div>
      </div>
    )
  }
}
