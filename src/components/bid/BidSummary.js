import React from 'react'

const BidSummary = ({ bids }) => {
  console.log(bids)
  return bids && bids.length !== 0 ? (
    <div className="card z-depth-0">
      <div className="card-content">
        <span className="card-title">{bids[0].Summa} SEK</span>
        <p />
      </div>
      <div className="card-action grey lighten-4 grey-text">
        <div>Budgivare: {bids[0].Budgivare}</div>
      </div>
    </div>
  ) : null
}

export default BidSummary
