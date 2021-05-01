import React, { Component } from 'react';
import './style/profilecard.css'

class ProfileCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="profile-card">
                <div className="head">
                    <img className="dp" src="https://randomuser.me/api/portraits/men/11.jpg" alt="dp"/>
                    <h3>John Ramsey</h3>
                    <p className="tag">@john_ram</p>
                    <p className="loc"><img src="https://img.icons8.com/material-two-tone/12/000000/google-maps-new.png"/>Los Angeles<img src="https://img.icons8.com/android/12/000000/worldwide-location.png"/></p>
                    <p className="desc">Multidisciplinary Photographer focused on travel and nature content</p>
                    
                </div>
                <div className="stats">
                    <div className="stat">
                        <p>Tweets</p>
                        <span>847</span>
                    </div>
                    <div className="stat">
                        <p>Followers</p>
                        <span>4.2k</span>
                    </div>
                    <div className="stat">
                        <p>Following</p>
                        <span>847</span>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default ProfileCard;