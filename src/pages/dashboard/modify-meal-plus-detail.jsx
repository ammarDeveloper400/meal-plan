import { Helmet } from 'react-helmet-async';

import AddRecipeDetailView from '../../sections/dashboard/modify-meal/modify-meal-plus/modify-meal-plus-detail/view/modify-meal-plus-detail-view';

// ----------------------------------------------------------------------

export default function AddRecipeDetailPage() {
  return (
    <>
      <Helmet>
        <title> Add meal | Planora</title>
      </Helmet>

      <AddRecipeDetailView />
    </>
  );
}
