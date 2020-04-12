import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portraits from './Components/Gallery/Galleries/Portraits';
import Couples from './Components/Gallery/Galleries/Couples';
import Stills from './Components/Gallery/Galleries/Stills';

class App extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="app-container">
        {/* <div className="main-wrapper">
          <svg viewBox="0 0 25 100" id="top-left" preserveAspectRatio="xMinYMin">
            <path d="M5 25,
                      L5 5,
                      Q5 1, 10 1
                      L25 1"
            stroke="orange" opacity="1" fill="black" />
          </svg>
          <svg viewBox="0 0 25 100" id="top-right" preserveAspectRatio="xMinYMin">
            <path d="M0 5,
             L20 5,
             Q22 5, 22 10
             L22, 25"
              stroke="orange" opacity="1" fill="black" />
          </svg>
        </div> */}
      <Router>
        <div>
          <div className="navigation-container">
            <div className="name">
              <Link to="/">@itsbenduncan</Link>
            </div>
              <nav>
                  <ul>
                      <li>
                        Gallery
                        <ul id="submenu">
                          <li>
                            <Link to="/couples">Couples</Link>
                          </li>
                          <li>
                            <Link to="/portraits">Portraits</Link>
                          </li>
                          <li>
                            <Link to="/stills">Stills</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to ="/contact">Contact</Link>
                      </li>
                  </ul>
              </nav>
          </div>

          <Switch>
            <Route path="/couples">
                <Couples />
            </Route>
            <Route path="/portraits">
                <Portraits />
            </Route>
            <Route path="/stills">
                <Stills />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
