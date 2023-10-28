import logo from './logo.svg';
import question from './question.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import ActivityManager from './ActivityManager';
import Fact from './Facts';

let totalChange = 0;
function App() {

  const [animationDuration, setAnimationDuration] = useState(5);
  const [score, setScore] = useState(0);
  const [popupIsVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(prevState => !prevState);
  };

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
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setScore(currentScore => {
        const timeBasedDecrease = calculateScoreDecrease(); 
        return Math.max(0, currentScore - timeBasedDecrease); 
      });
    }, 40000); 

    return () => clearInterval(interval); 
  }, []);

  const calculateScoreDecrease = () => {
    return 1; 
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='header-container'>
        <h1 className="header-name">GREEN<span>QUEST</span></h1>
        <img 
          src={question}
          className='question'
          onClick={togglePopup}
        />
        </div>
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
