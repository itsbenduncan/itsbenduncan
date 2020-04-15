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
        <div className="full-router">
          <Router>
            <div className="navigation-container">
                <div className="name">
                  <Link to="/">@itsbenduncan</Link>
                </div>
                  <nav>
                      <ul>
                          <li>
                            Gallery
                            <ul id="submenu">
                              <li className="nav-list-item">
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
          </Router>
        </div>


        <div class="mobile-router">
          <Router>
          <div className="navigation-container">
            <input type="checkbox" id="btnControl"/>
            <label className="btn" for="btnControl">
              MENU
            </label>
            <div id="mobile-nav-content">
                <div>
                  <div>
                    <Link to="/">@itsbenduncan</Link>
                  </div>
                    <nav>
                        <ul>
                            <li>
                              <Link to="/couples">Couples</Link>
                            </li>
                            <li>
                              <Link to="/portraits">Portraits</Link>
                            </li>
                            <li>
                              <Link to="/stills">Stills</Link>
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

                
            </div>
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
              </Router>
        </div>
      </div>
    );
  }
}

export default App;
