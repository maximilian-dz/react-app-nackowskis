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
    return (
      <React.Fragment>
        <div className="row">
          <PlaceBid />
          <h5 className="center no-margin">Bidding History</h5>
        </div>
        <div className="container">
          <div className="row center">
            <div className="col s12 m12">
              <div className="bid-list section">
                <BidSummary bids={this.state.bids} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BidList
