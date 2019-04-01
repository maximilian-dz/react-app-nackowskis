import React, {Component} from 'react'
import {getAuction} from '../API/WebAPI'

export default class AuctionDetails extends Component {

    constructor(props){
        super(props)

        this.state = {
            id : this.props.match.params.AuktionID, 
            auction: null
        }
        this.update = this.update.bind(this)
    }

    componentWillMount(){
        getAuction(7, this.state.id).then((json) =>{
            this.setState({auction: json})
        })
    }

    render(){
        if(this.state.auction != null){
            return (
                <div>
                    <input id="Title" placeholder="Title" defaultValue={this.state.auction.Titel}></input>
                    <p id="Description">{this.state.auction.Beskrivning}</p>
                    <button onClick={this.update}>Update</button>
                </div>)
        }
        return null
    }

    update(){
        //Make a JSON obj and use WebAPI
        alert("TODO: Update!")
    }
}