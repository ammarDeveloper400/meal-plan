import { Helmet } from 'react-helmet-async';

import { ContactUsView } from 'src/sections/landing/contact/view';

// ----------------------------------------------------------------------

export default function ContactUsPage() {
  return (
    <>
      <Helmet>
        <title> Contact us | Planora</title>
      </Helmet>

      <ContactUsView />
    </>
  );
}
