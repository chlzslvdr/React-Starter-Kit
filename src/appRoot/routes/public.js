import { lazy } from 'react';
const Test = lazy(() => import('../../modules/Test'));

const publicRoutes = [
  {
    component: Test,
    path: '/test',
    exact: true,
  },
];

export default publicRoutes;
