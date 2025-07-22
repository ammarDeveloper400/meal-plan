import { Helmet } from 'react-helmet-async';

import { PrivacyView } from 'src/sections/landing/privacy/view';

// ----------------------------------------------------------------------

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title> Privacy Policy | Planora </title>
      </Helmet>

      <PrivacyView />
    </>
  );
}
