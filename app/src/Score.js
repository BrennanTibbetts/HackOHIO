import React, { useState } from 'react';
import App from './App';

const PointMap = ({setAnimationDuration}) => {
  const [score, setScore] = useState(0);
  const pointMap = new Map([
    ["Turning Off the Lights", 1],
    ["Taking Shorter Showers", 3],
    ["Taking Public Transportation", 3],
    ["Walking", 6],
    ["Unplugging Devices", 1],
    ["Recycle the equivalent of one bottle", 1],
    ["Filling up water bottles", 3],
    ["Turning Off the Lights", 1],
    ["Taking Shorter Showers", 3],
    ["Taking Public Transportation", 3],
    ["Walking", 6],
    ["Unplugging Devices", 1],
    ["Recycle the equivalent of one bottle", 1],
    ["Filling up water bottles", 3]
  ]);

  const handleClaimPoints = (points) => {
    setScore(score + points);
    setAnimationDuration(score);
  };

  const getScore = () => {
    return score;
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>
        {Array.from(pointMap.entries()).map(([action, points]) => (
          <button 
            style={{ width: '100%', padding: '10px' }}
            key={action} 
            onClick={() => handleClaimPoints(points)}
          >
            {action}
          </button>
        ))}
      </div>
      <div>
        <h3>Total Score: {score}</h3>
      </div>
    </div>
  );
};

export default PointMap;
