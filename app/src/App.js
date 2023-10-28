import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';

function App() {
  const [animationDuration, setAnimationDuration] = useState(5); // Initial animation duration

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ animationDuration: `${animationDuration}s` }}
        />
        <Button id="speedButton" onClick={() => setAnimationDuration(duration => duration * 0.8)}>
          Increase Speed
        </Button>
      </header>
    </div>
  );
}


export default App;