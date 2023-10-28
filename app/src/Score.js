import React, { useState } from 'react';
import App from './App';

const PointMap = ({setScore}) => {
  const pointMap = new Map([
    ["Turning Off the Lights", 1],
    ["Taking Shorter Showers", 3],
    ["Taking Public Transportation", 3],
    ["Walking", 6],
    ["Unplugging Devices", 1],
    ["Recycle One Bottle", 1],
    ["Filling up water bottles", 3],
  ]);

  const handleClaimPoints = (points) => {
    setScore(points);
  };

  return (
    <div>
      <div className='activity-buttons' >
        {Array.from(pointMap.entries()).map(([action, points]) => (
          <button 
            className='activity-button'
            key={action} 
            onClick={() => handleClaimPoints(points)}
          >
            <h2>{action}</h2>
            <h2>{points}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PointMap;
