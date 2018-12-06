import React, { Component }  from 'react';
import NewWindow from 'react-new-window';

class PopupWindow extends Component {
    render(){
        return(
            <NewWindow
              url={'https://accounts.spotify.com/en/authorize?client_id=b69a89e58df54733aa251e2bb81537fb&redirect_uri=http:%2F%2Flocalhost:3000%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123&show_dialog=true'}
            >
            </NewWindow>
        );
    }
}

export default PopupWindow;