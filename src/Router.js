import React from 'react';
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const PopupagePage = () => <h1>You're all logged in!</h1>

const AppRouter = () => {
   return (
    <Router>
        <div>
            <Route path="/" exact component={App}></Route>
            <Route path="/callback" component={PopupagePage}></Route>
        </div>
    </Router> 
   );
}

export default AppRouter;