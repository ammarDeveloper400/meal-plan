import { Helmet } from 'react-helmet-async';

import PaymentMethodView from '../../sections/dashboard/my-account/payment/view/payment-view';

// ----------------------------------------------------------------------

export default function PaymentMethodPage() {
  return (
    <>
      <Helmet>
        <title> Payment method | Planora</title>
      </Helmet>

      <PaymentMethodView />
    </>
  );
}
