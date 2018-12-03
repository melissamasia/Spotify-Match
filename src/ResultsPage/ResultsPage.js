import React, { Component } from 'react';
import Title from '../Title';
import './Results.css';


class ResultsPage extends Component {
    render(){
        return(
            <div>
                <Title
                    mainText="The results are in!"
                    subText="We've compared your Spotify libraries, and..."
                >
                </Title>
                <div className="results-row">
                    <div className="results-pane-one">
                        <p>melissamasia and tmarij4 share 50% of their Spotify libraries.</p>
                        <p className="percentage">50%</p>
                        <p className="sub-text">This percentage is calculated by comparing saved songs.</p>
                    </div>
                    <div className="results-pane-two">
                        <ResultLists
                            category="artists"
                            result1="Taylor Swift"
                            result2="The Beatles"
                            result3="A$AP Rocky"
                        >
                        </ResultLists>
                        <ResultLists
                            category="songs"
                            result1="Smooth Criminal"
                            result2="Beat It"
                            result3="Levels"
                        >
                        </ResultLists>
                    </div>
                </div>
            </div>
        );
    }
}

class ResultLists extends Component {
    render(){
        return(
            <div className="results-list">
                <p>Some shared {this.props.category} are...</p>
                <ul>
                    <li>{this.props.result1}</li>
                    <li>{this.props.result2}</li>
                    <li>{this.props.result3}</li>
                </ul>
            </div>
        );
    }
}

export default ResultsPage;