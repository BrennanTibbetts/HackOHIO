import React, { useState } from 'react';
import PointMap from './Score';

const Dropdown = ({setScore}) => {
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
        <PointMap setScore={setScore}/>
      </div>
    </div>
  );
};

export default Dropdown;