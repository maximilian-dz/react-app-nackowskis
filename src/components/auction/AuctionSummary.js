import React from 'react';

const AuctionSummary = ({ auction }) =>
{
        return(<div className="App">
            <h3>{ auction.Titel }</h3>
            <p>{ auction.Beskrivning }</p>
            <p>{ auction.SlutDatum }</p>
            <p>{ auction.SlutDatum }</p>
            <button> Open </button>
        </div>);
}

export default AuctionSummary;