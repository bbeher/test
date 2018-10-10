import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import DemoBOnRoutingHome from './demoBOnRoutingHome';
import DemoBOnRoutingTopics from './demoBOnRoutingTopics';

class DemoBOnRoutingApp extends Component {
  render() {
    return (
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
          </ul>
          
          <Route exact path='/' component={DemoBOnRoutingHome} />
          <Route path='/topics' component={DemoBOnRoutingTopics} />
        </div>
    );
  }
}

export default DemoBOnRoutingApp;


