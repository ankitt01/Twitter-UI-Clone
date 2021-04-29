import React, { Component } from 'react';
import './style/navbar.css';
import dp from './img/dp.jpg';
class Navbar extends Component {
    render() { 
        return ( 
            <div className="navbar-top">
                <ul className="nav-links-top">
                    <li className="links"><a href="/">About</a></li>
                    <li className="links"><a href="/">Help</a></li>

                    <input type="text" className="searchbar" placeholder="Search on Twitter" />
                    <li className="links">
                        <div className="profile">
                            <span className="Greeting">Hey, John</span>
                            <img src={dp} alt=""/>
                        </div>
                    </li>
                </ul>
            </div>
         );
    }
}
 
export default Navbar;