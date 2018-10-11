import React, { Component } from 'react';

import { Switch, Route, Link } from 'react-router-dom'; // import the react-router-dom components
import { Home, Page1, Page2, Page3, Administration, Report } from './pages' // import our pages

const Main = () => (
  <main className="container">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/legal-guidance' component={Page1} />
      <Route exact path='/legal-input' component={Page2} />
      <Route exact path='/integration' component={Page3} />
      <Route exact path='/administration' component={Administration} />
      <Route exact path='/report' component={Report} />
    </Switch>
  </main>
)

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [
        { path: "/legal-guidance", text: "Legal Guidance", isActive: false },
        { path: "/legal-input", text: "Legal Input", isActive: false },
        { path: "/integration", text: "Integration", isActive: false },
        { path: "/administration", text: "Administration", isActive: false },
        { path: "/report", text: "Report", isActive: false },
        // { path: "/administration", text: "Administration", isActive: false },
      ]
    }
  }

  handleClick(i) {
    const links = this.state.links.slice();
    for (const j in links) {
      links[j].isActive = i == j;
    }
    this.setState({ links: links });
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container justify-content-center">
            {/* <Link className="navbar-brand" to="/">Project Title</Link> */}
            <ul className="navbar-nav">
              {this.state.links.map((link, i) =>
                <NavLink
                  path={link.path}
                  text={link.text}
                  isActive={link.isActive}
                  key={link.path}
                  onClick={() => this.handleClick(i)}
                />
              )}

              <li className="nav-item" key={0}>
                <a className="nav-link icon-fa" href="#"><i className="fa fa-bell"></i></a>
              </li>
              <li className="nav-item" key={1}>
                <a className="nav-link icon-fa" href="#"><i className="fa fa-question"></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;

class NavLink extends Component {

  render() {
    return (
      <li className={"nav-item " + (this.props.isActive ? "active" : "")}>
        <Link
          className="nav-link"
          to={this.props.path}
          onClick={() => this.props.onClick()}
        >
          {(this.props.text ? this.props.text : <i className="fa fa-question"></i>)}
          
          </Link>
      </li>
    );
  }
}