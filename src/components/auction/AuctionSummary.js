import React, { Component } from 'react';
import App from '../../App.js';

export default class AuctionSummary extends Component
{
    render()
    {
        return(<div className="App">
            <h3>{ this.props.name }</h3>
            <p>{ this.props.description }</p>
            <button> Open </button>
        </div>);
    }
}

