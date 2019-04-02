import React, { Component } from 'react'
import { getBids } from '../API/WebAPI'


class AuctionSummary extends Component {
    // state = {
    //     bid: {}
    // }
    // componentDidMount()
    // {
    //     const ID = this.props.auction.AuktionID
    //     getBids('7', ID).then((bids) => {
    //        const bid = [...bids].reduce((a,b) =>  b.Summa > a.Summa ? b : a)
    //        .then(() =>{
    //         this.setState({
    //             bid
    //         })
    //        })

    //     })
    // }

    render() {
        
        const {auction} = this.props
        if(!auction){return null}
        return (
            <div className="App">
                <div className="limited-width">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">{auction.Titel}</span>
                                <p className="card-description">{auction.Beskrivning}</p>
                                {/* <h5>{auction.currentbid}</h5> */}
                                <br />
                                <p className="auctions-dates">{auction.StartDatum} &nbsp; -  {auction.SlutDatum}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuctionSummary
