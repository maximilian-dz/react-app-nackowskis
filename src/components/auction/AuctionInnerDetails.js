import React, { Component } from 'react'
import { updateAuction, deleteAuction } from '../API/WebAPI'

export default class AuctionInnerDetails extends Component {
    constructor(props) {
        super(props)
        const moment = require('moment')
        this.state = {
            id: this.props.id,
            auction: this.props.auction,
            isEditing: false,
            endDate:  moment(this.props.auction.SlutDatum).format('ddd Do MMM, hh:mm')
        }
    }

    edit = () => {
        this.setState({ isEditing: true })
    }

    cancel = () => {
        this.setState({ isEditing: false })
    }

    save = () => {
        let updatedAuction = this.state.auction
        updatedAuction['Titel'] = document.getElementById('title').value
        updatedAuction['Beskrivning'] = document.getElementById('description').value
        this.setState({ auction: updatedAuction })
        updateAuction(
            this.state.auction.Gruppkod,
            this.state.id,
            this.state.auction
        )
        this.props.save(updatedAuction)
        this.cancel()
    }

    delete = () => {
        deleteAuction(this.state.auction.Gruppkod, this.state.id)
        this.props.delete(this.state.auction)
        this.setState({ auction: null })
    }

    render() {
        if(this.state.auction != null)
        if (this.state.isEditing) {
            return (
                <div>
                    <div className="input-field">
                        <input
                            className="text-black"
                            id="title"
                            type="text"
                            defaultValue={this.state.auction.Titel}
                        />
                        <label className="active" htmlFor="title">
                            Title
                        </label>
                    </div>
                    <div className="input-field">
                        <input
                            className="text-black"
                            id="description"
                            defaultValue={this.state.auction.Beskrivning}
                        />
                        <label className="active" htmlFor="description">
                            Description
                        </label>
                    </div>
                    <div className="card-action">
                        <button className="btn waves-effect waves-light" onClick={this.save}>Save</button>
                        <button className="btn waves-effect waves-light" onClick={this.delete}>Delete</button>
                        <button className="btn waves-effect waves-light" onClick={this.cancel}>Cancel</button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="card-content">
                        <span className="card-title" id="title">
                            {this.state.auction.Titel}
                        </span>
                        <p id="description">{this.state.auction.Beskrivning}</p>
                        <p>Ends: {this.state.endDate}</p>
                        <p className="created-by">Created by: {this.state.auction.SkapadAv}</p>
                    </div>
                    <div className="card-action">
                        <button className="btn waves-effect waves-light" onClick={this.edit}>
                            Edit
                        </button>
                    </div>
                </div>
            )
        }

        return null
    }
}