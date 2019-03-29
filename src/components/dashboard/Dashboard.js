import React from 'react';
import Auctionlist from '../auction/AuctionList';

const Dashboard = ({ auctions }) => {
  return (
    <div>
      <Auctionlist auctions={auctions} />
    </div>
  );
};

export default Dashboard;
