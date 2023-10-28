import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';  // Import Grid from Material-UI

const PointMap = () => {
  const [score, setScore] = useState(0);
  const pointMap = new Map([
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
  };

  return (
    <div>
      <h2>Sustainability Actions</h2>
      <Grid container spacing={2}>  {/* Replace ul with Grid container */}
        {Array.from(pointMap.entries()).map(([action, points]) => (
          <Grid item xs={12} sm={6} md={4} key={action}>  {/* Replace li with Grid item */}
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => handleClaimPoints(points)}
              fullWidth  // This makes the button take up the full width of the grid item
            >
              {action}
            </Button>
          </Grid>
        ))}
      </Grid>
      <div>
        <h3>Total Score: {score}</h3>
      </div>
    </div>
  );
};

export default PointMap;
