import React, { useState } from 'react';
import logo from './logo.svg'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className='dropdown'>
      <button
        onClick={toggleDropdown}
      >
        <h2>{isOpen ? 'HIDE' : 'SHOW'} ACTIVITIES</h2>
      </button>
      <div className={`dropdown-content ${isOpen ? 'active' : ''}`}>
         <img src={logo} className="App-logo" alt="logo"/>
      </div>
    </div>
  );
};

export default Dropdown;