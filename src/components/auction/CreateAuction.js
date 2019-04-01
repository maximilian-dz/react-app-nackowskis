import React,{Component} from 'react';
import {createAuction} from '../API/WebAPI';

//EJ KLAR

export default class CreateAuction extends Component{

    constructor(props)
    {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event)
    {
        event.preventDefault();
        const data = new FormData(event.target);

        //Fixa klart post metoden
        fetch(createAuction, {
            method: 'POST',
            body: data,
            // method: 'POST',
            // body: JSON.stringify(),
            // headers: {
            //     'Accept': 'application/json, text/plain, */*',
            //     'Content-Type': 'application/json'
            //}
        });
    }

    render()
    {
        return(<form onSubmit={this.handleSubmit}>
            <label htmlFor="Title">Title: </label>
            <input id="Titel" name="Titel" type="text"></input>

            <label htmlFor="Beskrivning">Description: </label>
            <input id="Beskrivning" name="Beskrivning" type="text"></input>

            <label htmlFor="StartDatum">Start Date: </label>
            <input id="StartDatum" name="StartDatum" type="date"></input>

            <label htmlFor="SlutDatum">End Date: </label>
            <input id="SlutDatum" name="SlutDatum" type="date"></input>

            <label htmlFor="Price">Starting Price: </label>
            <input id="Utropspris" name="Utropspris" type="number"></input>

            <label htmlFor="Beskrivning">Created by: </label>
            <input id="SkapadAv" name="SkapadAv" type="text"></input>

            <button>Save Auction</button>
        </form>);
    }

}
