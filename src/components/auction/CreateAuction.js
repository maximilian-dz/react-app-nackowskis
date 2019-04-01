import React, { Component } from 'react';
//import {createAuction} from '../API/WebAPI';

export default class CreateAuction extends Component {
  state = {
    Titel: undefined,
    Beskrivning: undefined,
    StartDatum: undefined,
    SlutDatum: undefined,
    Utropspris: undefined,
    SkapadAv: undefined
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Title">Title: </label>
        <input
          id="Titel"
          name="Titel"
          type="text"
          onChange={this.handleChange}
        />

        <label htmlFor="Beskrivning">Description: </label>
        <input
          id="Beskrivning"
          name="Beskrivning"
          type="text"
          onChange={this.handleChange}
        />

        <label htmlFor="StartDatum">Start Date: </label>
        <input
          id="StartDatum"
          name="StartDatum"
          type="date"
          onChange={this.handleChange}
        />

        <label htmlFor="SlutDatum">End Date: </label>
        <input
          id="SlutDatum"
          name="SlutDatum"
          type="date"
          onChange={this.handleChange}
        />

        <label htmlFor="Price">Starting Price: </label>
        <input
          id="Utropspris"
          name="Utropspris"
          type="number"
          onChange={this.handleChange}
        />

        <label htmlFor="Beskrivning">Created by: </label>
        <input
          id="SkapadAv"
          name="SkapadAv"
          type="text"
          onChange={this.handleChange}
        />

        <button>Save Auction</button>
      </form>
    );
  }
}
