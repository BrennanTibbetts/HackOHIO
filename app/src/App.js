import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ActivityManager from './ActivityManager';
import Fact from './Facts';

let totalChange = 0;
function App() {
  const [animationDuration, setAnimationDuration] = useState(5);
  const [score, setScore] = useState(0);
  const [saturateValue, setSaturateValue] = useState(0);
  const maxSaturateValue = 2500;

  const incrementScore = (additionalPoints) => {
    totalChange += additionalPoints;
    setScore(currentScore => currentScore + additionalPoints);
    if (totalChange > 10){
      setAnimationDuration(duration => duration * 0.8);
      totalChange = totalChange - 10;
    }
    else if (totalChange === 10){
      setAnimationDuration(duration => duration * 0.8);
      totalChange = 0;
    }

    if (score >= 10 && score % 10 === 0) {
      const newSaturateValue = saturateValue + 250; 
      setSaturateValue(Math.min(newSaturateValue, maxSaturateValue));
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
          style={{
            animationDuration: `${animationDuration}s`,
            filter: `invert(48%) sepia(79%) saturate(${saturateValue}%) hue-rotate(86deg) brightness(60%) contrast(119%)`,
          }}
        />
        <h2 className='score-overlay'>{score}</h2>
        <ActivityManager setScore = {incrementScore} />
        <Fact />
      </header>
    </div>
  );
}

export default App;
