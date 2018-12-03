import React, { Component } from 'react';
import LoginPage from './LoginPage/LoginPage';
import ResultsPage from './ResultsPage/ResultsPage';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      resultsComputed: false,
      accessToken1: '',
      accessToken2: '',
    }
    this.getUser = this.getUser.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.fetchComparisonData = this.fetchComparisonData.bind(this);
  }
  
  //call to get Access Token
  getAccessToken(){
  //return username
      console.log('called getAccessToken');
      if (this.state.accessToken1 === ''){
        this.setState({
          accessToken1: 'accesstoken1',
        });
      } else {
        this.setState({
          accessToken2: 'accesstoken2',
        });
      }
      return 'success';
  };

  getUser(){
      var response = this.getAccessToken();
      if (response === 'success'){
        return 'melissamasia';
      } else {
        return 'error gathering user';
      }
  }
  
  //call to compare libs
  fetchComparisonData() {
    console.log('called fetchComparisonData');
    this.setState({
      resultsComputed: true,
    });
  };
  
  renderLoginPage(){ 
    return (
      <LoginPage 
        onLoginClick={this.getUser}
        onSubmitClick={this.fetchComparisonData}
        bothLoggedIn={(this.state.accessToken1 !== '' && this.state.accessToken2 !== '')}
      >
      </LoginPage>
    );
  }

  renderResultsPage(){
    return (
      <ResultsPage></ResultsPage>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {!this.state.resultsComputed ? this.renderLoginPage() : this.renderResultsPage()}
        </header>
      </div>
    );
  }
}



export default App;
