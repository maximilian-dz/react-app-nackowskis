import React, { Component } from 'react'
import { getAuction } from '../API/WebAPI'
import BidList from '../bid/BidList'
import AuctionInnerDetails from '../auction/AuctionInnerDetails'

export default class AuctionDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.AuktionID,
      auction: null,
<<<<<<< HEAD
      isEditing: false,
      bids: [],
      delError: null
      // group: this.props.GroupId,
=======
      isEditing: false
>>>>>>> 956d457f4cb0701ca95b9b3af4611de1f7181776
    }
  }

  componentWillMount() {
<<<<<<< HEAD
    const { id } = this.state

    getAuction(2020, id).then((auction) => {
      getBids(2020, id).then((bids) => {
        this.setState({
          bids,
          auction
        })
      })
=======
    getAuction(2020, this.state.id).then((json) => {
      this.setState({ auction: json })
>>>>>>> 956d457f4cb0701ca95b9b3af4611de1f7181776
    })
  }

  save = (auction) => {
    this.props.onChange(auction)
  }

  delete = (auction) => {
    const { bids } = this.state
    if (bids.length) {
      this.setState({
        delError: 'Auction has bids, cannot be deleted'
      })
    } else {
      this.props.deleteAuction(auction)
      this.props.history.push('/')
    }
  }

  render() {
    const { auction } = this.state
    if (auction != null) {
      return (
        <div className="container">
          <div className="row">
            <div className="col s12 16">
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://khsbicycles.com/wp-content/plugins/vslider/timthumb.php?src=http%3A%2F%2Fkhsbicycles.com%2Fwp-content%2Fuploads%2F2016%2F07%2Fkhs-bicycles-masthead-1000x300-fat-bike-tree.jpg&w=1000&h=300&zc=1&q=80"
                    alt="auction"
                  />
                  <a
                    href="https://www.google.com"
                    className="halfway-fab btn-floating red pulse"
                  >
                    <i className="material-icons">favorite</i>
                  </a>
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
            <BidList auctionId={this.state.id} />
          ) : null}
        </div>
      )
    }
    return null
  }
}
