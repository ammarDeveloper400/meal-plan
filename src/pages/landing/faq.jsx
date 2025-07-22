import { Helmet } from 'react-helmet-async';

import { FaqView } from 'src/sections/landing/faq/view';


// ----------------------------------------------------------------------

export default function FaqPage() {
  return (
    <>
      <Helmet>
        <title> FAQ | Planora</title>
      </Helmet>

      <FaqView />
    </>
  );
}
