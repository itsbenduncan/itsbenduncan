import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Portfolio from './components/Portfolio/Portfolio';
// import { motion } from 'framer-motion';

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'About'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
          <Router >
            <div className="nav-container">
              <div className="logo-container">
                  <div className="logo">@</div>
                  <Link className="logo-name" to="/">itsbenduncan</Link>
              </div>
              <nav>
                  <ul className="nav-list">
                      <li className="nav-list-item">
                        <button className="nav-button-style">
                          <Link to="/">about</Link>
                        </button>
                      </li>
                      <li className="nav-list-item">
                        <button className="nav-button-style">
                          <Link to="/portfolio">portfolio</Link>
                        </button>
                      </li>
                      <li className="nav-list-item">
                        <button className="nav-button-style">
                          <Link to="/blog">blog</Link>
                        </button>
                      </li>
                  </ul>
              </nav>
            </div>

            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/">
                <About />
              </Route>
            </Switch>
        </Router>
    );
  }
}
export default App;
