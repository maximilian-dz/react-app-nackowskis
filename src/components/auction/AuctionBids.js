import React, { Component } from 'react';
import { getBids } from '../API/WebAPI';

export class AuctionBids extends Component {
  state = {
    bids: []
  };
  componentWillMount() {
    getBids('7', '2113').then((bids) => {
      this.setState({
        bids
      });
    });
  }
  render() {
    const bids = this.state.bids.length ? (
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{this.state.bids[0].Summa} SEK</span>
          <p />
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Budgivare: {this.state.bids[0].Budgivare}</div>
        </div>
      </div>
    ) : null;
    return (
      <div className="container">
        <div className="row center">
          <div className="col s12 m12">
            <div className="bid-list section">{bids}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuctionBids;
