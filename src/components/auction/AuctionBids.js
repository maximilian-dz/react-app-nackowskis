import React, { Component } from 'react'
import { getBids } from '../API/WebAPI'

export class AuctionBids extends Component {
  state = {
    bids: []
  }
  componentWillMount() {
    getBids('7', '2113').then((bids) => {
      this.setState({
        bids
      })
    })
  }
  render() {
    const bids = this.state.bids.length ? (
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{this.state.bids[0].Summa} SEK</span>
          <p />
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Budgivare: {this.state.bids[0].Budgivare}</div>
        </div>
      </div>
    ) : null
    return (
      <React.Fragment>
        <div className="row">
          <form className="col s12">
            <div className="row flexbox no-margin">
              <div className="input-field col">
                <input id="bid" type="text" class="validate center" />
                <label htmlFor="bid">Enter your bid</label>
              </div>
              <div className="input-field col">
                <button className="btn waves-effect waves-light" type="submit">
                  Place Bid!
                </button>
              </div>
            </div>
          </form>
          <h5 className="center no-margin">Bidding History</h5>
        </div>
        <div className="container">
          <div className="row center">
            <div className="col s12 m12">
              <div className="bid-list section">{bids}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default AuctionBids
