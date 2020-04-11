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
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

class App extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
