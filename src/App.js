import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  sinIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  signOut() {
    firebase.auth().signOut();
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
