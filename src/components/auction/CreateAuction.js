import React,{Component} from 'react';

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

        //Tog bara en länk for now
        fetch('http://nackowskis.azurewebsites.net/api/Auktion/', {
            method: 'POST',
            body: data,
        });
    }

    render()
    {
        return(<form onSubmit={this.handleSubmit}>
            <label htmlFor="Title">Title: </label>
            <input id="Titel" name="Titel" type="text"></input>
            <label htmlFor="Beskrivning">Description: </label>
            <input id="Beskrivning" name="Beskrivning" type="text"></input>
        </form>);
    }

}
