import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navigation, { RouteItem } from '../components/Navigation';
import WishProductsPage from '../pages/money-flow/WishProductsPage';
import MoneyFlowPage from '../pages/money-flow';

export default class MoneyFlowRoutes extends React.PureComponent {
    public render() {
        return (
            <Container>
                <Navigation basePath={basePath} routes={routes}/>
                <Switch>
                    {routes.map(route => <Route path={`/${basePath}/${route.path}`} exact component={route.component} />)}
                    <Route component={MoneyFlowPage} />
                </Switch>
            </Container >
        )
    }
}

export const basePath = 'money-flow';

export const wishProductsRoute = {
    component: WishProductsPage,
    title: 'Wish Products',
    path: 'wish-products'
}

export const indexRoute = {
    component: MoneyFlowPage,
    title: 'Money Flow Management',
    path: '',
}

const routes: RouteItem[] = [wishProductsRoute, indexRoute]

const Container = styled.div``;
