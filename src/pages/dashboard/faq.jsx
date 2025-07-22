import { Helmet } from 'react-helmet-async';

import { FaqView } from 'src/sections/dashboard/faq/view';


// ----------------------------------------------------------------------

export default function FaqDashboardPage() {
  return (
    <>
      <Helmet>
        <title> FAQ | Planora</title>
      </Helmet>

      <FaqView />
    </>
  );
}
