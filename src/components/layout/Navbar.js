import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
  handleClick = () => {
    this.props.onClick()
  }
  render() {
    return (
      <div className="container margin-bottom-50">
        <nav className="no-shadow">
          <NavLink
            to="/"
            className="brand-logo font-bold"
            onClick={this.handleClick}
          >
            nackowskis
          </NavLink>
          <ul className="right">
            <li>
              <NavLink to="/" onClick={this.handleClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">Create Auction</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
