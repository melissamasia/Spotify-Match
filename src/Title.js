import React, { Component } from 'react';
import './App.css';

class Title extends Component {
    render(){
        return(
            <div className="Title">
                <h1 className="Title-header">Welcome to Spotify Match. </h1>
                <p> Login to Spotify with a friend to compare music libraries.</p>
            </div>
        );
    }
}

export default Title;