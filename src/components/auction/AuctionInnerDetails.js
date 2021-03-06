import React, { Component } from 'react'
import { updateAuction, deleteAuction } from '../API/WebAPI'

export default class AuctionInnerDetails extends Component {
  constructor(props) {
    super(props)
    const moment = require('moment')
    this.state = {
      id: this.props.id,
      auction: this.props.auction,
      isEditing: false,
      endDate: moment(this.props.auction.SlutDatum).format('ddd Do MMM, hh:mm')
    }
  }

  edit = () => {
    this.setState({ isEditing: true })
  }

  cancel = () => {
    this.setState({ isEditing: false })
  }

  save = () => {
    let updatedAuction = this.state.auction
    let imgStart = updatedAuction.Beskrivning.indexOf('<')
    updatedAuction['Titel'] = document.getElementById('title').value
    updatedAuction['Beskrivning'] =
      document.getElementById('description').value +
      updatedAuction.Beskrivning.substring(imgStart)
    this.setState({ auction: updatedAuction })
    updateAuction(
      this.state.auction.Gruppkod,
      this.state.id,
      this.state.auction
    )
    this.props.save(updatedAuction)
    this.cancel()
  }

  delete = () => {
    deleteAuction(this.state.auction.Gruppkod, this.state.id)
    this.props.delete(this.state.auction)
    this.setState({ auction: null })
  }

  getDescription = () => {
    const { auction } = this.state

    const index = auction.Beskrivning.indexOf('<')
    const description = auction.Beskrivning.substring(0, index)

    return description
  }

  render() {
    if (this.state.auction != null)
      if (this.state.isEditing) {
        return (
          <div className="padding-20">
            <div className="input-field">
              <input
                className="text-black"
                id="title"
                type="text"
                defaultValue={this.state.auction.Titel}
              />
              <label className="active" htmlFor="title">
                Title
              </label>
            </div>
            <div className="input-field">
              <input
                className="text-black"
                id="description"
                defaultValue={this.getDescription()}
              />
              <label className="active" htmlFor="description">
                Description
              </label>
            </div>
            <div className="card-action center">
              <button
                className="btn waves-effect waves-light"
                onClick={this.save}
              >
                Save
              </button>
              {this.props.hasBids ? null : (
                <button
                  className="btn waves-effect waves-light"
                  onClick={this.delete}
                >
                  Delete
                </button>
              )}
              <button
                className="btn waves-effect waves-light"
                onClick={this.cancel}
              >
                Cancel
              </button>
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <div className="card-content card-action">
              <span className="card-title" id="title">
                {this.state.auction.Titel}
              </span>
              <p id="description" className="margin-bottom-40">
                {this.getDescription()}
              </p>
              <span className="red-text lighten-1">
                Ends: {this.state.endDate}
              </span>
              <span className="created-by grey-text darken-4  ">
                Created by: {this.state.auction.SkapadAv}
              </span>
            </div>
            <div className="card-action center">
              <button
                className="btn waves-effect waves-light"
                onClick={this.edit}
              >
                Edit
              </button>
            </div>
          </div>
        )
      }

    return null
  }
}
