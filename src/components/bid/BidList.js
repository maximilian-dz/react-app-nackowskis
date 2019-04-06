import React, { Component } from 'react'
import { getBids } from '../API/WebAPI'
import PlaceBid from './PlaceBid'
import BidSummary from './BidSummary'
import { placeBid } from '../API/WebAPI'

export class BidList extends Component {
  state = {
    bids: [],
    msg: null
  }
  componentWillMount() {
    const { auctionId } = this.props

    getBids('2020', auctionId).then((bids) => {
      this.setState({
        bids
      })
    })
  }
  handleBid = (newBid) => {
    let msg = ''
    const { auctionId } = this.props
    const highestBid = [...this.state.bids].reduce((max, bid) => {
      return bid.Summa > max ? bid.Summa : max
    }, 0)

    if (highestBid >= newBid.Summa) {
      msg = 'Your bid must be higher than ' + highestBid
      this.setState({
        msg
      })
    } else {
      newBid.AuktionID = auctionId
      placeBid('2020', auctionId, newBid).then(() =>
        getBids('2020', auctionId).then((bids) => {
          this.setState({
            bids,
            msg: null
          })
        })
      )
    }
  }
  render() {
    const { bids } = this.state
    const bidList = bids.length
      ? bids
          .sort((a, b) => (b.Summa > a.Summa ? 1 : -1))
          .map((bid) => {
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
      : null

    return (
      <React.Fragment>
        <div className="row">
          <PlaceBid msg={this.state.msg} onSubmit={this.handleBid} />
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
