import React, { Component } from 'react';

class PopupContent extends Component{
    access_token = ''
    componentDidMount(){
        var url_string = window.location.href;
        var url = new URL(url_string);
        console.log(url.hash);
        this.access_token = this.getTokenFromHash(url.hash);
        this.postMessage(this.access_token);
    }

    getTokenFromHash(hash){
        var endSubstring = hash.indexOf('&');
        var temp_access_token= hash.substring(14,endSubstring);
        console.log(temp_access_token);
        return temp_access_token;
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