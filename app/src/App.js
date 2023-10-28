import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ActivityManager from './ActivityManager';
import Fact from './Facts';

let totalChange = 0;
function App() {
  const [animationDuration, setAnimationDuration] = useState(5);
  const [score, setScore] = useState(0);

  const incrementScore = (additionalPoints) => {
    totalChange += additionalPoints;
    setScore(currentScore => currentScore + additionalPoints);
    if (totalChange >= 10){
      setAnimationDuration(duration => duration * 0.8);
      totalChange = 0;
    }
  };


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
        <h2 className='score-overlay'>{score}</h2>
        <ActivityManager setScore = {incrementScore} />
        <Fact />
      </header>
    </div>
  );
}

export default App;
