import React from 'react';
import AuctionSummary from './AuctionSummary.js';
import { Link } from 'react-router-dom';

const AuctionList = ({ auctions }) => {
  let auctionsItems = auctions.map((auction) => {
    return (
      <Link to={'/auction/' + auction.AuktionID} key={auction.AuktionID}>
        <AuctionSummary auction={auction} />
      </Link>
    );
  });

  return auctionsItems.length ? (
    <div>{auctionsItems}</div>
  ) : (
    <div>
      <p>No auctions found</p>
    </div>
  );

  //   return  <div>{AuctionsItems}</div>;
};

export default AuctionList;
