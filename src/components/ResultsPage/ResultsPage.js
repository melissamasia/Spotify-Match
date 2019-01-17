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
                        <p>You both share {this.props.score}% of your Spotify libraries.</p>
                        <p className="percentage">{this.props.score}%</p>
                        <p className="sub-text">This percentage is calculated by comparing saved songs.</p>
                    </div>
                    <div className="results-pane-two">
                        <ResultLists
                            category="artists"
                            result1={this.props.artists[0]}
                            result2={this.props.artists[1]}
                            result3={this.props.artists[2]}
                        >
                        </ResultLists>
                        <ResultLists
                            category="songs"
                            result1={this.props.songs[0]}
                            result2={this.props.songs[1]}
                            result3={this.props.songs[2]}
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