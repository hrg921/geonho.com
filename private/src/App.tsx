import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MakerRoutes, { basePath as makerBasePath } from './routes/MakerRoutes';
import MoneyFlowRoutes, { basePath as moneyFlowBasePath } from './routes/MoneyFlowRoutes';

const moneyFlowRoute = <Route path={moneyFlowBasePath} exact component={MoneyFlowRoutes} />;
const makerRoute = <Route path={makerBasePath} component={MakerRoutes} />;

const routes = [
  makerRoute,
  moneyFlowRoute
];

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes}
          <Route path='/' component={MakerRoutes} />
        </Switch>
      </Router>
    );
  }
}

export default App;
