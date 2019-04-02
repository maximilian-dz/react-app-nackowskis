import React from 'react'

const AuctionSummary = ({ auction }) => {
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

export default AuctionSummary
