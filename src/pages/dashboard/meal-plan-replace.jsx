import { Helmet } from 'react-helmet-async';

import MealPlanReplaceView from '../../sections/dashboard/meal-plan-replace/view/meal-plan-replace-view';

// ----------------------------------------------------------------------

export default function MealPlanReplacePage() {
  return (
    <>
      <Helmet>
        <title> Replace meal plan | Planora</title>
      </Helmet>

      <MealPlanReplaceView />
    </>
  );
}
