import React from 'react'
import AuctionList from '../auction/AuctionList'

const Dashboard = ({ auctions, isSearch }) => {
  const title = isSearch ? 'Search Results' : 'Active Auctions'
  return (
    <div>
      <div className="dashboard container">
        <h3 className="dashboard-title">{title}</h3>
        <div className="row">
          <div className="col s12 m12">
            <AuctionList auctions={auctions} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
