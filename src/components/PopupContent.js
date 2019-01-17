import React, { Component } from 'react';

class PopupContent extends Component{

    //get URL from popup window, obtain hash value, and send message to main browser window
    componentDidMount(){
        var url_string = window.location.href;
        var url = new URL(url_string);
        var access_token = this.getTokenFromHash(url.hash);
        this.postMessage(access_token);
    }

    //function to parse the value of the url hash and return the access token
    getTokenFromHash(hash){
        var endSubstring = hash.indexOf('&');
        var temp_access_token= hash.substring(14,endSubstring);
        console.log(temp_access_token);
        return temp_access_token;
    }

    //function to send the access token from the popup to the main browser window
    postMessage(message){
        var targetWindow = window.opener;
        targetWindow.postMessage(message, '*');
    }

    render(){
        return(
            <h1>You're all logged in!</h1>
        );
    }
}

export default PopupContent;