import logo from './logo.svg';
import './App.css';
import React from 'react';
import ActivityManager from './ActivityManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ActivityManager/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
