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
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">{auction.Titel}</span>
                                <h5 className="current-bid">
                                    Nuvarande bud: {auction.Utropspris}
                                </h5>
                                <br />
                                <p className="auctions-dates">
                                    {auction.StartDatum}&nbsp;- {auction.SlutDatum}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuctionSummary
