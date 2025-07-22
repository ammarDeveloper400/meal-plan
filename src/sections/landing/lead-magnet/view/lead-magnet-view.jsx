// import React from 'react';

// import { Box, Button, Container } from '@mui/material';

// import LeadMagnet from '../lead-magnet';

// // import Privacy from '../privacy';

// const LeadMagnetView = () => (
//   //   <Privacy />
//   <Container disableGutters>
//     <LeadMagnet />
//     <Box>
//         <Button>Detailed version</Button>
//         <Button>Calender version</Button>
//     </Box>
//   </Container>
// );

// export default LeadMagnetView;


import React, { useState } from "react";

import { Box, Button, Container } from "@mui/material";

import LeadMagnet from "../lead-magnet";
import LeadMagnetDetail from "../lead-magnet-detail";
import LeadMagnetCalendar from "../lead-magnet-calendar";

const LeadMagnetView = () => {
  const [activeTab, setActiveTab] = useState("detailed"); // Default tab

  return (
    <Container maxWidth="xl">
      <LeadMagnet />

      {/* Custom Tab Buttons */}
      <Box my={2} display="flex" gap={2}>
        <Button
          onClick={() => setActiveTab("detailed")}
          sx={{
            backgroundColor: activeTab === "detailed" ? "#F7945D" : "transparent",
            color: activeTab === "detailed" ? "#fff" : "#000",
            border: "1px solid black",
            borderRadius: "10px",
            px: 3,
            py: 1,
            "&:hover": {
              backgroundColor: activeTab === "detailed" ? "#F57C3D" : "#f5f5f5",
            },
          }}
        >
          Detailed version
        </Button>

        <Button
          onClick={() => setActiveTab("calendar")}
          sx={{
            backgroundColor: activeTab === "calendar" ? "#F7945D" : "transparent",
            color: activeTab === "calendar" ? "#fff" : "#000",
            border: "1px solid black",
            borderRadius: "10px",
            px: 3,
            py: 1,
            "&:hover": {
              backgroundColor: activeTab === "calendar" ? "#F57C3D" : "#f5f5f5",
            },
          }}
        >
          Calendar version
        </Button>
      </Box>

      {/* Tab Content */}
      <Box mb={4}>
        {activeTab === "detailed" && <LeadMagnetDetail />}
        {activeTab === "calendar" && <LeadMagnetCalendar />}
      </Box>
    </Container>
  );
};

export default LeadMagnetView;
