import React, { Component } from 'react'
import { getAuction, updateAuction, deleteAuction } from '../API/WebAPI'
import BidList from '../bid/BidList'

export default class AuctionDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.AuktionID,
      // group: this.props.match.params.GroupID,
      auction: null,
      isEditing: false
    }
  }

  componentWillMount() {
    getAuction(2020, this.state.id).then((json) => {
      this.setState({ auction: json })
    })
  }

  edit = () => {
    this.setState({ isEditing: true })
  }

  cancel = () => {
    this.setState({ isEditing: false })
  }

  save = () => {
    let updatedAuction = this.state.auction
    updatedAuction['Titel'] = document.getElementById('title').value
    updatedAuction['Beskrivning'] = document.getElementById('description').value
    this.setState({ auction: updatedAuction })
    updateAuction(
      this.state.auction.Gruppkod,
      this.state.id,
      this.state.auction
    )
    this.props.onChange(updatedAuction)
  }

  delete = () => {
    deleteAuction(this.state.auction.Gruppkod, this.state.id)
    this.setState({ auction: null })
    this.render()
  }

  render() {
    if (this.state.auction != null) {
      if (this.state.isEditing) {
        return (
          <div>
            <div className="input-field">
              <input
                id="title"
                type="text"
                defaultValue={this.state.auction.Titel}
              />
              <label className="active" htmlFor="title">
                Title
              </label>
            </div>
            <div className="input-field">
              <textarea
                className="materialize-textarea"
                id="description"
                defaultValue={this.state.auction.Beskrivning}
              />
              <label className="active" htmlFor="description">
                Description
              </label>
            </div>
            <button onClick={this.save}>Save</button>
            <button onClick={this.delete}>Delete</button>
            <button onClick={this.cancel}>Cancel</button>
            <BidList auctionId={this.state.id} />
          </div>
        )
      } else {
        return (
          <div className="container">
            <div className="row">
              <div className="col s12 16">
                <div className="card">
                  <div className="card-image">
                    <img
                      src="https://www.bankeauctions.com//public/uploads/news_blog/71a2599f7a03b610941015d20c8102bb.jpg"
                      alt="auction"
                      width="300"
                      height="500"
                    />
                    <a
                      href="https://www.google.com"
                      className="halfway-fab btn-floating red pulse"
                    >
                      <i className="material-icons">favorite</i>
                    </a>
                  </div>

                  <div className="card-content">
                    <span className="card-title" id="title">
                      <h3>{this.state.auction.Titel}</h3>
                    </span>
                    <p id="description">{this.state.auction.Beskrivning}</p>
                  </div>
                  <div className="card-action">
                    <button className="btn btn:hover" onClick={this.edit}>
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <BidList auctionId={this.state.id} />
          </div>
        )
      }
    }
    return null
  }
}
