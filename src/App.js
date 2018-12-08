// src/App.js 

import React, { Component } from 'react';
import './App.css';
import Main from './components/Main.js'
import Header from './components/Header.js';

export default class App extends Component {
  render() {
    return (
    <div>
      <Header/>
      <Main/>
    </div>);

  }

}