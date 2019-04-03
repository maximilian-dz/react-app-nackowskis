import React, { Component } from 'react'

class AuctionSummary extends Component {
  state = {
    bid: ''
  }
  componentDidMount = () => {
    const { bids } = this.props
    if (bids) {
      bids.then((res) => {
        const bid = [...res].reduce((max, bid) => {
          return bid.Summa > max ? bid.Summa : max
        }, 0)
        this.setState({
          bid
        })
      })
    }
  }

  render() {
    const { auction } = this.props

    return (
      <div className="App">
        <div className="limited-width">
          <div className="col s12 m5">
            <div className="card">
              <div className="card-image">
                <img
                  src="http://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920.jpg"
                  alt="auction-pic"
                />
                <div className="card-content">
                  <h5>{auction.Titel}</h5>
                  <p>Nuvarande bud: {this.state.bid}</p>
                  <p>Utropspris: {auction.Utropspris}</p>
                </div>
                <div className="card-action">
                  <p>Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // {<div className="limited-width">
      //     <div className="col s12 m6">
      //         <div className="card blue-grey darken-1">
      //             <div className="card-content white-text">
      //                 <span className="card-title">{auction.Titel}</span>
      //                 <h5 className="current-bid">
      //                     Nuvarande bud: {auction.Utropspris}
      //                 </h5>
      //                 <br />
      //                 <p className="auctions-dates">
      //                     {auction.StartDatum}&nbsp;- {auction.SlutDatum}
      //                 </p>
      //             </div>
      //         </div>
      //     </div>
      // </div>}
    )
  }
}

export default AuctionSummary
