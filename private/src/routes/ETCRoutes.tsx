import React from 'react';
import styled from 'styled-components';
import Navigation, { RouteItem } from '../components/Navigation';
import WeekendSalaryCalculatorPage from '../pages/etc/WeekendSalaryCalculatorPage';
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
        {routes.map(route => (
          <Route
            path={`/${basePath}/${route.path}`}
            exact
            component={route.component}
          />
        ))}
        <Route component={WeekendSalaryCalculatorPage} />
      </Container>
    );
  }
}

export const basePath = 'etc';

export const weekendSalaryCalculatorRoute = {
  component: WeekendSalaryCalculatorPage,
  title: 'Weekend Money~~~~',
  path: 'weekend/salary',
};

const title = 'Maker';
const routes: RouteItem[] = [weekendSalaryCalculatorRoute];

const Container = styled.div`
  padding-top: 64px;
`;
