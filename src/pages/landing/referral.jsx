import { Helmet } from 'react-helmet-async';

import { ReferralView } from 'src/sections/landing/referral/view';

// ----------------------------------------------------------------------

export default function ReferralPage() {
  return (
    <>
      <Helmet>
        <title> Referral | Planora </title>
      </Helmet>

      <ReferralView />
    </>
  );
}
