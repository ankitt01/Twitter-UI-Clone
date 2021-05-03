import React, { Component } from 'react';
import banner from './img/banner.jpg';
import './style/hero.css';
import ProfileCard from './profile-card';
import Settings from './Settings';

class Hero extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="hero-section">
                <img className="banner-img" src={banner} alt="banner"/>
                <div className="feed">
                    <ProfileCard />
                    <div className="setting-cards">
                        <Settings label="Activity" source="https://img.icons8.com/ios-glyphs/26/000000/visible--v1.png" />
                        <Settings label="Moments" source="https://img.icons8.com/material/26/000000/the-flash-sign.png" />
                        <Settings label="Friends" source="https://img.icons8.com/ios-filled/26/000000/friends.png" />
                        <Settings label="Edit Profile" source="https://img.icons8.com/android/26/000000/settings.png" />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Hero;