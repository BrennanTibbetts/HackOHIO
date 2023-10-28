import './App.css';
import React, { useState } from 'react';
import Dropdown from './Dropdown';

const ActivityManager = () => {
  const [activity, setActivity] = useState('');

  const handleChange = (event) => {
    setActivity(event.target.value);
  };

  return (
    <div className='activity-manager'>
      <Dropdown/>
    </div>
  );
};

export default ActivityManager;
