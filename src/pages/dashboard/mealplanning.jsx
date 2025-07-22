import { Helmet } from 'react-helmet-async';

import MealPlanningView from '../../sections/dashboard/mealcalendar/view/mealplanning-view';

// ----------------------------------------------------------------------

export default function MealplanningPage() {
  return (
    <>
      <Helmet>
        <title> My meal plan | Planora</title>
      </Helmet>

      <MealPlanningView />
    </>
  );
}
