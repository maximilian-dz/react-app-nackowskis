import React from 'react'

const PlaceBid = (props) => {
  return (
    <form className="col s12">
      <div className="row flexbox no-margin">
        <div className="input-field col">
          <input id="bid" type="text" className="validate center" />
          <label htmlFor="bid">Enter your bid</label>
        </div>
        <div className="input-field col">
          <button className="btn waves-effect waves-light" type="submit">
            Place Bid!
          </button>
        </div>
      </div>
    </form>
  )
}

export default PlaceBid
