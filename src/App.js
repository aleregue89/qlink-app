import React, { Component } from 'react';
import './App.css';
import MyNavBar from './components/MyNavBar';
import Shop from './components/Shop'
import Header from './components/Header'
//import Details from './components/Details'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <MyNavBar />
          <Routes />
        </div>
      </Router>
      
    );
  }
}


export default App;
