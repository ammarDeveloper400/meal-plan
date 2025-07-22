import { Helmet } from 'react-helmet-async';

import { TermsConditionView } from 'src/sections/landing/terms-condition/view';

// ----------------------------------------------------------------------

export default function TermsConditionPage() {
  return (
    <>
      <Helmet>
        <title> Terms and Conditions | Planora </title>
      </Helmet>

      <TermsConditionView />
    </>
  );
}
