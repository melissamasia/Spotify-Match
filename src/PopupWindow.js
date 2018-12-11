import React, { Component }  from 'react';
import NewWindow from 'react-new-window';

class PopupWindow extends Component {
    
    //refactor: randomly generate the state
    //insert your client id in the url
    getURL(){
        var client_id = 'insert your client id here';
        var url = 'https://accounts.spotify.com/authorize?client_id=' + client_id + '&redirect_uri=http:%2F%2Flocalhost:3000%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123';
        return url;
    }

    render(){
        return(
            <NewWindow
              url={this.getURL()}
            >
            </NewWindow>
        );
    }
}

export default PopupWindow;