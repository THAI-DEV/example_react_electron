import React, { Component } from 'react';
import '../App.css';
import { ReactComponent as Logo } from '../assets/logo.svg';
class Ex001 extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <header className="App-header">
          <Logo className="App-logo" alt="logo" />
        </header>
        {/* <header>
          <img src={logo2} alt="logo2" />
        </header> */}
      </div>
    );
  }
}

export default Ex001;
