import { Helmet } from 'react-helmet-async';

import { AccountView } from 'src/sections/dashboard/my-account/view';

// ----------------------------------------------------------------------

export default function AccountPage() {
  return (
    <>
      <Helmet>
        <title> My account | Planora</title>
      </Helmet>

      <AccountView />
    </>
  );
}
