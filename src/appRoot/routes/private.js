import { lazy } from 'react';
const Home = lazy(() => import('../../modules/Home'));

const privateRoutes = [
  {
    component: Home,
    path: '/home',
    exact: true,
  },
];

export default privateRoutes;
