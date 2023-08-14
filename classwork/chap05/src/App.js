import './App.css';
import React, { Component } from 'react';
import Products from './Products';
import JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm';

class App extends Component {

  render() {

    const isValid = true;

    return (
      <div className="App">
        <JumboTronComponent>
          This is a long sentence, and I want to insert content into the
          jumbotron component from the outside.
        </JumboTronComponent>
        <UserForm></UserForm>
        {/* <Products /> */}
      </div>
    );
  }
}

export default App;
