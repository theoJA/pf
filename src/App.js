import React, { Component } from 'react';
import { Navbar, About } from "./components";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Navbar/>
        <div className="page-content">

          <About/>

        </div>
      </div>
    );
  }
}

export default App;
