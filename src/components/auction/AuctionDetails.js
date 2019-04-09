import React, { Component } from 'react'
import { getAuction, getBids } from '../API/WebAPI'
import BidList from '../bid/BidList'
import AuctionInnerDetails from '../auction/AuctionInnerDetails'

export default class AuctionDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.AuktionID,
      auction: null,
      isEditing: false,
      bids: [],
      hasBids: false
      // group: this.props.GroupId,
    }
  }

  componentWillMount() {
    const { id } = this.state

    getAuction(2020, id).then((auction) => {
      getBids(2020, id).then((bids) => {
        const hasBids = bids.length ? true : false
        this.setState({
          bids,
          auction,
          hasBids
        })
      })
    })
  }

  save = (auction) => {
    this.props.onChange(auction)
  }

  delete = (auction) => {
    this.props.deleteAuction(auction)
    this.props.history.push('/')
  }

  getImg = () => {
    const { auction } = this.state
    var start = auction.Beskrivning.indexOf("'") + 1
    var end = auction.Beskrivning.lastIndexOf("'")
    var url = auction.Beskrivning.substring(start, end)

    return url
  }

  getBadge = () => {
    const { auction } = this.state

    if (!auction) {
      return null
    }
    let badge = ''

    if (Date.parse(auction.SlutDatum) < Date.now()) {
      badge = 'Auction Ended'
    } else {
      badge = 'ESTIMATE: ' + auction.Utropspris + ' SEK'
    }
    return badge
  }

  render() {
    const { auction } = this.state
    const badge = this.getBadge()

    console.log(badge)

    const content =
      badge === 'Auction Ended' ? (
        <span className="card-title summary-bid bid-color-alt">{badge}</span>
      ) : (
        <span className="card-title summary-bid bid-color">{badge}</span>
      )

    if (auction != null) {
      return (
        <div className="container margin-top-50">
          <div className="row">
            <div className="col s12 16 flexbox">
              <div className="card card-img">
                <div className="card-image">
                  <img src={this.getImg()} alt="auction" />
                  <a
                    href="https://www.google.com"
                    className="halfway-fab btn-floating red pulse"
                  >
                    <i className="material-icons">favorite</i>
                  </a>
                  {content}
                </div>
                <AuctionInnerDetails
                  id={this.state.id}
                  auction={this.state.auction}
                  isEditing={this.state.isEditing}
                  save={this.save}
                  delete={this.delete}
                />
              </div>
            </div>
          </div>
          {Date.parse(auction.SlutDatum) > Date.now() ? (
            <BidList auctionId={this.state.id} bids={this.state.bids} />
          ) : null}
        </div>
      )
    }
    return null
  }
}
