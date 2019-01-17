import React, { Component } from 'react';
import '../styles/App.css';

class Title extends Component {
    render(){
        return(
            <div className="title">
                <h1 className="title-header">{this.props.mainText}</h1>
                <p>{this.props.subText}</p>
            </div>
        );
    }
}

export default Title;