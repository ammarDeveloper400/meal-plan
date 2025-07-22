import { Helmet } from 'react-helmet-async';

import ContactDashboardView from '../../sections/dashboard/contactdashboard/view/contactdashboard-view';

// ----------------------------------------------------------------------

export default function ContactDashboardPage() {
  return (
    <>
      <Helmet>
        <title>  Contact us | Planora</title>
      </Helmet>

      <ContactDashboardView />
    </>
  );
}
