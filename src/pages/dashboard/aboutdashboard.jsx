import { Helmet } from 'react-helmet-async';

import { AboutDashboardView } from '../../sections/dashboard/aboutdashboard/view';

// ----------------------------------------------------------------------

export default function AboutDashboardPage() {
  return (
    <>
      <Helmet>
        <title> About us | Planora</title>
      </Helmet>

      <AboutDashboardView />
    </>
  );
}
