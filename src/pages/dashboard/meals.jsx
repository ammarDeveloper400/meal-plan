import { Helmet } from 'react-helmet-async';

import MealView from '../../sections/dashboard/meals/view/meal-view';

// ----------------------------------------------------------------------

export default function MyMealsPage() {
  return (
    <>
      <Helmet>
        <title> My meal plans | Planora</title>
      </Helmet>

      <MealView />
    </>
  );
}
