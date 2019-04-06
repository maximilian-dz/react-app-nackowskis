import React, { Component } from 'react'
import moment from 'moment'

class AuctionSummary extends Component {
  state = {
    bid: '',
    bidCount: ''
  }
  componentDidMount = () => {
    const { bids } = this.props
    if (bids) {
      bids.then((res) => {
        const bid = [...res].reduce((max, bid) => {
          return bid.Summa > max ? bid.Summa : max
        }, 0)
        this.setState({
          bid,
          bidCount: res.length
        })
      })
    }
  }

  getBadge = () => {
    const { auction } = this.props
    const { bid } = this.state
    let badge = ''

    if (Date.parse(auction.SlutDatum) < Date.now()) {
      badge = 'Auction Ended'
    } else if (bid !== 0) {
      badge = 'BID: ' + auction.Utropspris + ' SEK'
    } else {
      badge = 'ESTIMATE: ' + this.state.bid + ' SEK'
    }
    return badge
  }

  render() {
    const { auction } = this.props
    const endDate = moment(auction.SlutDatum).format('ddd Do MMM, hh:mm')
    const badge = this.getBadge()

    const content =
      badge === 'Auction Ended' ? (
        <span className="card-title summary-bid bid-color-alt">{badge}</span>
      ) : (
        <span className="card-title summary-bid bid-color">{badge}</span>
      )

    return (
      <div>
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image center summary-img">
              <img
                className="summary-img-width"
                src="https://cdn.shopify.com/s/files/1/1245/1481/products/Classic_Plus_Side_Profile_web_1024x1024.jpg?v=1531164809"
                alt="auction-pic"
              />
              <span className="card-title summary-title">{auction.Titel}</span>
              {content}
            </div>
            <div className="card-action summary-content">
              <p>Bids: {this.state.bidCount}</p>
              <p>Auction Ends: {endDate}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AuctionSummary
