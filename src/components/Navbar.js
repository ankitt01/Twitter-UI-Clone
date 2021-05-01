import React, { Component } from 'react';
import './style/navbar.css';
class Navbar extends Component {
    render() { 
        return ( 
            <div className="navbar">
                <div className="navbar-top">
                    <ul className="nav-links-top">
                        <li className="links"><a href="/">About</a></li>
                        <li className="links"><a href="/">Help</a></li>
                        
                        <img className="search" src="https://img.icons8.com/fluent-systems-regular/24/000000/search--v1.png" alt="icon "/>
                        <input type="text" className="searchbar" placeholder="Search on Twitter" />
                        <li className="links">
                            <div className="profile">
                                <span className="Greeting">Hey, John</span>
                                <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="dp"/>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="navbar-left">
                    <img src="https://img.icons8.com/fluent/50/000000/twitter.png" alt="icon" />
                    <ul>
                        <li><img src="https://img.icons8.com/material-sharp/24/000000/home.png"/><a href="/" >Home</a></li>
                        <li><img src="https://img.icons8.com/material-outlined/24/000000/compass.png"/><a href="/">Explore</a></li>
                        <li><img src="https://img.icons8.com/material-sharp/24/000000/bell.png"/><a href="/">Notifications</a></li>
                        <li><img src="https://img.icons8.com/android/24/000000/new-message.png"/><a href="/">Messages</a></li>
                        <li><img src="https://img.icons8.com/material-rounded/24/000000/bookmark-ribbon--v1.png"/><a href="/">Bookmarks</a></li>
                        <li><img src="https://img.icons8.com/ios-filled/24/000000/add-list.png"/><a href="/">Lists</a></li>
                        <li><img src="https://img.icons8.com/ios/24/000000/administrator-male--v1.png"/><a className="active" href="/">Profile</a></li>
                        <li><img src="https://img.icons8.com/small/24/000000/more.png"/><a href="/">More</a></li>
                    </ul>
                    <button className="tweet">Tweet</button>
                </div>
            </div>
         );
    }
}
 
export default Navbar;