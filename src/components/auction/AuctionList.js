import React, { Component } from 'react';
import AuctionSummary from './AuctionSummary.js';

export default class Auctionlist extends Component
{
    render()
    {
        let AuctionsItems = this.props.auctions.map((auction) => 
        {
            return (<AuctionSummary name={auction.name} description={auction.description}/>)
        });

        return (<div>{ AuctionsItems }</div>)
    }
}
