import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ActivityManager = () => {
  const [activity, setActivity] = useState('');

  const handleChange = (event) => {
    setActivity(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="activity-select-label">Activity</InputLabel>
      <Select
        labelId="activity-select-label"
        id="activity-select"
        value={activity}
        label="Activity"
        onChange={handleChange}
      >
        <MenuItem value={"hiking"}>Hiking</MenuItem>
        <MenuItem value={"swimming"}>Swimming</MenuItem>
        <MenuItem value={"cycling"}>Cycling</MenuItem>
        {/* Add more menu items here */}
      </Select>
    </FormControl>
  );
};

export default ActivityManager;
