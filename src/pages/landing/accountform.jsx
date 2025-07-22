import { Helmet } from 'react-helmet-async';

import AccountFormView from 'src/sections/landing/accountcreation/view/accountform-view';


// ----------------------------------------------------------------------

export default function AccountFormPage() {
  return (
    <>
      <Helmet>
        <title> Become a member | Planora</title>
      </Helmet>

      <AccountFormView />
    </>
  );
}
