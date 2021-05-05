import React, { Component } from 'react';
class Trends extends Component {
    state = {  }
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div className="trend">
                <div className="info">
                    <p>#{this.props.tag}</p>       
                    <p>{this.props.count}</p>
                </div>
                <img src="https://img.icons8.com/android/15/000000/sort-down.png"/>
            </div>
         );
    }
}
 
export default Trends;