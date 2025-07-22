import { Helmet } from 'react-helmet-async';

import FavoriteMealView from '../../sections/dashboard/favorite-meal/view/favorite-meal-view';

// ----------------------------------------------------------------------

export default function FavoriteMealPage() {
  return (
    <>
      <Helmet>
        <title>  Favorite meal | Planora</title>
      </Helmet>

      <FavoriteMealView />
    </>
  );
}
