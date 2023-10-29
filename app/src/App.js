import logo from './logo.svg';
import question from './question.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import ActivityManager from './ActivityManager';
import Fact from './Facts';
import Information from './Information';

function App() {
  const decreaseMS = 5760000;
  const initialSpeed = 5; 
  const maxSaturateValue = 2500;
  const [isModalOpen, setModalOpen] = useState(false);
  const [score, setScore] = useState(    
    () => JSON.parse(localStorage.getItem('userScore')) || 0
  );
  const [lastScoreCheckpoint, setLastScoreCheckpoint] = useState(Math.floor(score / 10) * 10);

  useEffect(() => {
    localStorage.setItem('lastVisit', JSON.stringify(new Date().getTime()));
  });

  useEffect(() => {
    const lastVisit = JSON.parse(localStorage.getItem('lastVisit'));
    const currentTime = new Date().getTime();
    
    const timeDifference = currentTime - lastVisit;

    const scoreDecrease = Math.floor(timeDifference / decreaseMS); 

    setScore(currentScore => Math.max(0, currentScore - scoreDecrease));
  }, []);

  useEffect(() => {
    localStorage.setItem('userScore', score);
    if (Math.floor(score / 10) * 10 !== lastScoreCheckpoint) {
      setLastScoreCheckpoint(Math.floor(score / 5) * 5);
    }
  }, [score, lastScoreCheckpoint]);

  const togglePopup = () => {
    setModalOpen(currentModalOpen => !currentModalOpen);
  };
  
  const incrementScore = (additionalPoints) => {
    setScore(currentScore => currentScore + additionalPoints);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setScore(currentScore => Math.max(0, currentScore - calculateScoreDecrease()));
    }, decreaseMS);
    return () => clearInterval(interval); 
  }, []);

  const calculateScoreDecrease = () => {
    return 1; 
  };

  const calculateAnimationSpeed = () => {
    return Math.max(0.5, initialSpeed - (lastScoreCheckpoint / 10));
  };

  const calculateSaturation = (currentScore) => {
    return Math.min(maxSaturateValue, currentScore * 25); 
  };

  return (
    <div className="App">
      <header className="App-header">
        {isModalOpen && <Information setModalOpen={setModalOpen}/>}
        <div className='header-container'>
          <h1 className="header-name">GREEN<span>QUEST</span></h1>
          <img 
            src={question}
            className='question'
            onClick={togglePopup}
            alt='help'
          />
        </div>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
         style={{
            animationDuration: `${calculateAnimationSpeed(score)}s`,
            filter: `invert(48%) sepia(79%) saturate(${calculateSaturation(score)}%) hue-rotate(86deg) brightness(60%) contrast(119%)`,
          }}
        />
        <h2 className='score-overlay'>{score}</h2>
        <ActivityManager setScore = {incrementScore} />
        <Fact />
      </header>
      <Fact/>
    </div>
  );
}

export default App;
