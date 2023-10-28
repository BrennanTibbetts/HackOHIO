import React, { useState } from 'react';
import App from './App';

const PointMap = ({setScore}) => {
  const pointMap = new Map([
    ["Keep Lights Off", 1],
    ["Take a Short Shower", 3],
    ["Take Public Transport", 3],
    ["Walk!", 6],
    ["Unplug Devices", 1],
    ["Recycle Plastic", 1],
    ["Fill Water Bottles", 3],
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
