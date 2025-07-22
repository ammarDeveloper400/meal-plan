import { Helmet } from 'react-helmet-async';

import ModifyMealView from '../../sections/dashboard/modify-meal/view/modify-meal';

// ----------------------------------------------------------------------

export default function ModifyMealPage() {
  return (
    <>
      <Helmet>
        <title> Modify meal | Planora</title>
      </Helmet>

      <ModifyMealView />
    </>
  );
}
