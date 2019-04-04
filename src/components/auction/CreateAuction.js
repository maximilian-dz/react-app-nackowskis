import React, { Component } from 'react'
import moment from 'moment'

export default class CreateAuction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Titel: undefined,
      Beskrivning: undefined,
      StartDatum: undefined,
      SlutDatum: undefined,
      Utropspris: undefined,
      SkapadAv: undefined,
      date: moment().format('YYYY-MM-DD')
    }
    this.endDate = React.createRef()
  }

  componentDidMount = () => {}

  handleSubmit = (e) => {
    e.preventDefault()

    const node = this.endDate.current
    const date = Date.parse(node.value)
    const dateNow = moment().format('YYYY-MM-DDTHH:MM:SS')
    const timeNow = moment().format('HH:MM:SS')
    const endDate = moment(date).format('YYYY-MM-DDT') + timeNow

    this.setState(
      {
        StartDatum: dateNow,
        SlutDatum: endDate
      },
      () => {
        this.props.onSubmit(this.state)
        this.props.history.push('/')
      }
    )
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="container margin-top-50">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="input-field">
              <label htmlFor="Title">Title </label>
              <input
                id="Titel"
                name="Titel"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="Beskrivning">Description </label>
              <input
                id="Beskrivning"
                name="Beskrivning"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="StartDatum">Start Date </label>
              <input
                type="text"
                id="StartDatum"
                name="StartDatum"
                value={this.state.date}
                readOnly
                placeholder="Start Date"
              />
            </div>

            <div className="input-field">
              <label htmlFor="SlutDatum">End Date </label>
              <input
                type="text"
                className="datepicker"
                id="SlutDatum"
                name="SlutDatum"
                onChange={this.handleChange}
                ref={this.endDate}
              />
            </div>

            <div className="input-field">
              <label htmlFor="Price">Starting Price </label>
              <input
                id="Utropspris"
                name="Utropspris"
                type="number"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="Beskrivning">Created by </label>
              <input
                id="SkapadAv"
                name="SkapadAv"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <button className="btn btn:hover">Save Auction</button>
          </form>
        </div>
      </div>
    )
  }
}
