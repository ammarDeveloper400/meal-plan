import { Helmet } from 'react-helmet-async';

import AboutUsView from 'src/sections/landing/aboutus.jsx/view/about-view';


// ----------------------------------------------------------------------

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title> About us | Planora</title>
      </Helmet>

      <AboutUsView />
    </>
  );
}
