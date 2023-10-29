import React, { useState } from 'react';
import App from './App';

const PointMap = ({setScore}) => {
  const pointMap = new Map([
    ["Leave No Trace Principles", 2],
    ["Reuse Products", 2],
    ["Conserve Water", 3],
    ["Recycle", 3],
    ["Consume Energy Efficient Produce", 4],
    ["Use Efficient Appliances", 4],
    ["Use Efficient Vehichles", 5],
    ["Volunteer", 6]
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
