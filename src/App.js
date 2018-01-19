import React, { Component } from 'react';
import { Navbar, About, Projects } from "./components";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Navbar/>
        <div className="page-content">
          <About/>
        </div>

        <div className="page-content-grey">
          <Projects/>
        </div>
      </div>
    );
  }
}

export default App;
