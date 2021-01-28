import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Shop from './components/Shop'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Shop />
      </div>
    );
  }
}


export default App;
