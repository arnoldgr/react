import './App.css';
import React, { Component } from 'react';
import Products from './Products';

class App extends Component {


  render() {


    return (
      <div>
        <h1>Hello, {this.formatName(user)}</h1>

        <Products />
      </div>
    );
  }
}

export default App;
