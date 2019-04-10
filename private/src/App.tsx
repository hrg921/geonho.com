import React from 'react';
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MakerRoutes, { basePath as makerBasePath } from './routes/MakerRoutes';
import MoneyFlowRoutes, {
  basePath as moneyFlowBasePath,
} from './routes/MoneyFlowRoutes';
import { client } from './stores/apollo';

const moneyFlowRoute = (
  <Route path={moneyFlowBasePath} exact component={MoneyFlowRoutes} />
);
const makerRoute = <Route path={makerBasePath} component={MakerRoutes} />;

const routes = [makerRoute, moneyFlowRoute];

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            {routes}
            <Route path="/" component={MakerRoutes} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
