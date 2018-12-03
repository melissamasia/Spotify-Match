import React, { Component } from 'react';
import LoginPage from './LoginPage/LoginPage';
import ResultsPage from './ResultsPage/ResultsPage';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      resultsComputed: false,
    }
  }

  renderLoginPage(){ 
    return (
      <LoginPage></LoginPage>
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
