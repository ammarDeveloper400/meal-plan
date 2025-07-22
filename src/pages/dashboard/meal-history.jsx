import { Helmet } from 'react-helmet-async';

import { MealHistoryView } from '../../sections/dashboard/meal-history/view';

// ----------------------------------------------------------------------

export default function MealHistoryPage() {
  return (
    <>
      <Helmet>
        <title> History of meal plans | Planora</title>
      </Helmet>

      <MealHistoryView />
    </>
  );
}
