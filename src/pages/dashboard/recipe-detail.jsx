import { Helmet } from 'react-helmet-async';

import { RecipeDetailView } from '../../sections/dashboard/my-recipes/recipe-detail/view';




// ----------------------------------------------------------------------

export default function RecipeDetailPage() {
  return (
    <>
      <Helmet>
        <title> Recipe detail | Planora</title>
      </Helmet>

      <RecipeDetailView />
    </>
  );
}
