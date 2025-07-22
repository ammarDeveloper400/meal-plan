import React, { useState } from 'react';

import { Box } from '@mui/material';

import Head from './head';
import MealTable from './mealtable';
import MealPlanning2 from './mealplanning';
import MealPlanning from './meal-planning-head';

const ReplaceVerification = () => {
  // State to track which view is active
  const [view, setView] = useState('detailed'); // Default is 'detailed'

  return (
    <Box px={2}>
      {/* Pass the setView function to Head so it can switch between views */}
      <Head setView={setView} activeComponent={view} />

      {view === 'detailed' ? (
        // Show components for Detailed view
        <>
          <MealPlanning />
          <MealTable />
        </>
      ) : (
        // Show MealPlanning1 for Calendar view
        <MealPlanning2 />
      )}
    </Box>
  );
};

export default ReplaceVerification;
