import React, { Component }  from 'react';
import NewWindow from 'react-new-window';
import { getAuthURL } from '../utils/utils';

class PopupWindow extends Component {

    render(){
        return(
            <NewWindow
              url={getAuthURL()}
            >
            </NewWindow>
        );
    }
}

export default PopupWindow;