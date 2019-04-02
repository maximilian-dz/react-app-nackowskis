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
        const { auction } = this.props
        console.log(auction)

        var date = new Date()
        var day = date.getDate()
        var month = date.getMonth() + 1
        var year = date.getFullYear()
        var currentDate = year + "-" + month + "-" + day;

        if (auction.SlutDatum < currentDate) {
            return null
        }

        else {
            if (!auction) { return null }
            return (
                <div className="App">
                    <div className="limited-width">
                        <div className="col s12 m6">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">{auction.Titel}</span>
                                    {/* <h5>{auction.Utropspris}</h5> */}
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
}

export default AuctionSummary
