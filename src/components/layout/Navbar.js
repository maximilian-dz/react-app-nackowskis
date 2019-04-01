import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="no-shadow">
          <ul className="right">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/create">Create Auction</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
