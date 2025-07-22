import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'My account',
    path: '/account',
    showAdmin: true,
    icon: icon('account'),
    children: [
      {
        title: 'Preferences',
        path: '/account/preference',
      },
      {
        title: 'My subscription',
        path: '/account/my-subscription',
      },
      {
        title: 'Account details',
        path: '/account/account-detail',
      },
      {
        title: 'Payment method',
        path: '/account/account-payment',
      },
    ],
  },
  {
    title: 'My meal plans',
    path: '/meal',
    icon: icon('meal'),
  },
  {
    title: 'My recipes',
    path: '/recipes',
    icon: icon('recipes'),
  },
  {
    title: 'How does it work?',
    path: '/how-it-work',
    icon: icon('works'),
  },
  {
    title: 'How does the referral work?',
    path: '/referral-work',
    icon: icon('referralicon'),
  },
  {
    title: 'Submit a recipe idea',
    path: '/submit-recipe',
    icon: icon('submit'),
  },
  {
    title: 'Contact us',
    path: '/contact-dashboard',
    icon: icon('contactusicon'),
  },
  {
    title: 'Privacy policy',
    path: '/privacy-policy',
    icon: icon('privacy'),
  },
  {
    title: 'Terms & conditions',
    path: '/terms-conditions',
    icon: icon('terms'),
  },
  {
    title: 'FAQ',
    path: '/faq-dashboard',
    icon: icon('faq'),
  },
    // {
    //   title: 'Logout',  
    //   icon: icon('logout'),
    // },
];

export default navConfig;
