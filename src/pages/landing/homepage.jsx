import { Helmet } from 'react-helmet-async';

import { HomePageView } from 'src/sections/landing/homepage/view';


// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Home | Planora </title>
      </Helmet>

      <HomePageView />
    </>
  );
}
