import React, { Component } from 'react';
import { Container } from 'reactstrap';
import AppNav from './components/AppNav';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav />
      </div>
    );
  }
}

export default App;
