import React from 'react';

const AuctionSummary = ({ auction }) =>
{
        // return(<div className="App">
        //     <h3>{ auction.Titel }</h3>
        //     <p>{ auction.Beskrivning }</p>
        //     <p>{ auction.SlutDatum }</p>
        //     <p>{ auction.SlutDatum }</p>
        //     <button> Open </button>
        // </div>);

        return(<div className="App">
        <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{ auction.Titel }</span>
          <p>{ auction.Beskrivning }</p>
          <br></br>
          <p>{ auction.StartDatum } &nbsp; { auction.SlutDatum }</p>
        </div>
      </div>
    </div>
  </div>
        </div>)
}

export default AuctionSummary;