import React, { Component } from 'react'
import AuctionSummary from './AuctionSummary.js'
import { Link } from 'react-router-dom'
import { getBids } from '../API/WebAPI'

class AuctionList extends Component {
  state = {
    bids: []
  }
  getAuctionBids = (id) => {
    const data = getBids('7', id).then((data) => {
      return data
    })

    return data
  }

  render() {
    const { auctions } = this.props
    let auctionsItems = auctions.map((auction) => {
      return (
        <Link to={'/auction/' + auction.AuktionID} key={auction.AuktionID}>
          <AuctionSummary
            auction={auction}
            bids={this.getAuctionBids(auction.AuktionID)}
          />
        </Link>
      )
    })

    return auctionsItems.length ? (
      <div>{auctionsItems}</div>
    ) : (
      <div>
        <h6 className="naf">No auctions found</h6>
      </div>
    )
  }
}

export default AuctionList
