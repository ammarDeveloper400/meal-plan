import React, { useState } from 'react';

import { Box } from '@mui/material';

import MealPlanHistory from './meal-history';
import MealPlanning2 from './meal-planning2';
import MealHistoryHead from './meal-history-head';
import MealTable from '../meal-consult/mealtable';

const MealHistory = () => {
  const [activeComponent, setActiveComponent] = useState('detailed'); // 'detailed' or 'calendar'

  return (
    <Box px={2}>
      <MealHistoryHead
        setView={setActiveComponent}
        activeComponent={activeComponent} // Pass active component to MealHistoryHead
      />
      {activeComponent === 'detailed' ? (
        <>
          <MealPlanHistory />
          <MealTable />
        </>
      ) : (
        <MealPlanning2 />
      )}
    </Box>
  );
};

export default MealHistory;
