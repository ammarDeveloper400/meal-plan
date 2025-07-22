
import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import LandingLayout from 'src/layouts/landing';
import DashboardLayout from 'src/layouts/dashboard';

import DetailPage from '../pages/landing/details';

// import LeadMagnetPage from '../pages/landing/lead-magnet';

// ------------------ Dashboard Pages ------------------

export const AccountPage = lazy(() => import('src/pages/dashboard/account'));
export const PreferencePage = lazy(() => import('src/pages/dashboard/preference'));
export const AccountDetailPage = lazy(() => import('src/pages/dashboard/account-detail'));
export const PaymentMethodPage = lazy(() => import('src/pages/dashboard/payment'));
export const MyMealsPage = lazy(() => import('src/pages/dashboard/meals'));
export const FavoriteMealPage = lazy(() => import('src/pages/dashboard/favorite-meal'));
export const MealConsultPage = lazy(() => import('src/pages/dashboard/meal-consult'));
export const ModifyMealPage = lazy(() => import('src/pages/dashboard/modify-meal'));
export const MealPlanReplacePage = lazy(() => import('src/pages/dashboard/meal-plan-replace'));
export const ReplaceVerificationPage = lazy(() =>import('src/pages/dashboard/replace-verification'));
export const MyRecipesPage = lazy(() => import('src/pages/dashboard/my-recipes'));
export const MealHistoryPage = lazy(() => import('src/pages/dashboard/meal-history'));
export const MealHistoryCalendarPage = lazy(() => import('src/pages/dashboard/meal-history-calendar'));
// export const ModifyMealPlusCalendarPage = lazy(() => import('src/pages/dashboard/modify-meal-plus-calendar'));

export const RecipeDetailPage = lazy(() => import('src/pages/dashboard/recipe-detail'));
export const MealDetailPage = lazy(() => import('src/pages/dashboard/meal-detail'));


export const ModifyMealPlusPage = lazy(() => import('src/pages/dashboard/modify-meal-plus'));
export const AddRecipeDetailPage = lazy(() => import('src/pages/dashboard/modify-meal-plus-detail'));


export const HowitWorkPage = lazy(() => import('src/pages/dashboard/howitwork'));
export const ReferralWorkPage = lazy(() => import('src/pages/dashboard/referralwork'));
export const SubmitRecipePage = lazy(() => import('src/pages/dashboard/submitrecipe'));
export const ContactDashboardPage = lazy(() => import('src/pages/dashboard/contactdashboard'));
export const AboutDashboardPage = lazy(() => import('src/pages/dashboard/aboutdashboard'));
export const PrivacyPolicyPage = lazy(() => import('src/pages/dashboard/privacy'));
export const TermsAndConditionPage = lazy(() => import('src/pages/dashboard/terms'));
export const FaqDashboardPage = lazy(() => import('src/pages/dashboard/faq'));
export const TablePage = lazy(() => import('src/pages/dashboard/table'));
export const MealplanningPage = lazy(() => import('src/pages/dashboard/mealplanning'));
export const MySubscriptionPage = lazy(() => import('src/pages/dashboard/subscription'));
export const CalendarPage = lazy(() => import('src/pages/dashboard/calendar'));
export const CardDetailPage = lazy(() => import('src/pages/dashboard/carddetail'));

// export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------- Landing Pages -----------

export const HomePage = lazy(() => import('src/pages/landing/homepage'));
export const ContactUsPage = lazy(() => import('src/pages/landing/contact'));
export const FaqPage = lazy(() => import('src/pages/landing/faq'));
export const LeadMagnetPage = lazy(() => import('src/pages/landing/lead-magnet'));

export const PrivacyPage = lazy(() => import('src/pages/landing/privacy'));
// export const PrivacyPage = lazy(() => import('src/pages/landing/privacy'));
export const TermsConditionPage = lazy(() => import('src/pages/landing/terms'));
export const ReferralPage = lazy(() => import('src/pages/landing/referral'));
export const AccountFormPage = lazy(() => import('src/pages/landing/accountform'));
export const AboutUsPage = lazy(() => import('src/pages/landing/about'));
export const SubscriptionPage = lazy(() => import('src/pages/landing/subscription'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <LandingLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </LandingLayout>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: 'contact', element: <ContactUsPage /> },
        { path: 'faq', element: <FaqPage /> },
        { path: 'privacy', element: <PrivacyPage /> },
        { path: 'terms', element: <TermsConditionPage /> },
        { path: 'referral', element: <ReferralPage /> },
        { path: 'account-form', element: <AccountFormPage /> },
        { path: 'about', element: <AboutUsPage /> },
        { path: 'subscription', element: <SubscriptionPage /> },
        { path: 'lead-magnet', element: <LeadMagnetPage /> },
        { path: 'detail', element: <DetailPage /> },
      ],
    },
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: 'account', element: <AccountPage /> },
        { path: 'account/preference', element: <PreferencePage /> },
        { path: 'account/account-detail', element: <AccountDetailPage /> },
        { path: 'account/account-payment', element: <PaymentMethodPage /> },
        { path: 'meal', element: <MyMealsPage /> },
        { path: 'meal/favorite-meal', element: <FavoriteMealPage /> },
        { path: 'meal/suggested-meal', element: <MealConsultPage /> },
        { path: 'meal/modify-meal', element: <ModifyMealPage /> },
        { path: 'meal/replace-meal', element: <MealPlanReplacePage /> },
        { path: 'meal/replace-meal-verification', element: <ReplaceVerificationPage /> },
        { path: 'recipes', element: <MyRecipesPage /> },
        { path: 'recipes/recipe-detail', element: <RecipeDetailPage /> },
        { path: 'meal/recipe-detail', element: <MealDetailPage /> },
        { path: 'meal/add-meal', element: <ModifyMealPlusPage /> },

        // lead magnet
        // { path: 'lead-magnet', element: <LeadMagnetPage/> },



        { path: 'meal/add-recipe', element: <AddRecipeDetailPage /> },
        { path: 'meal/meal-history', element: <MealHistoryPage /> },
        { path: 'meal/meal-history-calendar', element: <MealHistoryCalendarPage /> },
        // { path: 'meal/modify-mealcalendar-', element: <ModifyMealPlusCalendarPage /> },


        { path: 'how-it-work', element: <HowitWorkPage /> },
        { path: 'referral-work', element: <ReferralWorkPage /> },
        { path: 'submit-recipe', element: <SubmitRecipePage /> },
        { path: 'contact-dashboard', element: <ContactDashboardPage /> },
        { path: 'about-us', element: <AboutDashboardPage /> },
        { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
        { path: 'terms-conditions', element: <TermsAndConditionPage /> },
        { path: 'faq-dashboard', element: <FaqDashboardPage /> },
        { path: 'table', element: <TablePage /> },
        { path: 'my-meal-plan', element: <MealplanningPage /> },
        { path: 'account/my-subscription', element: <MySubscriptionPage /> },
        { path: 'meal/my-meal-plan', element: <MealplanningPage /> },
        // { path: 'meal/modify-calendar', element: <CalendarPage /> },
        { path: 'account/card-detail', element: <CardDetailPage /> },

        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        // { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    // {
    //   path: 'header',
    //   element: <Header />,
    // },
    // {
    //   path: 'footer',
    //   element: <Footer />,
    // },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
