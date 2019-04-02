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
          <div className="row center">
            <div className="col s12 m12">
              <div className="bid-list section">
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
          <h5 className="center no-margin">Bidding History</h5>
        </div>
        {bidList}
      </React.Fragment>
    )
  }
}

export default BidList
