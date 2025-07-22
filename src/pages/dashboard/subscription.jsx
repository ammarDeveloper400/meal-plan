import { Helmet } from 'react-helmet-async';

import { SubscriptionView } from '../../sections/dashboard/subscription/view';


// ----------------------------------------------------------------------

export default function MySubscriptionPage() {
  return (
    <>
      <Helmet>
        <title> My subscription | Planora</title>
      </Helmet>

      <SubscriptionView />

    </>
  );
}
