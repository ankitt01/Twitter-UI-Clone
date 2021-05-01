import React, { Component } from 'react';
class ProfileCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="profile-card">
                <div className="head">
                    <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="dp"/>
                    <h2>John Ramsey</h2>
                    <p>@john_ram</p>
                    <p>Los Angeles</p>
                </div>
            </div>
         );
    }
}
 
export default ProfileCard;