import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import PointMap from './Score';  // Import PointMap from Score.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color="primary" >
            Hello
        </Button>
      </header>
      <PointMap />
    </div>
  );
}

export default App;