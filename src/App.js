import React, { Component } from 'react';
import './App.css';
import  Github from './api.js';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Github username="marc-acm"></Github>
      </div>
    );
  }
}

export default App;
