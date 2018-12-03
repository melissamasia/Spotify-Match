import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { fetchComparisonData } from '../api/apiCalls';
import './Login.css';

class SubmitButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({ isLoading: true });
        //insert ajax call
        fetchComparisonData();
        setTimeout(() => {
            this.setState({ isLoading: false})
        }, 2000)
    }

    render(){
        return (
            < Button 
                className="compare-libs" 
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