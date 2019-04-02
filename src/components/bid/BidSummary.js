import React from 'react'

const BidSummary = ({ bid }) => {
  console.log(bid)
  return bid && bid !== undefined ? (
    <div className="card z-depth-0">
      <div className="card-content">
        <span className="card-title">{bid.Summa} SEK</span>
        <p />
      </div>
      <div className="card-action grey lighten-4 grey-text">
        <div>Budgivare: {bid.Budgivare}</div>
      </div>
    </div>
  ) : null
}

export default BidSummary
