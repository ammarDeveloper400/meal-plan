import { Helmet } from 'react-helmet-async';

import Detail from '../../sections/landing/lead-magnet/detail';


// ----------------------------------------------------------------------

export default function DetailPage() {
  return (
    <>
      <Helmet>
        <title> Recipe detail | Planora</title>
      </Helmet>

      <Detail />
    </>
  );
}
