import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';

class App extends Component {
  signIn() {
    var provider = new fire.auth.GoogleAuthProvider();
    fire.auth().signInWithPopup(provider);
  }

  signOut() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Communities for Communities</h2>
        </div>
        <p className="App-intro">
          Alright, time to start coding.
        </p>
      </div>
    );
  }
}

export default App;
