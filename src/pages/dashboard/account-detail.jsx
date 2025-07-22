import { Helmet } from 'react-helmet-async';

import { AccountDetailView } from '../../sections/dashboard/my-account/account-detail/view';

// ----------------------------------------------------------------------

export default function AccountDetailPage() {
  return (
    <>
      <Helmet>
        <title> Account details | Planora</title>
      </Helmet>

      <AccountDetailView />
    </>
  );
}
