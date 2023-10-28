import logo from './logo.svg';
import './App.css';
import React from 'react';
import ActivityManager from './ActivityManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-name">GREEN<span>QUEST</span></h1>
        <img src={logo} className="App-logo" alt="logo" />
        <ActivityManager/>
      </header>
    </div>
  );
}

export default App;
