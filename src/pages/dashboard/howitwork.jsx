import { Helmet } from 'react-helmet-async';

import { HowitWorkView } from '../../sections/dashboard/howdoesitwork/view';

// ----------------------------------------------------------------------

export default function HowitWorkPage() {
  return (
    <>
      <Helmet>
        <title> How does it work | Planora</title>
      </Helmet>

      <HowitWorkView />
    </>
  );
}
