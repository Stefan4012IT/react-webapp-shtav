import React, { Component } from 'react';
import './App.css';
import { render } from 'react-snapshot';
import Radium from 'radium';
import Header from './Header/header';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />

      </div>
    );
  }
}
export default Radium(App);
