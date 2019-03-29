import React from 'react';
import AuctionSummary from './AuctionSummary.js';
import {Link} from 'react-router-dom';

const AuctionList = ({ auctions }) =>
{
        let AuctionsItems = auctions.map((auction) => 
        {
            return (<Link><AuctionSummary auction={auction}/></Link>)
        });

        return (<div>{ AuctionsItems }</div>)
}

export default AuctionList;