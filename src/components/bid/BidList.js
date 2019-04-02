import React, { Component } from 'react'
import { getBids } from '../API/WebAPI'
import PlaceBid from './PlaceBid'
import BidSummary from './BidSummary'

export class BidList extends Component {
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
    if (!this.state.bids) {
      return null
    }
    const { bids } = this.state

    const bidList = bids.map((bid) => {
      return (
        <div className="container" key={bid.BudID}>
          <div className="center">
            <div className="col s12 m12">
              <div className="bid-list section no-padding-bottom ">
                <BidSummary bid={bid} />
              </div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <React.Fragment>
        <div className="row">
          <PlaceBid />
        </div>
        <h5 className="center no-margin text-light">Bidding History</h5>
        <div className="container">
          <ul className="collection with-header no-border">{bidList}</ul>
        </div>
      </React.Fragment>
    )
  }
}

export default BidList
