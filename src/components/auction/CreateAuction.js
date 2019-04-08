import React, { Component } from 'react'
import moment from 'moment'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

export default class CreateAuction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Titel: undefined,
      Beskrivning: undefined,
      StartDatum: moment().format('YYYY-MM-DDTHH:MM:SS'),
      SlutDatum: undefined,
      Utropspris: undefined,
      SkapadAv: undefined
    }
    this.datepicker = React.createRef()
  }

  componentDidMount = () => {
    const options = {
      onSelect: this.handleDateChange,
      autoClose: true
    }
    M.Datepicker.init(this.datepicker.current, options)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.props.history.push('/')
  }

  handleChange = (e) => {
    if (e.target.name === 'Beskrivning' || e.target.name === 'img') {
      this.setState({
        Beskrivning:
          this.refs.Beskrivning.value +
          "<img src='" +
          this.refs.img.value +
          "' alt='auction-pic'/>"
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  handleDateChange = (date) => {
    const timeNow = moment().format('hh:mm:ss')
    const endDate = moment(date).format('YYYY-MM-DDT') + timeNow

    this.setState({
      SlutDatum: endDate
    })
  }

  render() {
    return (
      <div className="container margin-top-50">
        <div className="row create-auction">
          <h5 className="center white-text">Add Auction</h5>
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="input-field">
              <i className="material-icons prefix">text_format</i>
              <label htmlFor="Titel">Title </label>
              <input
                id="Titel"
                name="Titel"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <i className="material-icons prefix">description</i>
              <label htmlFor="Beskrivning">Description </label>
              <input
                id="Beskrivning"
                name="Beskrivning"
                ref="Beskrivning"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <i className="material-icons prefix">date_range</i>
              <label htmlFor="StartDatum">Start Date </label>
              <input
                className="black-border"
                type="text"
                id="StartDatum"
                name="StartDatum"
                value={moment().format('MMM DD, YYYY')}
                readOnly
              />
            </div>

            <div className="input-field">
              <i className="material-icons prefix">date_range</i>
              <label htmlFor="SlutDatum">End Date </label>
              <input
                type="text"
                className="datepicker"
                id="SlutDatum"
                name="SlutDatum"
                ref={this.datepicker}
              />
            </div>

            <div className="input-field">
              <i className="material-icons prefix">attach_money</i>
              <label htmlFor="Utropspris">Starting Price </label>
              <input
                id="Utropspris"
                name="Utropspris"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <i className="material-icons prefix">image</i>
              <label htmlFor="img">Add Picture</label>
              <input
                type="text"
                ref="img"
                id="img"
                name="img"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <i className="material-icons prefix">border_color</i>
              <label htmlFor="SkapadAv">Created by </label>
              <input
                id="SkapadAv"
                name="SkapadAv"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <button className="btn btn:hover center">Save Auction</button>
          </form>
        </div>
      </div>
    )
  }
}
