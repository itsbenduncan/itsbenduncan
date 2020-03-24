import React, { Component } from 'react';
import './App.css';
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
      <div className="App">
        <Navigation 
          onRouteChange={this.onRouteChange} 
        />
        { this.state.route === 'About'
          ? <About onRouteChange={this.onRouteChange} />
          :  this.state.route === 'Blog'
          ? <Blog onRouteChange={this.onRouteChange} />
          : ( this.state.route === 'Portfolio'
            ? <Portfolio onRouteChange={this.onRouteChange} />
            : <div>
            </div>
          )
        }
      </div>
    );
  }
}
export default App;
