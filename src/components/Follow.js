import React, { Component } from 'react';
class Follow extends Component {
    state = {  }
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div className="follow">
                <img src="https://randomuser.me/api/portraits/men/71.jpg" alt="dp"/>
                <div className="info">
                    <p className="name">{this.props.name}</p>       
                        <p className="tag">@{this.props.tag}</p>
                </div>
                <div className="btn">Follow</div>
            </div>
         );
    }
}
 
export default Follow;