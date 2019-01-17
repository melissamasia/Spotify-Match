import React from 'react';
import App from '../App';
import PopupContent from './PopupContent';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const AppRouter = () => {
   return (
    <Router>
        <div>
            <Route path="/" exact component={App}></Route>
            <Route path="/callback" component={PopupContent}></Route>
        </div>
    </Router> 
   );
}

export default AppRouter;