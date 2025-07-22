import { Helmet } from 'react-helmet-async';

import { SubmitRecipeView } from '../../sections/dashboard/submitrecipe';

// ----------------------------------------------------------------------

export default function SubmitRecipePage() {
  return (
    <>
      <Helmet>
        <title> Submit a recipe idea | Planora</title>
      </Helmet>

      <SubmitRecipeView />
    </>
  );
}
