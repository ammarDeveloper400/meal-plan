import { Helmet } from 'react-helmet-async';

import { CalendarView } from '../../sections/dashboard/modifycalendar/view';

// ----------------------------------------------------------------------

export default function CalendarPage() {
  return (
    <>
      <Helmet>
        <title> My Meal Plan | Planora</title>
      </Helmet>

      <CalendarView />
    </>
  );
}
