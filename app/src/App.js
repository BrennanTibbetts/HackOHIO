import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import PointMap from './Score';  // Import PointMap from Score.js
import ActivityManager from './ActivityManager';

function App() {
  const [animationDuration, setAnimationDuration] = useState(5); // Initial animation duration

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-name">GREEN<span>QUEST</span></h1>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ animationDuration: `${animationDuration}s` }}
        />
        {}
        <ActivityManager setAnimationDuration={setAnimationDuration}/>
      </header>
      <PointMap />
    </div>
  );
}
export default App;