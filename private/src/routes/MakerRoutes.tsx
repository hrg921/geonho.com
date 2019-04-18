import React from 'react';
import styled from 'styled-components';
import Navigation, { RouteItem } from '../components/Navigation';
import DailyMakerPage from '../pages/maker/DailyMakerPage';
import DailyMakerTasksPage from '../pages/maker/DailyMakerTasksPage';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

export default class MakerRoutes extends React.PureComponent {
    public render() {
        return (
            <Container>
                <Navigation basePath={basePath} navigationTitle={title} routes={routes}></Navigation>
                <Switch>
                    {routes.map(route => <Route path={`/${basePath}/${route.path}`} exact component={route.component} />)}
                    <Route component={DailyMakerPage} />
                </Switch>
            </Container>
        )
    }
}

export const basePath = 'maker';

export const dailyMakerRoute = {
    component: DailyMakerPage,
    title: 'Daily Maker',
    path: 'daily'
};

export const dailyMakerTasksRoute = {
    component: DailyMakerTasksPage,
    title: 'Daily Maker Tasks',
    path: 'daily/tasks'
};

const title = 'Maker';
const routes: RouteItem[] = [dailyMakerRoute, dailyMakerTasksRoute];

const Container = styled.div`
`;