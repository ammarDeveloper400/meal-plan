import { Helmet } from 'react-helmet-async';

import MealDetailView from '../../sections/dashboard/meal-consult/meal-detail/view/meal-detail-view';




// ----------------------------------------------------------------------

export default function MealDetailPage() {
  return (
    <>
      <Helmet>
        <title> Meal detail | Planora</title>
      </Helmet>

      <MealDetailView />
    </>
  );
}
