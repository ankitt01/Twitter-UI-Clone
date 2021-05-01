import React, { Component } from 'react';
import banner from './img/banner.jpg';
import './style/hero.css';
import ProfileCard from './profile-card'

class Hero extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="hero-section">
                <img className="banner-img" src={banner} alt="banner"/>
                <div className="feed">
                    <ProfileCard />

                </div>
            </div>
        );
    }
}
 
export default Hero;