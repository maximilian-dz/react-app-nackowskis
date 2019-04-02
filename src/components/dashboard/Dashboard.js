import React from 'react'
import AuctionList from '../auction/AuctionList'

const Dashboard = ({ auctions }) => {
    return (
        <div>
            <div className="dashboard container">
                <h3 className="dashboard-title">Active Auctions</h3>
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
