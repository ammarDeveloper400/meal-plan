import { Helmet } from 'react-helmet-async';

import { MyRecipesView } from '../../sections/dashboard/my-recipes/view';

// ----------------------------------------------------------------------

export default function MyRecipesPage() {
  return (
    <>
      <Helmet>
        <title> My recipes | Planora</title>
      </Helmet>

      <MyRecipesView />
    </>
  );
}
