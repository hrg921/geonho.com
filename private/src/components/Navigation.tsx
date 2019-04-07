import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { AppBar, Divider, Drawer, IconButton, List, ListItem, Toolbar, Typography } from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon, Menu as MenuIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';


export interface RouteItem {
    component: React.ComponentClass,
    title: string;
    path: string;
    isIndex?: boolean;
}

interface Props {
    basePath: string;
    navigationTitle: string;
    routes: RouteItem[];
}

@observer
export default class Navigation extends React.PureComponent<Props> {
    @observable public open: boolean = false;

    public toggleDrawer() {
        this.open = !this.open;
    }

    public render() {
        const { open } = this;
        const { basePath, navigationTitle, routes } = this.props;

        return (
            <NavigationContainer>
                <AppBar>
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer.bind(this)}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography>
                            {navigationTitle}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer open={open}>
                    <IconButton onClick={this.toggleDrawer.bind(this)}>
                            <ChevronLeftIcon/>
                    </IconButton>
                    <Divider />
                    <List>
                        {routes.map(route => (
                            <Link to={`/${basePath}/${route.path}`}>
                                <ListItem>
                                    <Typography>{route.title}</Typography>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Drawer>
            </NavigationContainer>
        )
    }
}

const NavigationContainer = styled.nav`
`;
