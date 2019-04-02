import React, { Component } from 'react'
import { getAuction, updateAuction, deleteAuction } from '../API/WebAPI'

export default class AuctionDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.AuktionID,
            // group: this.props.match.params.GroupID,
            auction: null,
            isEditing: false
        }
    }

    componentWillMount() {
        getAuction(2020, this.state.id).then((json) => {
            this.setState({ auction: json })
        })
    }

    render() {
        if (this.state.auction != null) {
            if (this.state.isEditing) {
                return <div>
                    <div className="input-field">
                        <input id="title" type="text" defaultValue={this.state.auction.Titel} />
                        <label className="active" htmlFor="title">Title</label>
                    </div>
                    <div className="input-field">
                        <textarea className="materialize-textarea" id="description" defaultValue={this.state.auction.Beskrivning}></textarea>
                        <label className="active" htmlFor="description">Description</label>
                    </div>
                    <button onClick={this.save}>Save</button>
                    <button onClick={this.delete}>Delete</button>
                    <button onClick={this.cancel}>Cancel</button>
                </div>
            }
            else {
                return <div>
                    <h3>{this.state.auction.Titel}</h3>
                    <p id="description">{this.state.auction.Beskrivning}</p>
                    <button onClick={this.edit}>Edit</button>
                </div>
            }
        }
        return null
    }

    edit = () => { this.setState({ isEditing: true }) }

    cancel = () => { this.setState({ isEditing: false }) }

    save = () => {
        let updatedAuction = this.state.auction
        updatedAuction["Titel"] = document.getElementById("title").value
        updatedAuction["Beskrivning"] = document.getElementById("description").value
        this.setState({ auction : updatedAuction})
        updateAuction(this.state.auction.Gruppkod, this.state.id, this.state.auction)
        this.props.onChange(updatedAuction)
    }

    delete = () => {
        deleteAuction(this.state.auction.Gruppkod, this.state.id)
        this.setState({auction : null})
        this.render()
    }
}
