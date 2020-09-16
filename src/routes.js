import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './resources/css/App.css';
import Home from './containers/indexPage.js';

class Routes extends Component {
  render() {
    return(
    <Router >
      <div>
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
    );
  }
}

export default Routes;
