import './App.css';
import React, { useState } from 'react';
import Dropdown from './Dropdown';

const ActivityManager = ({setAnimationDuration}) => {
  const [activity, setActivity] = useState('');

  const handleChange = (event) => {
    setActivity(event.target.value);
  };

  return (
    <div className='activity-manager'>
      <Dropdown setAnimationDuration={setAnimationDuration}/>
    </div>
  );
};

export default ActivityManager;
