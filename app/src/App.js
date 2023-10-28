import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ActivityManager from './ActivityManager';
import Fact from './Facts';

function App() {

  const [animationDuration, setAnimationDuration] = useState(5);
  const [score, setScore] = useState(0);

  const incrementScore = (additionalPoints) => {
    setScore(currentScore => currentScore + additionalPoints);
    if (score % 10 == 0){
      setAnimationDuration(duration => duration * 0.8);
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
      </header>
      <Fact/>
    </div>
  );
}

export default App;
