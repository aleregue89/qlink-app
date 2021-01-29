import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Shop from './components/Shop'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Shop />
      </div>
    );
  }
}


export default App;
