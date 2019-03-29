import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component{

    render()
    {
        return(<div>
            <nav>
                <ul>
                    <li><NavLink to='/Dashboard'>Home</NavLink></li>
                    <li><NavLink to='/CreateAuction'>Create Auction</NavLink></li>
                </ul>
            </nav>
        </div>);
    }
}

