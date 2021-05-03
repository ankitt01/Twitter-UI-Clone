import React, { Component } from 'react';
import './style/settings.css'

class Settings extends Component {
    constructor(props) {
        super(props);
    }

    state = {  }
    render() { 
        return ( 
            <div className="setting-card">
                <img src={this.props.source} alt="icon"/>
                <p>{this.props.label}</p>
            </div>
            
         );

    }
}
 
export default Settings;