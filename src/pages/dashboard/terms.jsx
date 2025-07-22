import { Helmet } from 'react-helmet-async';

import { TermsConditionView } from 'src/sections/dashboard/terms-condition/view';

// ----------------------------------------------------------------------

export default function TermsAndConditionPage() {
  return (
    <>
      <Helmet>
        <title> Terms & conditions | Planora </title>
      </Helmet>

      <TermsConditionView />
    </>
  );
}
