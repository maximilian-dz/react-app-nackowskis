import React from 'react';
import AuctionList from '../auction/AuctionList';

const Dashboard = ({ auctions }) => {
  return (
    <div>
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m12">
            <AuctionList auctions={auctions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
