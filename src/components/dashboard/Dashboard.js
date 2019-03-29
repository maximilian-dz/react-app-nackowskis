import React,{Component} from 'react';
import Auctionlist from '../auction/AuctionList';

export default class Dashboard extends Component
{
    render()
    {
        let AuctionsArray = [];

        return(<div>
            <Auctionlist auctions = { AuctionsArray } />
        </div>);
    }
}