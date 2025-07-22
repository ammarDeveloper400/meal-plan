import { Helmet } from 'react-helmet-async';

import { PrivacyView } from 'src/sections/dashboard/privacy/view';

// ----------------------------------------------------------------------

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title> Privacy policy | Planora </title>
      </Helmet>

      <PrivacyView />
    </>
  );
}
