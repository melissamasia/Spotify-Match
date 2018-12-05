import React, { Component } from 'react';

class PopupContent extends Component{
    componentDidMount(){
        var url_string = window.location.href;
        var url = new URL(url_string);
        console.log(url.hash);
        var access_token = this.getTokenFromHash(url.hash);
        this.postMessage(access_token);
    }

    getTokenFromHash(hash){
        var endSubstring = hash.indexOf('&');
        var access_token= hash.substring(14,endSubstring);
        console.log(access_token);
        return access_token;
    }

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