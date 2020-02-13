import { RouteProps } from 'react-router-dom';

import Home from './components/pages/Home';
import Sample from './components/pages/Sample';
import NotFound from './components/pages/NotFound';

export interface Route {
  path: string,
  page: RouteProps['component'],
};

export interface Redirect {
  from?: string,
  to: string,
};

export const routes: Route[] = [
  {
    path: `/home`,
    page: Home,
  },
  {
    path: `/sample`,
    page: Sample,
  },
  {
    path: `/404`,
    page: NotFound,
  },
];

export const redirects: Redirect[] = [
  {
    from: `/`,
    to: `/home`,
  },
  {
    to: `/404`
  },
];

export default routes;
