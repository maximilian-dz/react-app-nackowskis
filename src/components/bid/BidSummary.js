import React from 'react'

const BidSummary = ({ bid }) => {
  return bid && bid !== undefined ? (
    <li className="collection-item avatar valign-wrapper">
      <i className="material-icons circle black">person</i>
      <span className="title">{bid.Budgivare}</span>
      <span className="test-class">{bid.Summa} SEK</span>
    </li>
  ) : null
}

export default BidSummary
