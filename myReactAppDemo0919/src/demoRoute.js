import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import DemoAApp from "./demoA/components/demoAApp";
import DemoBOnRoutingApp from "./demoBOnRouting/demoBOnRoutingApp";

const DemoRoute = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/route-demo1">Route Demo 1</Link>
        </li>
        <li>
          <Link to="/route-demo2">Route Demo 2</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/route-demo1" component={DemoAApp} />
      <Route path="/route-demo2" component={DemoBOnRoutingApp} />
    </div>
  </Router>
);

export default DemoRoute;