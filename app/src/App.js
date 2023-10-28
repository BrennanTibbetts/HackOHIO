import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color="primary" >
            Hello
        </Button>
      </header>
    </div>
  );
}

export default App;
