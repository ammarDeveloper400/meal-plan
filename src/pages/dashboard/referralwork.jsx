import { Helmet } from 'react-helmet-async';

import { ReferralWorkView } from '../../sections/dashboard/referralwork/view';

// ----------------------------------------------------------------------

export default function ReferralWorkPage() {
  return (
    <>
      <Helmet>
        <title> How does the referral work | Planora</title>
      </Helmet>

      <ReferralWorkView />
    </>
  );
}
