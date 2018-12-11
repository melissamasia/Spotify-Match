import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';

class SubmitButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    //refactor: ensure button is "loading" until the results page is rendered
    //function called when "Compare Libraries" button clicked
    handleClick(){
        this.setState({ isLoading: true });
        this.props.onClick();
        setTimeout(() => {
            this.setState({ isLoading: false})
        }, 2000)
    }

    render(){
        return (
            < Button 
                className="compare-libs-button" 
                bsSize="large" 
                disabled={this.props.isDisabled || this.stateisLoading}
                onClick={!this.state.isLoading ? this.handleClick : null }
            >
                {this.state.isLoading ? 'Loading...' : 'Compare Spotify Libraries'}
            </Button>
        );
    }
}

export default SubmitButton;