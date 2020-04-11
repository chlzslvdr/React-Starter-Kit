import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import publicRoutes from './routes/public';
import privateRoutes from './routes/private';
import Loading from '../components/Loading';

const AppRoot = () => {
  const routes = [...publicRoutes, ...privateRoutes];

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Redirect from="/" to="/test" exact />
          {routes.map((route, index) => (
            <Route
              path={route.path}
              component={route.component}
              key={String(index)}
            />
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoot;
