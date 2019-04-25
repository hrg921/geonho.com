import { Provider } from 'mobx-react';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import ETCRoutes, { basePath as etcBasePath } from './routes/ETCRoutes';
import MakerRoutes, { basePath as makerBasePath } from './routes/MakerRoutes';
import MoneyFlowRoutes, {
  basePath as moneyFlowBasePath,
} from './routes/MoneyFlowRoutes';
import { client } from './stores/apollo';
import { store } from './stores/mobx';

interface RouteGroupItem {
  path: string;
  component: React.ComponentClass;
}

const etcRoute = {
  path: etcBasePath,
  component: ETCRoutes,
};

const moneyFlowRoute = {
  path: moneyFlowBasePath,
  component: MoneyFlowRoutes,
};

const makerRoute = {
  path: makerBasePath,
  component: MakerRoutes,
};

const routes: RouteGroupItem[] = [etcRoute, makerRoute, moneyFlowRoute];

class App extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <ApolloProvider client={client}>
          <Router>
            <Switch>
              {routes.map(route => (
                <Route path={`/${route.path}`} component={route.component} />
              ))}
              <Route path="/" component={MakerRoutes} />
            </Switch>
          </Router>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default App;
