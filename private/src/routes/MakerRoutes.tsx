import React from 'react';
import styled from 'styled-components';
import Navigation, { RouteItem } from '../components/Navigation';
import DailyMakerPage from '../pages/maker/DailyMakerPage';
import DailyMakerTasksPage from '../pages/maker/DailyMakerTasksPage';
import MakerHomePage from '../pages/maker/MakerHomePage';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

export default class MakerRoutes extends React.PureComponent {
  public render() {
    return (
      <Container>
        <Navigation
          basePath={basePath}
          navigationTitle={title}
          routes={routes}
        />
        <Switch>
          {routes.map(route => (
            <Route
              path={`/${basePath}/${route.path}`}
              exact
              component={route.component}
            />
          ))}
          <Route component={MakerHomePage} />
        </Switch>
      </Container>
    );
  }
}

export const basePath = 'maker';

export const dailyMakerRoute = {
  component: DailyMakerPage,
  title: 'Daily Maker',
  path: 'daily',
};

export const dailyMakerTasksRoute = {
  component: DailyMakerTasksPage,
  title: 'Daily Maker Tasks',
  path: 'daily/tasks',
};

export const makerHomeRoute = {
  component: MakerHomePage,
  title: 'Maker Home',
  path: 'home',
};

const title = 'Maker';
const routes: RouteItem[] = [
  dailyMakerRoute,
  dailyMakerTasksRoute,
  makerHomeRoute,
];

const Container = styled.div`
  padding-top: 64px;
`;
