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
      badge = 'BID: ' + this.state.bid + ' SEK'
    } else {
      badge = 'ESTIMATE: ' + auction.Utropspris + ' SEK'
    }
    return badge
  }

  getImg = () => {
    const { auction } = this.props

    const index = auction.Beskrivning.indexOf('<')
    const length = auction.Beskrivning.length
    const img = auction.Beskrivning.substring(index, length)

    return img
  }

  getDescription = () => {
    const { auction } = this.props

    const index = auction.Beskrivning.indexOf('<')
    const description = auction.Beskrivning.substring(0, index)

    return description
  }

  render() {
    const { auction } = this.props
    const endDate = moment(auction.SlutDatum).format('ddd Do MMM, hh:mm')
    const badge = this.getBadge()
    const img = this.getImg()
    console.log(img)
    // const description = this.getDescription()

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
              {/* <img
                className="summary-img-width"
                src="https://cdn.shopify.com/s/files/1/1245/1481/products/Classic_Plus_Side_Profile_web_1024x1024.jpg?v=1531164809"
                alt="auction-pic"
              /> */}
              {img}
              <span className="card-title summary-title">{auction.Titel}</span>
              {content}
            </div>
            <div className="card-action summary-content">
              <p>Bids: {this.state.bidCount}</p>
              <p>Auction Ends: {endDate}</p>
              <p>{auction.AuktionID}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AuctionSummary
