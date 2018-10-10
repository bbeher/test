import React from 'react';
import Roster from './Roster';
import FullRoster from './FullRoster';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Test = () => (
  <Router>
  <div>
    <Roster />
    <FullRoster />
  </div>
  </Router>
)

export default Test;